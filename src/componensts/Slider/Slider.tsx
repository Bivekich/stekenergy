import { useEffect, useState } from "react";
import { heroImgs } from "../../db/data";
import SliderBar from "./SliderBar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function Slider() {
  const [current, setCurrent] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const len: number = heroImgs.length;

  const handleCurrent = (item: number): void => {
    setCurrent(item);
  };

  const nextSlide = (): void => {
    if (current + 1 >= len) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect((): void => {
    setItems((prev: string[]) => [...prev, ...heroImgs]);
  }, [current]);

  const prevSlide = (): void => {
    if (current - 1 < 0) {
      setCurrent(len - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="flex relative w-full h-full">
      {items.map((slide, index) => {
        return (
          <div
            className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
              index === current
                ? "translate-x-0"
                : index < current
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img key={index} src={`${slide}`} className="w-full h-full"></img>
          </div>
        );
      })}

      <div className="flex absolute h-full items-center ml-14">
        <IoIosArrowDropleftCircle size={"4rem"} onClick={prevSlide} />
      </div>
      <div className="flex absolute h-full items-center right-0 mr-14">
        <IoIosArrowDroprightCircle size={"4rem"} onClick={nextSlide} />
      </div>
      <SliderBar current={current} handleCurrent={handleCurrent}></SliderBar>
    </div>
  );
}
