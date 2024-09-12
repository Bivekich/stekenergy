import { IoMailOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useCartDispatch } from "../../context/cartContext";
interface ProductProp {
  id: number;
  img: string;
  link: string;
  name: string;
}
interface Param {
  id: number;
  mainImg: string;
  title: string;
  numberOfItems: number;
  link: string;
}
export default function ProductCard({ id, img, link, name }: ProductProp) {
  const dispatch = useCartDispatch();
  const addToCart = (product: Param) => {
    dispatch({ type: "add", item: product });
  };
  const item = {
    id: id,
    mainImg: img,
    title: name,
    numberOfItems: 1,
    link: link,
  };
  return (
    <div className="flex flex-col w-[47%] md:w-[30%] lg:w-[30%] h-[20rem] lg:h-[32rem] md:h-[20rem] items-center justify-center border-2 border-black bg-white mb-2 overflow-hidden p-1 sm:p-2 gap-4">
      <div className="relative w-full h-full">
        <a href={link}>
          <img
            src={img}
            className="object-center w-full h-full absolute top-0"
          ></img>
        </a>
      </div>
      <div className="mt-2 text-center">
        <span className="flex text-black lg:text-xl sm:text-sm md:text-base mb-auto flex-wrap w-full h-1/3 text-center">
          {name}
        </span>
      </div>
      <div className="flex-1"></div>
      <div className="flex lg:w-[70%] md:w-[80%] w-full min-h-10 justify-center">
        <div className="flex w-60 h-23 bg-gray-400 text-center items-center">
          <a
            className="flex w-full justify-center items-center h-full gap-3 text-sm md:text-base"
            href={`/Inquire/${item.id}/prod/1/inq`}
          >
            <span className="flex w-full justify-center items-center h-full lg:gap-3 gap-0 md:gap-0 text-sm md:text-base">
              <IoMailOutline
                className="flex w-2/12 h-full justify-center items-center"
                size={"1.1rem"}
              />
              Запросить
            </span>
          </a>
        </div>
        <div
          className="w-32 h-full bg-blue-500 text-white cursor-pointer"
          onClick={() => addToCart(item)}
        >
          <span className="flex w-full h-full justify-center items-center">
            <FaShoppingCart className="w-1/2 h-1/3" />
          </span>
        </div>
      </div>
    </div>
  );
}
