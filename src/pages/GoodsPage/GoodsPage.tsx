import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import Footer from "../../componensts/Footer/Footer";
import { useState } from "react";
import { products } from "../../db/data";
interface Param {
  id: number;
  mainImg: string;
  title: string;
  numberOfItems: number;
  link: string;
}
import { useCartDispatch } from "../../context/cartContext";
export default function GoodsPage() {
  const ProductName = useParams();
  const [numberItems, setNumberItems] = useState(1);
  const item = products[Number(ProductName.article)];
  const payload = {
    id: item.id,
    mainImg: item.mainImg,
    title: item.name,
    numberOfItems: numberItems,
    link: `/ProductsPage/${item.id}/${item.name}`,
  };
  const dispatch = useCartDispatch();

  const addToCart = (product: Param) => {
    dispatch({ type: "add", item: product });
  };
  return (
    <div className="w-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-1/2 md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>{ProductName.nameOfProduct}</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - {ProductName.nameOfProduct}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 pb-5">
        <div className="flex lg:w-1/2 w-screen px-4 flex-col md:justify-normal md:items-start justify-center items-center md:flex-row">
          <img src={item.mainImg} className="w-1/3 h-fit"></img>
          <div className="flex-1"></div>
          <div className="lg:ml-10 md:px-3 lg:px-0">
            <span className="flex w-96 flex-col px-4 md:px-0">
              {item.shortDescription}
            </span>
            <div className="flex gap-3 mt-5 mb-5 px-4 md:px-0">
              <span>Колличество:</span>
              <div className="flex gap-3">
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
              </div>
            </div>
            <div className="flex flex-col w-72 gap-3 px-4 md:px-0">
              <a
                className="border-2 rounded-full h-10 flex items-center justify-center"
                href={`/Inquire/${payload.id}/prod`}
              >
                Запросить
              </a>
              <button
                className="border-2 rounded-full h-10"
                onClick={() => addToCart(payload)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-5">
        <div className="flex lg:w-1/2 md:w-full md:px-4 lg:px-0 flex-col">
          <div className="flex flex-col">
            <div className="flex gap-5 px-4 border-t-2 pt-3 pb-3">
              <span>Модель: {item.category}</span>
              <span>Бренд: {item.brand}</span>
            </div>

            <div className="w-full flex-col px-4 border-2">
              <div className="w-full">
                <span className="">Описание</span>
              </div>
              <span>{item.fullDescription}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
