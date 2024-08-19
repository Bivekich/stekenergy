interface NewsPageCardProps {
  isIndustry: boolean;
  isCompany: boolean;
  title: string;
  des: string;
  img: string;
}
export default function NewsPageCard({
  isIndustry,
  isCompany,
  title,
  des,
  img,
}: NewsPageCardProps) {
  return (
    <div className="lg:w-1/3 md:w-2/6 w-full h-fit mb-5">
      <div>
        <img src={img} className="w-5/6 object-contain"></img>
        {isCompany ? <span>[Company news]</span> : ""}
        {isIndustry ? <span>[Industry knowledge]</span> : ""}
        <span className="line-clamp-1 w-[90%]">{title}</span>
        <span className="line-clamp-2 w-[90%]">{des}</span>
      </div>
    </div>
  );
}
