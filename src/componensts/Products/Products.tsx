import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Products() {
  return (
    <div className="bg-red-600 w-screen h-screen">
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 gap-0 h-full w-full">
        <div className="flex w-full h-full row-span-4  bg-[url('/factory.webp')] bg-no-repeat bg-cover justify-center items-center text-center text-white flex-col gap-20">
          <div>
            <img src="/royal.webp"></img>
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
          <div>
            <button className="w-48 h-14 border-t-2 border-b-2">
              VIEW MORE +
            </button>
          </div>
        </div>

        <div className="row-span-2 h-full object-cover">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/metalformingeq.webp')] bg-no-repeat bg-cover"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">
                Оборудование для формовки металла
              </span>

              <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-1 md:col-start-2 row-start-3">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/powergen.webp')] bg-no-repeat bg-cover"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Генераторы энергии</span>

              <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-2 md:col-start-3 row-start-1">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/coldChain.webp')] bg-no-repeat bg-cover"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Холодильные хранилища</span>

              <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
            </div>
          </div>
        </div>

        <div className="row-span-2 col-start-2 md:col-start-3 row-start-3">
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-[url('/waterpump.webp')] bg-no-repeat bg-cover"></div>

            <div className="flex absolute bottom-0 w-full h-24 items-center justify-between">
              <span className="ml-7 text-xl">Водяной насосы</span>

              <IoIosArrowDroprightCircle size={"3rem"} className="mr-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
