import { useState } from "react";

interface Props {
  img: string;
  title: string;
}
export default function Row({ img, title }: Props) {
  const [number, setNumber] = useState(1);
  const [isHide, setIsHide] = useState(true);
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
                type="number"
                min={1}
                defaultValue={number}
                step={1}
                onChange={() => setNumber}
              ></input>
            </div>
          </td>
          <td className="border-2 ">
            <div
              className="w-full h-full flex justify-center cursor-pointer hover:text-red-600"
              onClick={() => setIsHide(false)}
            >
              <span>Удалить</span>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
