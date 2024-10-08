import { useEffect, useState } from "react";
import { client } from "../../../stackenergy/client";
export default function Contact() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonTitle, setButtonTitle] = useState<string>("");
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'contactUs']{title, description, button}"
      );
      setTitle(data[0].title);
      setDescription(data[0].description);
      setButtonTitle(data[0].button);
    };
    query();
  }, []);
  return (
    <div className="w-full mb-20 flex justify-center">
      {title && (
        <div className="relative w-[150rem] h-auto bg-none md:bg-[url('/contact.webp')] bg-no-repeat bg-center md:bg-cover flex flex-col items-center justify-center">
          <div className="block md:hidden w-full border-t-2 border-gray-300 my-4"></div>

          <div className="relative w-full md:w-full text-center md:text-left flex flex-col p-1 md:p-12 lg:pl-[10vw] md:items-start justify-center z-10">
            <span className="text-2xl md:text-3xl text-[#02334d] font-bold md:w-[20rem] w-full">
              {title}
            </span>
            <span className="mt-2 md:w-[20rem] lg:w-1/3">{description}</span>
            <div className="w-full md:w-auto mt-4 md:mt-8 flex justify-center md:justify-start">
              <div className="flex items-center justify-center h-10 px-6 bg-[#0e6eb8] hover:bg-[#055084] transition-colors duration-200">
                <a
                  className="text-white text-lg cursor-pointer"
                  href="/Contacts"
                >
                  {buttonTitle}
                </a>
              </div>
            </div>
          </div>

          <div className="block md:hidden w-full border-t-2 border-gray-300 my-4"></div>
        </div>
      )}
    </div>
  );
}
