import { useEffect, useState } from "react";
import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import NewsPageCard from "../../componensts/NewsPageCard/NewsPageCard";
import { client } from "../../../stackenergy/client";
interface newsData {
  id: number;
  title: string;
  des: string;
  img: string;
  isIndustry: boolean;
  isCompany: boolean;
  date: string;
}
export default function NewsPage() {
  const [newsData, setNewsData] = useState<newsData[]>([]);
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'newsData']{title, des, img{asset->{url}}, isIndustry, isCompany, date, author, src}"
      );
      let arr: newsData[] = [];

      data.map((item: any) => {
        arr.push({
          id: data.length,
          title: item.title,
          des: item.des,
          img: item.img.asset.url === null ? "" : item.img.asset.url,
          isIndustry: item.isIndustry,
          isCompany: item.isCompany,
          date:
            "" +
            new Date(item.date).getFullYear() +
            "" +
            new Date(item.date).getMonth() +
            "" +
            new Date(item.date).getDay(),
        });
      });
      setNewsData(arr);
    };
    query();
  }, []);
  return (
    <div className="w-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-[65%] md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>Новости</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - Новости
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center  px-2 md:px-2 lg:mt-0 mt-5">
        <div className="flex lg:w-[65%] md:w-full w-full items-center justify-center md:justify-start flex-wrap flex-col md:flex-row md:gap-0 gap-10">
          {newsData.map((item, index) => {
            return (
              <NewsPageCard
                key={index}
                id={item.id}
                isIndustry={item.isIndustry}
                isCompany={item.isCompany}
                title={item.title}
                des={item.des}
                img={item.img}
              ></NewsPageCard>
            );
          })}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
