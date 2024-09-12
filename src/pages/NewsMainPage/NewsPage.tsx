import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import Footer from "../../componensts/Footer/Footer";
import { useState, useEffect } from "react";
import { client } from "../../../stackenergy/client";
interface newsData {
  id: number;
  title: string;
  des: string;
  img: string;
  isIndustry: boolean;
  isCompany: boolean;
  date: Date;
  src: string;
  author: string;
}
export default function NewsMainPage() {
  const [news, setNews] = useState<newsData[]>();
  const params = useParams();
  const newsTitle = params.Title;
  const paramsId = Number(params?.id) - 1;
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'newsData']{title, des, img{asset->{url}}, isIndustry, isCompany, date, author, src}"
      );
      let arr: newsData[] = [];
      arr.push({
        id: data.length,
        title: data[paramsId].title,
        des: data[paramsId].des,
        img:
          data[paramsId].img.asset.url === null
            ? ""
            : data[paramsId].img.asset.url,
        isIndustry: data[paramsId].isIndustry,
        isCompany: data[paramsId].isCompany,
        date: new Date(
          new Date(data[paramsId].date).getFullYear(),
          new Date(data[paramsId].date).getMonth(),
          new Date(data[paramsId].date).getDay()
        ),
        src: data[paramsId].src,
        author: data[paramsId].author,
      });

      setNews(arr);
    };
    query();
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>
      <div className="flex justify-center items-center h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-1/2 md:w-[90%] w-[80%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div className="lg:w-1/2">
            <span className="w-full">{newsTitle}</span>
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

      {news && (
        <div className="flex flex-col justify-center items-center mt-10 md:mb-10 lg:mb-0 px-4 lg:px-0 gap-3 text-center ">
          <div>
            <span className="text-xl">{news[0].title}</span>
          </div>
          <div>
            <ul className="flex gap-5 justify-center flex-col md:flex-row">
              <li>Просмотрено:</li>
              <li>Автор: {news[0].author}</li>
              {
                <li>
                  Время публикации: {news[0].date.getFullYear()}-
                  {news[0].date.getMonth() < 9
                    ? "0" + news[0].date.getMonth()
                    : news[0].date.getMonth()}
                  -
                  {news[0].date.getDate() < 9
                    ? "0" + news[0].date.getDate()
                    : news[0].date.getDate()}
                </li>
              }
              <li>Источник: {news[0].src}</li>
            </ul>
          </div>
          <div>
            <span>{news[0].des}</span>
          </div>
        </div>
      )}
      <div className="flex-1 mb-10 lg:mb-0"></div>
      <div className="justify-self-end">
        <Footer></Footer>
      </div>
    </div>
  );
}
