import { IoMailOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
interface ProductProp {
  img: string;
  link: string;
  name: string;
}
export default function ProductCard({ img, link, name }: ProductProp) {
  return (
    <div className="flex flex-col w-[47%] md:w-[30%] lg:w-96 h-[20rem] lg:h-[30rem] md:h-[20rem] items-center justify-center border-2 border-black bg-white mb-2 overflow-hidden p-4 sm:p-2 gap-4">
      <div>
        <a href={link}>
          <img
            src={img}
            className="object-center md:max-h-32 lg:max-h-56 max-h-32 max-w-full"
          ></img>
        </a>
      </div>
      <div className="mt-2 text-center">
        <span className="flex text-black text-xl sm:text-sm md:text-base mb-auto flex-wrap">
          {name}
        </span>
      </div>
      <div className="flex-1"></div>
      <div className="flex lg:w-[70%] md:w-[80%] w-full min-h-10 justify-center">
        <div className="flex w-60 h-23 bg-gray-400 text-center items-center">
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
