interface Props {
  img: string;
  title: string;
  des: string;
  date: Date;
}
export default function NewsCard({ img, title, des, date }: Props) {
  return (
    <div className="flex flex-col gap-5 bg-white w-96 h-[32rem] shadow-xl">
      <div className="flex w-full overflow-hidden h-60 ">
        <img
          src={img}
          className="flexobject-fill w-full h-full box-border border-8 border-solid border-white transition-transform duration-300 ease-in-out transform hover:scale-105"
        ></img>
      </div>
      <div className="ml-5 w-11/12 line-clamp-2 text-lg">
        <a href="#" className="hover:text-blue-500">
          {title}
        </a>
      </div>
      <div className="ml-5 h-20 w-80">
        <span className="line-clamp-3 text-ellipsis">{des}</span>
      </div>
      <div className="ml-5 mt-4">
        <span className="text-3xl text-gray-400">
          {date.getMonth() < 9 ? "0" + date.getMonth() : date.getMonth()}
        </span>
        <span>{`/` + date.getFullYear()}</span>
        <span>
          {`-` + (date.getDate() < 9 ? `0` + date.getDate() : date.getDate())}
        </span>
      </div>
    </div>
  );
}
