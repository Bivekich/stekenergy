import { FaArrowRightLong } from "react-icons/fa6";
import NewsCard from "./NewsCard.tsx/NewsCard";
import { NewsData } from "../../db/data";
export default function News() {
  return (
    <div className="flex w-full min-h-3/5 mb-20 mt-20 items-center flex-col">
      <div className="mb-14">
        <span className="text-5xl">Последние новости</span>
      </div>

      <div className="mb-5">
        <a href="#" className="flex items-center gap-1 hover:text-blue-500">
          БОЛЬШЕ НОВОСТЕЙ <FaArrowRightLong />
        </a>
      </div>

      <div className="flex gap-20">
        {NewsData.map((item, index) => {
          return (
            <NewsCard
              key={index}
              img={item.img}
              title={item.title}
              des={item.des}
              date={item.date}
            ></NewsCard>
          );
        })}
      </div>
    </div>
  );
}
