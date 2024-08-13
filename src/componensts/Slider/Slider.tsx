import { useEffect, useState } from "react";
import { heroImgs } from "../../db/data";
import SliderBar from "./SliderBar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [items, setItems] = useState<string[]>([]);
  const len: number = heroImgs.length;

  const handleCurrent = (item: number) => {
    setCurrent(item);
  };

  const nextSlide = () => {
    if (current + 1 >= len) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    setItems((prev: string[]) => [...prev, ...heroImgs]);
  }, [current]);

  const prevSlide = () => {
    if (current - 1 < 0) {
      setCurrent(len - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative flex w-full h-full">
      {items.map((slide, index) => {
        if (current === index) {
          return <img key={index} src={slide} alt={`Image ${index + 1}`}></img>;
        }
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
