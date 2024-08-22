import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
export default function Products() {
  const products = [
    {
      src: "/metalformingeq.webp",
      title: "Оборудование для формовки металла",
      link: "/ProductsPage/type/MetalFormingEquipment/all",
    },
    {
      src: "/powergen.webp",
      title: "Генераторы энергии",
      link: "/ProductsPage/type/DieselGenerator/all",
    },
    {
      src: "/coldChain.webp",
      title: "Холодильные хранилища",
      link: "/ProductsPage/type/DieselGenerator/all",
    },
    {
      src: "/waterpump.webp",
      title: "Водяной насосы",
      link: "/ProductsPage/type/DieselPumpSet/all",
    },
  ];
  return (
    <div className="w-screen h-[90rem] md:h-full min-w-screen mb-5 md:mt-0 md:mb-0">
      <div className="lg:grid grid-cols-2 md:grid-cols-3 grid-rows-4 gap-0 h-full w-full flex flex-col">
        <div className="flex w-full h-full row-span-4 bg-[url('/factory.webp')] bg-no-repeat bg-cover justify-center items-center text-center text-white flex-col gap-20 md:gap-15 pt-5 md:pt-1 md:pb-10">
          <div>
            <img src="/Energylogo.png" className="lg:w-[30rem] w-[25rem]"></img>
          </div>
          <div>
            <span className="text-4xl text-bold">НАША ПРОДУКЦИЯ</span>
          </div>
          <div className="w-3/4">
            <span>
              Мы с нетерпением ждем установления хороших партнерских отношений с
              вами и совместного развития для многообещающего будущего!
            </span>
          </div>
          <div className="transition-colors duration-300 ease-in-out hover:bg-[#b4b4b5] hover:text-black md:mb-0 mb-4">
            <button className="w-48 h-14 border-t-2 border-b-2 text-lg">
              <a href="/ProductsPage">
                <span className="flex items-center justify-center">
                  БОЛЬШЕ +
                </span>
              </a>
            </button>
          </div>
        </div>

        <div className="w-screen lg:hidden">
          <div>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="w-full flex"
            >
              {products.map((item, index) => {
                return (
                  <div key={index} className="flex">
                    <SwiperSlide key={index} className="w-full">
                      <a href={item.link}>
                        <img
                          key={index}
                          src={item.src}
                          className="w-full h-full mb-50"
                        ></img>
                      </a>

                      <div className="flex w-full absolute text-center mt-2 bottom-0 justify-center items-center mb-8">
                        {item.title}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="row-span-2 h-full object-cover lg:flex hidden">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/metalformingeq.webp')] bg-no-repeat bg-cover bg-center"></div>
            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">
                Оборудование для формовки металла
              </span>
              <a href="/ProductsPage/type/MetalFormingEquipment/all">
                <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-1 md:col-start-2 row-start-3 lg:flex hidden">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/powergen.webp')] bg-no-repeat bg-cover bg-center"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Генераторы энергии</span>
              <a href="/ProductsPage/type/DieselGenerator/all">
                <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-2 md:col-start-3 row-start-1 lg:flex hidden">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/coldChain.webp')] bg-no-repeat bg-cover bg-center"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Холодильные хранилища</span>
              <a>
                <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-2 md:col-start-3 row-start-3 lg:flex hidden">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/waterpump.webp')] bg-no-repeat bg-cover bg-center"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Водяной насосы</span>
              <a href="/ProductsPage/type/DieselPumpSet/all">
                <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
