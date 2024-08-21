interface Props {
  id: number;
  img: string;
  title: string;
  numberOfItems: number;
  link: string;
}
import { useCartDispatch } from "../../../context/cartContext";
export default function PopUpItem({
  id,
  img,
  title,
  numberOfItems,
  link,
}: Props) {
  const dispatch = useCartDispatch();

  const remove = (id: number) => {
    dispatch({ type: "remove", id });
  };
  return (
    <div className="flex w-full h-20 mt-5 overflow-hidden px-2 items-center">
      <a href={link} className="w-1/3">
        <img src={img} className="object-contain"></img>
      </a>

      <div className="w-full flex">
        <span className="text-black w-1/2  flex justify-center items-center">
          {title}
        </span>
        <div>
          <span className="text-black w-20 h-full flex items-center justify-center">
            {numberOfItems} Шт
          </span>
        </div>
        <div onClick={() => remove(id)}>
          <span className="text-black w-20 h-full flex items-center justify-center cursor-pointer">
            X
          </span>
        </div>
      </div>
    </div>
  );
}
