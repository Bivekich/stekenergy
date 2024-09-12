import { useEffect, useState } from "react";

import SliderBar from "./SliderBar";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { client } from "../../../stackenergy/client";

export default function Slider() {
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(0);
  const [items, setItems] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const len: number =
    isMobile && items.length !== 0 ? items.length : items.length;
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

  const prevSlide = (): void => {
    if (current - 1 < 0) {
      setCurrent(len - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    const handleResize = async () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    const query = async () => {
      let images = [];
      if (isMobile) {
        const data = await client.fetch(
          `*[_type == 'Lenta']{imagesMobile[]{asset->{url}}}`
        );
        images = data;
      } else {
        const data = await client.fetch(
          `*[_type == 'Lenta']{images[]{asset->{url}}}`
        );
        images = data;
      }
      if (images.length > 0 && isMobile) {
        const imageUrls = images.flatMap((item: any) =>
          item.imagesMobile.map((image: any) => image.asset.url)
        );
        setItems(imageUrls);
      } else {
        const imageUrls = images.flatMap((item: any) =>
          item.images.map((image: any) => image.asset.url)
        );
        setItems(imageUrls);
      }
    };
    query();
  }, []);

  return (
    items && (
      <div className="relative flex w-screen h-full overflow-hidden ">
        {items?.map((slide, index) => {
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
        {items.length !== 0 && (
          <SliderBar
            current={current}
            handleCurrent={handleCurrent}
            len={items.length}
          ></SliderBar>
        )}
      </div>
    )
  );
}
