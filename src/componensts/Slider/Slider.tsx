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
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [current]);

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="relative flex w-screen h-full overflow-hidden ">
      {items.map((slide, index) => {
        return (
          <div
            key={index}
            className={`absolute w-screen h-full transition-transform duration-1000 ease-in-out ${
              index === current
                ? "translate-x-0"
                : index < current
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <a href="/ProductsPage">
              <div
                style={{ backgroundImage: `url(${slide})` }}
                className="w-full md:h-full h-5/6 bg-no-repeat bg-cover md:bg-cover bg-center"
              ></div>
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
