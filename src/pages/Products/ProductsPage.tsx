import Header from "../../componensts/Header/Header";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ProductCard from "../../componensts/ProductCard/ProductCard";
import Footer from "../../componensts/Footer/Footer";
import { products } from "../../db/data";

const numberOfPages: number = Math.ceil(products.length / 6);
const ProductTipe = [
  {
    id: 1,
    title: "Diesel Generator",
    href: "/ProductsPage/1/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 2,
    title: "Marine",
    href: "/ProductsPage/2/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 3,
    title: "Diesel Generator",
    href: "/ProductsPage/3/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 4,
    title: "Marine",
    href: "/ProductsPage/4/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 5,
    title: "Diesel Generator",
    href: "/ProductsPage/5/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 5,
    title: "Marine",
    href: "/ProductsPage/id/:nameOfProduct",
    products: ["Cummins", "Mitsu", "MTU"],
  },
];

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col overflow-y-scroll gap-5">
      <div className="h-32">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden">
        <div className="flex lg:w-[80%] md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>Products</span>
          </div>
          <div>
            <span>Home - Products</span>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex lg:w-[75%] md:w-[90%] w-[90%] ml-auto mr-auto items-center justify-end">
        <button className="text-black w-full h-full" onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <FaTimes size="1.5rem" fill="black" />
          ) : (
            <FaBars size="1.5rem" />
          )}
        </button>
      </div>
      <div>
        {isMenuOpen && (
          <div className="flex lg:hidden w-full justify-center items-center">
            <ul className="flex flex-col items-center py-4">
              <div className="flex flex-col gap-5">
                {ProductTipe.map((item, index) => {
                  return (
                    <div key={index}>
                      <Dropdown
                        label={item.title}
                        style={{
                          width: "20rem",
                          backgroundColor: "black",
                        }}
                      >
                        {item.products.map((el, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              as={"a"}
                              href={`/ProductsPage/:${index}/:${el}`}
                              className="flex justify-center w-full static"
                            >
                              {el}
                            </DropdownItem>
                          );
                        })}
                      </Dropdown>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
        )}
      </div>

      <div
        className={`lg:flex w-full ${
          isMenuOpen ? "mt-20 h-full" : ""
        } lg:mt-0 lg:h-full`}
      >
        <div className="flex md:w-[80%] justify-center w-full h-full m-auto gap-x-5 px-1 md:px-0">
          <div className="lg:flex flex-col gap-5 hidden">
            {ProductTipe.map((item, index) => {
              return (
                <div key={index}>
                  <Dropdown
                    label={item.title}
                    style={{
                      width: "15rem",
                      position: "static",
                      backgroundColor: "black",
                    }}
                  >
                    {item.products.map((el, index) => {
                      return (
                        <DropdownItem
                          key={index}
                          as={"a"}
                          href={`/ProductsPage/${index}/${el}`}
                          className="w-[15rem]"
                        >
                          {el}
                        </DropdownItem>
                      );
                    })}
                  </Dropdown>
                </div>
              );
            })}
          </div>
          <div className="flex min-h-96 w-[80rem] gap-5 justify-between flex-wrap">
            {products.map((item, index) => {
              if (
                index >= currentPage * 6 - 6 &&
                index <= currentPage * 6 - 1
              ) {
                return (
                  <ProductCard
                    key={index}
                    img={item.mainImg}
                    name={item.name}
                  ></ProductCard>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-3">
        {Array.from({ length: numberOfPages }).map((_, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1 ? "text-2xl" : "text-base"
                } border-2 w-10 h-10`}
              >
                {index + 1}
              </button>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}
