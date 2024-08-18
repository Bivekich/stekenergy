import Header from "../../componensts/Header/Header";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ProductCard from "../../componensts/ProductCard/ProductCard";
import Footer from "../../componensts/Footer/Footer";
const ProductTipe = [
  {
    title: "Diesel Generator",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    title: "Marine",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    title: "Diesel Generator",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    title: "Marine",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    title: "Diesel Generator",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    title: "Marine",
    products: ["Cummins", "Mitsu", "MTU"],
  },
];

export default function ProductsPage() {
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
                              href="#"
                              className="flex justify-center w-full"
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
          isMenuOpen ? "mt-20" : ""
        } lg:mt-0 lg:h-full hidden`}
      >
        <div className="flex w-[80%] h-full m-auto gap-x-5">
          <div className="flex flex-col gap-5">
            {ProductTipe.map((item, index) => {
              return (
                <div key={index}>
                  <Dropdown label={item.title} style={{ width: "15rem" }}>
                    {item.products.map((el, index) => {
                      return (
                        <DropdownItem key={index} as={"a"} href="#">
                          {el}
                        </DropdownItem>
                      );
                    })}
                  </Dropdown>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex min-h-96  w-full gap-5 justify-end flex-wrap ">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex min-h-96 w-full gap-5 justify-center flex-wrap">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <Footer></Footer>
    </div>
  );
}
