import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import PopUp from "../ShopCartPopUp/PopUP";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHide, setIsHide] = useState<boolean>(false);
  const [clickAnime, setClickAnim] = useState<string>("left");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHide = () => {
    setIsClicked(true);
    setTimeout(() => setIsHide(!isHide), 500);
    setTimeout(() => setIsClicked(false), 1000);
    clickAnime === "left" ? setClickAnim("right") : setClickAnim("left");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerButtons = [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Продукты",
      href: "/ProductsPage",
    },
    {
      title: "О нас",
      href: "/AboutUs",
    },
    {
      title: "FAQ",
      href: "/FAQ",
    },
    {
      title: "Новости",
      href: "/News",
    },
    {
      title: "Контакты",
      href: "/Contacts",
    },
    {
      title: "Видео",
      href: "/Video",
    },
  ];

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
    <div
      className={`fixed top-0 left-0 w-screen bg-[#222222] text-white z-40 ${
        isScrolled ? `duration-500 ease-out bg-opacity-70` : `bg-opacity-100`
      }`}
    >
      <div
        className={`w-11/12 ${
          isScrolled
            ? "duration-500 min-h-10 ease-out"
            : "duration-500 ease-out min-h-24"
        } flex items-center m-auto`}
      >
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes size="1.5rem" /> : <FaBars size="1.5rem" />}
          </button>
        </div>

        <div className="m-auto hidden md:flex">
          <ul className="flex gap-7">
            {headerButtons.map((item, index) => {
              return (
                <li
                  key={index}
                  className="relative group inline-block cursor-pointer"
                >
                  <Link
                    to={item.href}
                    className="text-white transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                  <span className="absolute left-1/2 bottom-[2px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transform -translate-x-1/2 origin-center transition-transform duration-300 ease-in-out"></span>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={`flex gap-5 ${
            isClicked ? `pointer-events-none` : "pointer-events-auto"
          } ml-auto md:ml-0`}
          onClick={handleHide}
        >
          <FaShoppingCart size={"2rem"} />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#222222] bg-opacity-90 left-0 w-full absolute z-30">
          <ul className="flex flex-col items-center py-4">
            {headerButtons.map((item, index) => (
              <li key={index} className="mb-4">
                <a
                  href={item.href}
                  className="text-white transition-colors duration-300"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isHide && (
        <PopUp isScrolled={isScrolled} clickAnime={clickAnime}></PopUp>
      )}
    </div>
  );
}
