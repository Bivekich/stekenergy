import { useEffect, useState } from "react";
import { heroImgs } from "../../db/data";
import { heroImgsMobile } from "../../db/data";
import SliderBar from "./SliderBar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
export default function Slider() {
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const len: number = isMobile ? heroImgsMobile.length : heroImgs.length;

  const handleCurrent = (item: number): void => {
    setCurrent(item);
  };

  const nextSlide = () => {
    if (current + 1 >= len) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleNextSlide = () => {
    nextSlide();
    stopAutoPlay();
  };

  const handlePrevSlide = () => {
    prevSlide();
    stopAutoPlay();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initialize state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [current]);

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    const updateItems = () => {
      setItems(isMobile ? [...heroImgsMobile] : [...heroImgs]);
    };
    updateItems();
  }, [isMobile]);

  const prevSlide = (): void => {
    if (current - 1 < 0) {
      setCurrent(len - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="flex relative w-full h-full md:h-full overflow-hidden">
      {items.map((slide, index) => {
        return (
          <div
            key={index}
            className={`absolute w-full md:h-full transition-transform duration-1000 ease-in-out ${
              index === current
                ? "translate-x-0"
                : index < current
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <a href="#">
              <img
                src={`${slide}`}
                className="w-full h-full object-contain md:object-cover"
              ></img>
            </a>
          </div>
        );
      })}

      <div className="md:flex absolute h-full items-center ml-14 hidden">
        <IoIosArrowDropleftCircle size={"4rem"} onClick={handlePrevSlide} />
      </div>
      <div className="md:flex absolute h-full items-center right-0 mr-14 hidden">
        <IoIosArrowDroprightCircle size={"4rem"} onClick={handleNextSlide} />
      </div>
      <SliderBar current={current} handleCurrent={handleCurrent}></SliderBar>
    </div>
  );
}
