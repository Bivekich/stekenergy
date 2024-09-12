import Header from "../../componensts/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../../componensts/Footer/Footer";
import { useEffect, useState } from "react";
import { client } from "../../../stackenergy/client";
export default function AboutUsPage() {
  const [text, setText] = useState<string>("");
  const [url, setUrl] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("");
  const [fBlock, setFblock] = useState<string>("");
  const [sBlock, setSblock] = useState<string>("");
  const [tBlock, setTblock] = useState<string>("");
  const [foBlock, setFOblock] = useState<string>("");
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'aboutUsPage']{imageSlider[]{asset->{url, metadata{dimensions{width, height}}}}, mainText, title, des, buttonText, firstBlock, secBlock, thirdBlock, fourBlock}"
      );
      if (data[0].imageSlider.length > 0) {
        const arr = data[0].imageSlider.map((item: any) => {
          if (
            item.asset.metadata.width > 990 &&
            item.asset.metadata.height > 501
          ) {
            return;
          }
          return item.asset.url;
        });
        setUrl(arr);
      }
      setTitle(data[0].title);
      setDes(data[0].des);
      setButtonText(data[0].buttonText);
      setFblock(data[0].firstBlock);
      setSblock(data[0].secBlock);
      setTblock(data[0].thirdBlock);
      setFOblock(data[0].fourBlock);
      setText(data[0].mainText);
    };
    query();
  }, []);

  return (
    <div className="flex w-screen flex-col bg-[url('/a_bg.webp')] bg-no-repeat bg-cover overflow-y-scroll">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-[50%] md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>О нас</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - О нас
            </span>
          </div>
        </div>
      </div>

      <div className="w-full pt-10 bg-white">
        {text && (
          <div className="flex lg:w-1/2 m-auto flex-col gap-5 px-4">
            <span className="text-3xl">О нашей компании</span>
            <span className="flex flex-col gap-5 text-lg ">
              <pre className="whitespace-pre-wrap break-words font-sans">
                {text}
              </pre>
            </span>
            <div className="w-full lg:h-[35rem] h-auto lg:mb-0 mb-10">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={40}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="w-auto h-auto bg-white"
              >
                {url.map((item, index) => {
                  return (
                    <SwiperSlide
                      className="md:w-full md:h-full w-11/12 h-full"
                      key={index}
                    >
                      <img src={item}></img>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </div>

      <div className="flex w-full md:w-screen md:h-[50rem] text-white justify-center items-end flex-col md:flex-row mb-10">
        {title && (
          <div className="flex lg:w-2/4 md:w-screen  md:h-full md:justify-center md:items-center ml-auto mr-auto md:flex-row lg:flex-row flex-col gap-5 md:gap-0 mt-5 md:mt-0">
            <div className="lg:w-96 md:w-1/2 w-screen flex flex-col gap-10 px-4">
              <div className="border-t-8 w-20 border-blue-600"></div>
              <span className="text-5xl font-semibold">{title}</span>
              <span className="w-96 md:w-fit">{des}</span>
              <div className="border-l-2 border-blue-600 pl-5">
                <div className="relative flex justify-center items-center bg-gray-400 w-44 h-14  transition-all duration-500 group">
                  <span className="w-0 h-full absolute inset-0 bg-blue-600 z-20 group-hover:w-full transition-all duration-500"></span>
                  <a className="z-30 select-none">{buttonText}</a>
                </div>
              </div>
            </div>

            <div className="flex md:w-9/12 w-screen ml-auto flex-col gap-10 px-4">
              <div className="w-full h-fit flex justify-between md:flex-col lg:flex-row gap-5 flex-col">
                <div className="flex gap-3 c">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2 lg:h-52">
                    01
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    {fBlock}
                  </span>
                </div>
                <div>
                  <div className="flex gap-3">
                    <span className="flex justify-center items-center w-36 text-5xl border-r-2 lg:h-52">
                      02
                    </span>
                    <span className="w-64 flex justify-center items-center text-center text-xl">
                      {sBlock}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-fit flex justify-between md:flex-col gap-5 lg:flex-row flex-col">
                <div className="flex gap-3">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2 flex-c lg:h-52">
                    03
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    {tBlock}
                  </span>
                </div>
                <div>
                  <div className="flex gap-3">
                    <span className="flex justify-center items-center w-36 text-5xl border-r-2 lg:h-52">
                      04
                    </span>
                    <span className="w-64 flex justify-center items-center text-center text-xl">
                      {foBlock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        )
      </div>
      <Footer></Footer>
    </div>
  );
}
