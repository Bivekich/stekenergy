import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import { NewsData } from "../../db/data";
import Footer from "../../componensts/Footer/Footer";
export default function NewsMainPage() {
  const params = useParams();
  const newsTitle = params.Title;
  const paramsId = Number(params?.id) - 1;
  const news = NewsData[paramsId];
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>
      <div className="flex justify-center items-center h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-1/2 md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div className="lg:w-1/2">
            <span className="w-full">{newsTitle}</span>
          </div>
          <div>
            <span>
              <a href="/">Главная</a> - Новости
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 md:mb-10 lg:mb-0 px-4 lg:px-0 gap-3 text-center ">
        <div>
          <span className="text-xl">{news.title}</span>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>Просмотрено:</li>
            <li>Автор:</li>
            {
              <li>
                Время публикации: {news.date.getFullYear()}-
                {news.date.getMonth() < 9
                  ? "0" + news.date.getMonth()
                  : news.date.getMonth()}
                -
                {news.date.getDate() < 9
                  ? "0" + news.date.getDate()
                  : news.date.getDate()}
              </li>
            }
            <li>Источник:</li>
          </ul>
        </div>
        <div>
          <span>{news.des}</span>
        </div>
      </div>
      <div className="flex-1 mb-10 lg:mb-0"></div>
      <div className="justify-self-end">
        <Footer></Footer>
      </div>
    </div>
  );
}
