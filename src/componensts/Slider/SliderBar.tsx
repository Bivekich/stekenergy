import { LuCircleDot } from "react-icons/lu";
import { TbCircleDotFilled } from "react-icons/tb";
interface slideBarCurrentItem {
  current: number;
  handleCurrent: (item: number) => void;
  len: number;
}

export default function SliderBar({
  current,
  handleCurrent,
  len,
}: slideBarCurrentItem) {
  return (
    <div className="flex absolute md:bottom-0 bottom-20 w-screen justify-center md:mb-5 gap-3">
      {Array.from({ length: len }).map((_, index) => {
        return (
          <div key={index} onClick={() => handleCurrent(index)}>
            {index === current ? (
              <LuCircleDot fill={"white"} size={"1.5rem"} />
            ) : (
              <TbCircleDotFilled size={"1.5rem"} />
            )}
          </div>
        );
      })}
    </div>
  );
}
