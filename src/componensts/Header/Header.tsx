import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full min-h-10 bg-[#222222] text-white z-50">
      <div
        className={`w-11/12 ${
          isScrolled ? "min-h-10" : "min-h-24"
        } flex items-center m-auto`}
      >
        <div className="">Image</div>

        <div className="m-auto">
          <ul className="flex gap-7">
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                Главная
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>

            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                Продукты
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                О нас
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                FAQ
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                Новости
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                Контакты
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
            <li className="relative group inline-block cursor-pointer">
              <a href="#" className="text-white transition-colors duration-300">
                Видео
              </a>
              <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
            </li>
          </ul>
        </div>

        <div className="flex gap-5">
          <FaShoppingCart size={"2rem"} />
        </div>
      </div>
    </div>
  );
}
