import { useState } from "react";

interface Props {
  img: string;
  title: string;
  numberOfItems: number;
  id: number;
  handleProducts: (id: number) => void;
}
export default function Row({
  img,
  title,
  numberOfItems,
  id,
  handleProducts,
}: Props) {
  console.log(numberOfItems);
  let number = numberOfItems;
  const [num, setNumber] = useState(number);
  const [isHide, setIsHide] = useState(true);
  const handleHide = () => {
    handleProducts(id);
    setIsHide(false);
  };
  return (
    <>
      {isHide && (
        <tr>
          <td className="w-1/6 border-2">
            <img src={img}></img>
          </td>
          <td className="border-2">
            <div className="w-full h-full flex justify-center">
              <span>{title}</span>
            </div>
          </td>
          <td className="border-2">
            <div className="flex w-full h-full justify-center">
              <input
                type="text"
                min={1}
                value={num}
                step={1}
                onChange={(e) => setNumber(Number(e.target.value))}
              ></input>
            </div>
          </td>
          <td className="border-2 ">
            <div
              className="w-full h-full flex justify-center cursor-pointer hover:text-red-600"
              onClick={handleHide}
            >
              <span>Удалить</span>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
