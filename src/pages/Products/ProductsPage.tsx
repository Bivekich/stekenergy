import Header from "../../componensts/Header/Header";
import { Dropdown, DropdownItem } from "flowbite-react";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import ProductCard from "../../componensts/ProductCard/ProductCard";
import Footer from "../../componensts/Footer/Footer";
import { client } from "../../../stackenergy/client";

/*const ProductTipe = [
  {
    id: 1,
    title: "Дизельный генератор",
    href: "/ProductsPage/type/DieselGenerator/",
    products: [
      "Cummins Series",
      "Mitsubishi Series",
      "MTU Series",
      "Тихий Контейнеризированный",
      "Perkins Series",
      "Volvo Series",
      "Weichai Series",
      "Yuchai Series",
    ],
  },
  {
    id: 2,
    title: "Судовой генератор",
    href: "/ProductsPage/type/MarineGenerator/",
    products: [
      "Cummins Series",
      "Perkins Series",
      "Doosan Series",
      "Weichai Series",
      "Yuchai Series",
    ],
  },
  {
    id: 3,
    title: "Газовый генератор",
    href: "/ProductsPage/type/GasGenerator/",
    products: [
      "Cummins Series",
      "Waukesha Series",
      "Jenbacher Series",
      "Weichai Series",
      "Jichai Series",
      "Газотурбинный двигатель",
    ],
  },

  /*{
    id: 4,
    title: "Оборудование для металлообработки",
    href: "/ProductsPage/type/MetalFormingEquipment/",
    products: [
      "Оборудование для производства стальных труб",
      "Пресс для экструзии алюминия",
    ],
  },
  {
    id: 5,
    title: "Дизельный насосный агрегат",
    href: "/ProductsPage/type/DieselPumpSet/",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 5,
    title: "Химикаты",
    href: "/ProductsPage/type/Chemicals/",
    products: ["Cummins", "Mitsu", "MTU"],
  },
  {
    id: 6,
    title: "Генератор на тяжелом топливе",
    href: "/ProductsPage/type/HFOGenerator/",
    products: ["Cummins", "Mitsu", "MTU"],
  },
];*/
interface Product {
  id: number;
  title: string;
  href: string;
  products: Array<string>;
}
interface Item {
  id: number;
  mainImg: string;
  title: string;
  shortDes: string;
  fullDescription: any;
  category: string;
  brand: string;
}
export default function ProductsPage() {
  const [ProductTipe, setProductTipe] = useState<Product[]>([]);
  const [products, setProducts] = useState<Item[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'productsCategorys']{category[]{title,ref,products}}"
      );
      let arr = data[0].category.map((item: any, index: any) => {
        return {
          id: index,
          title: item.title,
          href: item.ref,
          products: item.products,
        };
      });
      setProductTipe(arr);
      setNumberOfPages(Math.ceil(products.length / 6));
    };
    query();
  }, []);

  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'product']{mainImg{asset->{url}}, title, shortDes, fullDescription, category, brand}"
      );
      const arr = data.map((item: any, index: number) => {
        return {
          id: index + 1,
          mainImg: item.mainImg.asset.url,
          title: item.title,
          shortDes: item.shortDes,
          fullDescription: item.fullDescription,
          category: item.category,
          brand: item.brand,
        };
      });
      setProducts(arr);
    };
    query();
  }, []);

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
            <span>Продукты</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - Продукты
            </span>
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
        {ProductTipe && isMenuOpen && (
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
                        <DropdownItem
                          key={index}
                          as={"a"}
                          href={item.href + "all"}
                          className="flex justify-center w-full static"
                        >
                          Все
                        </DropdownItem>
                        {item.products.map((el, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              as={"a"}
                              href={item.href + `${el}`}
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
                      width: "20rem",
                      position: "static",
                      backgroundColor: "black",
                    }}
                  >
                    <DropdownItem
                      key={index}
                      as={"a"}
                      href={item.href + "all"}
                      className="flex w-full static"
                    >
                      Все
                    </DropdownItem>
                    {item.products.map((el, index) => {
                      return (
                        <div key={index}>
                          <DropdownItem
                            key={index}
                            as={"a"}
                            href={item.href + `${el}`}
                            className="w-[20rem]"
                          >
                            {el}
                          </DropdownItem>
                        </div>
                      );
                    })}
                  </Dropdown>
                </div>
              );
            })}
          </div>
          <div className="flex min-h-96 w-[25.6rem] md:w-[80rem] lg:w-full md:gap-5 lg:gap-10 gap-1 justify-center md:justify-start md:items-start items-center px-4 md:px-0 flex-wrap">
            {products.map((item, index) => {
              if (
                index >= currentPage * 6 - 6 &&
                index <= currentPage * 6 - 1
              ) {
                return (
                  <ProductCard
                    key={index}
                    id={item.id}
                    link={`/ProductsPage/${item.id}/${item.title}`}
                    img={item.mainImg}
                    name={item.title}
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
