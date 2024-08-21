interface ProductsProp {
  img: string;
  name: string;
  link: string;
}
export default function MainProductCard({ img, name, link }: ProductsProp) {
  return (
    <div className="flex flex-col w-50 md:h-96 items-center justify-center border-2 border-black bg-white mb-2 overflow-hidden p-4 sm:p-2">
      <div
        className={` bg-no-repeat bg-center bg-contain md:w-96 md:h-96 w-full h-60 sm:h-48 lg:h-64 transition-transform duration-500 ease-in-out transform hover:!bg-[url('/SG.webp')] `}
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="mt-2 text-center px-2">
        <a href={link}>
          {" "}
          <span className="text-black text-xs sm:text-sm md:text-base">
            {name}
          </span>
        </a>
      </div>
    </div>
  );
}
