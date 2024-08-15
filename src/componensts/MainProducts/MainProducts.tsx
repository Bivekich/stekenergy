import MainProductCard from "./MainProductCard/MainProductCard";
import { products } from "../../db/data";
import { useEffect, useState } from "react";
interface Param {
  id: number;
  mainImg: string;
  name: string;
  shortDescription: string;
  qrCode: string;
  fullDescription: string;
  descriptionImg: string;
}
export default function MainProducts() {
  const [images, setImages] = useState<Param[]>([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setImages(products);
    }
  }, []);

  return (
    <div className="flex w-screen min-h-fit mb-20">
      <div className="flex mt-10 w-full text-white flex-col justify-center items-center">
        <div className="flex w-full h-fit justify-center mb-14">
          <span className="text-5xl text-bold text-[#333333]">ПРОДУКЦИЯ</span>
        </div>
        <ul className="flex flex-row gap-5 justify-center">
          <li className="flex bg-[#0e6eb8] w-52 h-16 items-center justify-center">
            <a>Дизельный генератор</a>
          </li>
          <li className="flex bg-[#0e6eb8] w-52 h-16 items-center justify-center">
            <a>Газотурбинный двигатель</a>
          </li>
          <li className="flex bg-[#0e6eb8] w-52 h-16 items-center justify-center">
            <a>Морской генератор</a>
          </li>
          <li className="flex bg-[#0e6eb8] w-80 h-16 items-center justify-center">
            <a>Металлообрабатывающее оборудование</a>
          </li>
          <li className="flex bg-[#0e6eb8] w-52 h-16 items-center justify-center">
            <a>Газовый генератор</a>
          </li>
          <li className="flex bg-[#0e6eb8] w-64 h-16 items-center justify-center">
            <a>Дизельный насосный агрегат</a>
          </li>
        </ul>

        <div className="flex justify-center w-11/12 mt-20 m-auto">
          <div className="grid grid-cols-4 gap-x-2">
            {images.map((item, index) => {
              console.log(item);
              return (
                <MainProductCard
                  key={index}
                  img={item.mainImg}
                  name={item.name}
                ></MainProductCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
