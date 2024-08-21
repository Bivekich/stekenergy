import { useState } from "react";
interface Props {
  img: string;
  title: string;
}
export default function MobileRow({ img, title }: Props) {
  const [numberItems, setNumberItems] = useState(1);
  return (
    <div className="border-t-2 bordet-b-2 mt-5 pt-2 flex">
      <div className="w-1/3 flex">
        <img src={img} className="w-[20rem] "></img>
      </div>
      <div>
        <span>{title}</span>
        <span className="flex gap-5 justify-center mt-5">
          <button
            className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
            onClick={() =>
              setNumberItems(numberItems - 1 > 0 ? numberItems - 1 : 1)
            }
          >
            -
          </button>
          <span className="text-xl">{numberItems}</span>
          <button
            className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
            onClick={() => setNumberItems(numberItems + 1)}
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
}
