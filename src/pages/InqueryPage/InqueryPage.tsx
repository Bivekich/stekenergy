import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import { products } from "../../db/data";
import Footer from "../../componensts/Footer/Footer";
import { useState } from "react";
export default function InqueryPage() {
  const param = useParams();
  const product = products.filter((item) => item.id === Number(param.id));
  const [numberItems, setNumberItems] = useState(1);
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMassageRequired] = useState(false);
  const handleEmailRequired = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      setEmailRequired(false);
    } else {
      setEmailRequired(true);
    }
  };
  const handleMassageRequired = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== "") {
      setMassageRequired(false);
    } else {
      setMassageRequired(true);
    }
  };
  return (
    <div className="w-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-1/2 md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>{product[0].name}</span>
          </div>
          <div>
            <span>
              <a href="/">Главная</a> - {product[0].name}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:flex justify-center mt-10 mb-10 hidden">
        <div className="flex justify-center flex-col w-[80rem]">
          <span className="text-3xl self-start">Запросить товар</span>
          <table className="border-2 mt-5">
            <thead>
              <tr className="border-2">
                <th className="border-2">Изображение</th>
                <th className="border-2">Название</th>
                <th className="border-2">Колличество</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-1/6 border-2">
                  <img src={product[0].mainImg}></img>
                </td>
                <td className="border-2">
                  <div className="w-full h-full flex justify-center">
                    <span>{product[0].name}</span>
                  </div>
                </td>
                <td className="border-2">
                  <div className="flex w-full h-full justify-center">
                    <input type="number" value={1}></input>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full px-4 mt-5 flex flex-col justify-center items-center mb-5 lg:hidden">
        <span className="text-3xl ">Запросить товар</span>
        <div className="w-1/3 flex ">
          <img src={product[0].mainImg}></img>
        </div>
        <div>
          <span>{product[0].name}</span>
          <span className="flex gap-5 justify-center">
            {" "}
            <button
              className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
              onClick={() =>
                setNumberItems(numberItems - 1 > 0 ? numberItems - 1 : 1)
              }
            >
              -
            </button>
            <span className="text-xl">{numberItems}</span>
            <button
              className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
              onClick={() => setNumberItems(numberItems + 1)}
            >
              +
            </button>
          </span>
        </div>
      </div>
      <form className="flex flex-col mt-10 gap-y-2 mb-10 w-full justify-center items-center">
        <span className="text-2xl w-72"></span>
        <div className="flex gap-y-2 flex-col justify-center w-full items-center ">
          <div className="flex gap-3 text-black justify-center flex-col w-full px-4 lg:px-0 lg:w-1/2">
            <div className="w-full">
              <input
                className="bg-gray-400 w-full h-8 placeholder-black"
                type="email"
                placeholder="*Email"
                onBlur={handleEmailRequired}
                onFocus={handleEmailRequired}
              />
              {emailRequired && <p className="text-red-500">Необходимо!</p>}
            </div>

            <input
              className="bg-gray-400 w-full h-8 placeholder-black"
              type="text"
              placeholder="Имя"
            />
            <input
              className="bg-gray-400 w-full h-8 placeholder-black"
              type="tel"
              placeholder="Тел"
            />
          </div>

          <div className="px-4 lg:px-0 w-full lg:w-1/2 flex flex-col justify-center items-center">
            <div className="lg:px-0 w-full flex flex-col lg:w-full">
              {" "}
              <textarea
                placeholder="*Сообщение"
                className="bg-gray-400 placeholder-black required w-full lg:w-full h-32"
                onBlur={handleMassageRequired}
                onFocus={handleMassageRequired}
              ></textarea>
              {messageRequired && <p className="text-red-500">Необходимо!</p>}
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 w-full flex justify-center items-center">
          <input
            type="submit"
            value={"отправить"}
            className="bg-red-500 h-8 lg:h-10 w-full md:w-1/4"
          ></input>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}
