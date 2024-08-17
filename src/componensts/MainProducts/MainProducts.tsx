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

  const product = [
    { title: "Дизельный генератор", ref: "#" },
    { title: "Азотурбинный двигатель", ref: "#" },
    { title: "Морской генератор", ref: "#" },
    { title: "Металлообрабатывающее оборудование", ref: "#" },
    { title: "Дизельный насосный агрегат", ref: "#" },
    { title: "Газовый генератор", ref: "#" },
  ];

  return (
    <div className="flex w-screen min-h-full mb-20">
      <div className="flex mt-10 w-full text-white flex-col justify-center items-center">
        <div className="flex w-full h-fit justify-center mb-14">
          <span className="text-5xl text-bold text-[#333333]">ПРОДУКЦИЯ</span>
        </div>
        <ul className="flex md:flex-row flex-col gap-5 justify-center items-center">
          {product.map((item, index) => {
            return (
              <li
                key={index}
                className="flex bg-[#0e6eb8] p-4 w-full sm:w-auto items-center justify-center text-center"
              >
                <a href={item.ref} className="text-sm sm:text-base">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center w-full md:w-11/12 mt-20 m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
