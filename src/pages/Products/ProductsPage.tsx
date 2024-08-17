import Header from "../../componensts/Header/Header";
import { Dropdown, DropdownItem } from "flowbite-react";

const ProductTipe = [
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
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="mb-24">
        <Header></Header>
      </div>

      <div className="flex inset-0 justify-center items-center max-w-1/5 h-96 overflow-hidden">
        <div className="flex w-3/5 h-48 text-black font-bold text-2xl justify-between items-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>Products</span>
          </div>
          <div>
            <span>Home - Products</span>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-3/5 h-full m-auto">
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
        </div>
      </div>
    </div>
  );
}
