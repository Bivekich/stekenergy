interface ProductsProp {
  img: string;
  name: string;
}
export default function MainProductCard({ img, name }: ProductsProp) {
  return (
    <div className="flex w-fit justify-center items-center flex-col border-2 border-black bg-white mb-2 overflow-hidden">
      <div
        className={` bg-no-repeat bg-center bg-contain w-96 h-96 hover:scale-125 hover:!bg-[url('/SG.webp')] `}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div>
        <span className="text-black">{name}</span>
      </div>
    </div>
  );
}
