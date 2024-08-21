import { FaArrowRightLong } from "react-icons/fa6";
import NewsCard from "./NewsCard.tsx/NewsCard";
import { NewsData } from "../../db/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function News() {
  return (
    <div className="flex w-full min-h-3/5 md:text-start mb-20 mt-20 items-center flex-col">
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

      <div className="md:flex gap-20 hidden">
        {NewsData.map((item, index) => {
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

      <div className="flex w-screen h-full items-center justify-center">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="md:hidden flex justify-center items-center w-full h-full"
        >
          {NewsData.map((item, index) => {
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
    </div>
  );
}
