import { IoMailOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard() {
  return (
    <div className="flex flex-col w-[45%] md:w-[30%] lg:w-96 h-1/5 lg:h-[30rem] md:h-96 items-center justify-center border-2 border-black bg-white mb-2 overflow-hidden p-4 sm:p-2 gap-4">
      <div>
        <img src="/INNIO.webp" className="object-contain"></img>
      </div>
      <div className="mt-2 text-center px-2">
        <span className="text-black text-xl sm:text-sm md:text-base mb-auto">
          Cummins Diesel Generator
        </span>
      </div>
      <div className="flex-1"></div>
      <div className="flex lg:w-[70%] md:w-[80%] w-full h-10 justify-center">
        <div className="flex w-60 h-full bg-gray-400 text-center items-center">
          <span className="flex w-full justify-center items-center h-full gap-3">
            <IoMailOutline className="flex w-2/12 h-full" size={"1.1rem"} />
            Inqure
          </span>
        </div>
        <div className="w-32 h-full bg-blue-500 text-white">
          <span className="flex w-full h-full justify-center items-center">
            <FaShoppingCart className="w-1/2 h-1/3" />
          </span>
        </div>
      </div>
    </div>
  );
}
