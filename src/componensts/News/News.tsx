import { FaArrowRightLong } from "react-icons/fa6";
import NewsCard from "./NewsCard.tsx/NewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { client } from "../../../stackenergy/client";
export default function News() {
  const [news, setNews] = useState<newsData[]>();
  interface newsData {
    id: number;
    title: string;
    des: string;
    img: string;
    isIndustry: boolean;
    isCompany: boolean;
    date: Date;
  }
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
          date: new Date(
            new Date(item.date).getFullYear(),
            new Date(item.date).getMonth(),
            new Date(item.date).getDay()
          ),
        });
      });
      setNews(arr);
    };
    query();
  }, []);
  return (
    <div className="flex w-full  md:text-start mb-20 mt-20 items-center flex-col">
      <div className="mb-14 md:text-start text-center">
        <span className="text-5xl">Последние новости</span>
      </div>

      <div className="mb-5">
        <a
          href="/News"
          className="flex items-center justify-centergap-1 hover:text-blue-500"
        >
          БОЛЬШЕ НОВОСТЕЙ <FaArrowRightLong />
        </a>
      </div>

      {news && (
        <div className="md:flex gap-20 hidden flex-wrap px-1 justify-center items-center">
          {news.map((item, index) => {
            if (index < 3) {
              return (
                <NewsCard
                  key={index}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  des={item.des}
                  date={item.date}
                ></NewsCard>
              );
            }
          })}
        </div>
      )}

      {news && (
        <div className="flex w-screen h-full items-center justify-center">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="md:hidden flex justify-center items-center w-full h-full"
          >
            {news.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center w-full h-full"
                >
                  <div
                    key={index}
                    className="flex justify-center items-center w-full h-full"
                  >
                    <NewsCard
                      key={index}
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      des={item.des}
                      date={item.date}
                    ></NewsCard>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
}
