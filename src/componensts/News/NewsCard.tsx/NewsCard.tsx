export default function NewsCard() {
  return (
    <div className="flex flex-col gap-5 bg-white w-96 h-[32rem] shadow-xl">
      <div className="flex w-full overflow-hidden h-60 ">
        <img
          src="/SG.webp"
          className="flexobject-fill w-full h-full box-border border-8 border-solid border-white transition-transform duration-300 ease-in-out transform hover:scale-105"
        ></img>
      </div>
      <div className="ml-5 w-96 text-lg">
        <a href="#" className="hover:text-blue-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        </a>
      </div>
      <div className="ml-5 h-20 w-80">
        <span className="line-clamp-3 text-ellipsis">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cum
          praesentium doloribus voluptas maxime similique, incidunt inventore
          beatae blanditiis deleniti iusto quae possimus ullam sunt aspernatur
          molestias perferendis quasi accusamus.
        </span>
      </div>
      <div className="ml-5 mt-4 text-">
        <span className="text-3xl text-gray-400">06</span>
        <span>/2023</span>
        <span>-04</span>
      </div>
    </div>
  );
}
