interface NewsPageCardProps {
  isIndustry: boolean;
  isCompany: boolean;
  title: string;
  des: string;
  img: string;
  id: number;
}
export default function NewsPageCard({
  isIndustry,
  isCompany,
  title,
  des,
  img,
  id,
}: NewsPageCardProps) {
  return (
    <div className="lg:w-1/3 md:w-2/6 w-full h-fit mb-5">
      <div className="flex md:justify-normal md:items-start justify-center items-center flex-col">
        <a href={`News/${id}/${title}`} className="w-full">
          <img src={img} className="w-full md:w-5/6 object-cover"></img>
        </a>
        {isCompany ? <span>[Company news]</span> : ""}
        {isIndustry ? <span>[Industry knowledge]</span> : ""}
        <span className="line-clamp-1 w-[90%]">{title}</span>
        <span className="line-clamp-2 w-[90%]">{des}</span>
      </div>
    </div>
  );
}
