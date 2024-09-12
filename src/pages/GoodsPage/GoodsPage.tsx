import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import Footer from "../../componensts/Footer/Footer";
import { useEffect, useState } from "react";

interface Param {
  id: number;
  mainImg: string;
  title: string;
  numberOfItems: number;
  link: string;
}
interface Product {
  id: number;
  mainImg: string;
  title: string;
  shortDes: string;
  fullDescription: any;
  category: string;
  brand: string;
}
interface Payload {
  id: number;
  mainImg: string;
  title: string;
  numberOfItems: number;
  link: string;
}
import { useCartDispatch } from "../../context/cartContext";
import { client, urlFor } from "../../../stackenergy/client";
import { PortableText } from "@portabletext/react";

export default function GoodsPage() {
  const ProductName = useParams();
  const [numberItems, setNumberItems] = useState(1);
  const [item, setItem] = useState<Product>();
  const [payload, setPayload] = useState<Payload>();
  const dispatch = useCartDispatch();
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'product']{mainImg{asset->{url}}, title, shortDes, fullDescription, category, brand}"
      );
      const arr = data.map((item: any, index: number) => {
        return {
          id: index + 1,
          mainImg: item.mainImg.asset.url,
          title: item.title,
          shortDes: item.shortDes,
          fullDescription: item.fullDescription,
          category: item.category,
          brand: item.brand,
        };
      });
      const item = arr.filter(
        (item: any) => item.id === Number(ProductName.article)
      )[0];

      setItem(item);
      const payload = {
        id: item?.id,
        mainImg: item?.mainImg,
        title: item?.title,
        numberOfItems: numberItems,
        link: `/ProductsPage/${item?.id}/${item?.title}`,
      };
      setPayload(payload);
    };
    query();
  }, []);

  const components = {
    types: {
      image: ({ value }: any) => {
        return <img src={urlFor(value).toString()}></img>;
      },
      table: ({ value }: any) => {
        return (
          <div className="flex overflow-scroll w-full">
            <table className="border border-grey-400 w-full">
              <tbody>
                {value.rows?.map((row: any, rowIndex: any) => (
                  <tr key={rowIndex} className="border border-grey-400">
                    {row.cells.map((cell: any, cellIndex: any) => (
                      <td
                        key={cellIndex}
                        className="border border-grey-400 text-center"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },
  };
  //const item = products[Number(ProductName.article)];

  const addToCart = (product: Param) => {
    dispatch({ type: "add", item: product });
  };
  return (
    <div className="w-screen flex flex-col flex-wrap">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center overflow-hidden bg-white">
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

      {item && (
        <div className="w-full flex justify-center mt-16 pb-5">
          <div className="relative flex lg:w-1/2 w-screen px-4 flex-col md:justify-normal md:items-start justify-center items-center md:flex-row">
            <img src={item.mainImg} className="w-1/2"></img>
            <div className="flex-1"></div>
            <div className="lg:ml-10 md:px-3 lg:px-0">
              <span className="flex w-96 flex-col px-4 md:px-0">
                {item.shortDes}
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
              {payload && (
                <div className="flex flex-col w-72 gap-3 px-4 md:px-0">
                  <a
                    className="border-2 rounded-full h-10 flex items-center justify-center"
                    href={`/Inquire/${payload.id}/prod/${payload.numberOfItems}/inq`}
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
              )}
            </div>
          </div>
        </div>
      )}
      {item && (
        <div className="w-full flex justify-center flex-wrap mb-5">
          <div className="flex lg:w-1/2 md:w-full md:px-4 lg:px-0 flex-col">
            <div className="flex flex-col">
              <div className="flex gap-5 px-4 border-t-2 pt-3 pb-3">
                <span>Модель: {item.category}</span>
                <span>Бренд: {item.brand}</span>
              </div>

              <div className="w-screen md:w-full flex-col px-4 border-2 cla">
                <div className="w-full">
                  <span className="">Описание</span>
                </div>
                <PortableText
                  value={item.fullDescription}
                  components={components}
                ></PortableText>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}
