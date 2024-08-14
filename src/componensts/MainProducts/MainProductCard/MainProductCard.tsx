interface ProductsProp {
  img: string;
  name: string;
}
export default function MainProductCard({ img, name }: ProductsProp) {
  return (
    <div className="flex w-fit justify-center items-center flex-col border-2 border-black bg-white mb-2">
      <div
        className={`bg-[url('${img}')] hover:bg-[url('/SG.webp')] bg-no-repeat bg-cover w-96 h-96`}
      ></div>
      <div>
        <span className="text-black">{name}</span>
      </div>
    </div>
  );
}
