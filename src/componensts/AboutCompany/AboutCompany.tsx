import { useEffect, useState } from "react";
import { client } from "../../../stackenergy/client";

export default function AboutComapny() {
  const [companyName, setCompanyName] = useState<any>("");
  const [description1, setDescription1] = useState<any>("");
  const [description2, setDescription2] = useState<any>("");
  const [image, setImage] = useState<any>();
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'aboutCompany']{companyName,description1,description2,url,image{asset->{url}}}"
      );
      setCompanyName(data[0].companyName);
      setDescription1(data[0].description1);
      setDescription2(data[0].description2);
      setImage(data[0].image);
    };
    query();
  }, []);

  return (
    <div className="relative flex justify-center items-center w-full md:h-screen h-[70rem] px-4 md:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-20 h-full items-center">
          <div className="flex flex-col w-full lg:w-1/3 justify-center">
            <span className="text-xl text-[#06365b]">{companyName}</span>
            <span className="text-3xl lg:text-5xl mt-5 text-[#0e6ebc]">
              О компании
            </span>
            <span className="mt-10 text-[#959597]">{description1}</span>

            <span className="mt-7 text-[#959597]">{description2}</span>
            <a
              className="place-self-start mt-7 border-none w-44 h-10 bg-[#0e6eb8] text-white flex justify-center items-center"
              href="/AboutUs"
            >
              ПОДРОБНЕЕ
            </a>
          </div>

          <div className="flex justify-center items-center w-full lg:w-2/4 pt-10 lg:pt-0">
            <div className="flex w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none h-auto md:pl-5 items-center justify-center">
              {image && (
                <img
                  src={image.asset.url}
                  className="relative w-full h-auto object-contain md:w-3/4"
                ></img>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
