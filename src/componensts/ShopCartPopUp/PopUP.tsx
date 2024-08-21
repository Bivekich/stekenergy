import { useCart } from "../../context/cartContext";
import PopUpItem from "./PopUpItem/PopUpItem";
interface Scrolled {
  isScrolled: boolean;
  clickAnime: string;
}
export default function PopUp({ isScrolled, clickAnime }: Scrolled) {
  const cart = useCart();
  return (
    <div
      className={`flex fixed md:w-96 w-full h-4/5 bg-white right-0 z-50 flex-col md:border-l-4 border-[#0e7fdf] md:border-b-4 shadow-2xl${
        isScrolled
          ? `top-10 duration-500 ease-out`
          : `inset-y-24 duration-500 ease-out`
      } ${
        clickAnime === "left" ? `animate-slideOutLeft` : `animate-slideInRight`
      }`}
    >
      <div className="h-5/6 overflow-y-scroll">
        {cart.map((item, index) => {
          return (
            <PopUpItem
              key={index}
              id={item.id}
              img={item.mainImg}
              title={item.title}
              numberOfItems={item.numberOfItems}
              link={item.link}
            ></PopUpItem>
          );
        })}
      </div>

      <div className="flex mt-auto w-full h-16 justify-center items-center">
        <div className="flex bg-[#0e7fdf] w-3/4 h-14 justify-center items-center">
          <a href={`/Indquire/cart/prod`} className="text-2xl">
            Запросить
          </a>
        </div>
      </div>
    </div>
  );
}
