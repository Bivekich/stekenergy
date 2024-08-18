import Header from "../../componensts/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Footer from "../../componensts/Footer/Footer";
export default function AboutUsPage() {
  return (
    <div className="flex w-screen flex-col bg-[url('/a_bg.webp')] bg-no-repeat bg-cover overflow-y-scroll">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-[50%] md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>About Us</span>
          </div>
          <div>
            <span>Home - About Us</span>
          </div>
        </div>
      </div>

      <div className="w-full pt-10 bg-white">
        <div className="flex lg:w-1/2 m-auto flex-col gap-5 px-4">
          <span className="text-3xl">About Our Company</span>
          <span className="flex flex-col gap-5 text-lg">
            <p>
              China Royal Power Machinery Co., Ltd, founded in 2004, is a
              machinery trade and manufacture enterprise which integrates
              design, production and shipment of diesel generator sets, gas
              generator sets, marine generators and diesel/gas power plant,
              forming a whole industrial chain.
            </p>
            <p>
              Over the past 18 years, the Company has developed steadily, and
              now owns five wholly owned or holding subsidiaries directly or
              indirectly Includes Changzhou Fugesen Refrigeration Engineering
              Co., Ltd, Wuxi Yuanjia aluminium extrusion machine Co., Ltd, China
              Royal Power machinery Co.Ltd (H.K), Taizhou Royal Power Machinery
              IMP&EXP Co., Ltd，Nantong Fancywill International Co.,Ltd and
              Jiangsu Wantai Power Machinery Co., Ltd. We are forming five major
              business sectors of energy, refrigeration, aluminium extrusion,
              textile and international trade.
            </p>
            <p>
              Our products are exported to nearly a lot of countries and
              regions, including the United States, the European Union, Mid-East
              Aisa, Africa and South America. In 2021, the annual sales revenue,
              total profit and total export-import volume were CNY 50 billion,
              CNY 40 million and USD 5 million respectively.
            </p>
            <p>
              Our powerful professional team provides 24hour services regarding
              the order tracking, production schedule and quality to help
              customers solve the problems, grasp the business opportunities by
              virtue of expeditious response and premium products, thus
              receiving the recognition from consumers.
            </p>
            <p>
              Royal Power Machinery Co., Ltd is liable for and dedicated to
              providing valuable services to foreign and domestic customers. We
              look forward to establishing good cooperative relations with you
              and seeking development together for a promising future! ​​​​​​​
            </p>
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
              <SwiperSlide className="md:w-full md:h-full w-11/12 h-full">
                <img src="/weibiaoti-990-516.webp"></img>
              </SwiperSlide>

              <SwiperSlide className="md:w-full md:h-full w-11/12 ">
                <img src="/a2-990-516.webp"></img>
              </SwiperSlide>
              <SwiperSlide className="md:w-full md:h-full w-11/12">
                <img src="/a3-990-516.webp"></img>
              </SwiperSlide>

              <SwiperSlide className="md:w-full md:h-full w-11/12">
                <img src="/a4-990-516.webp"></img>
              </SwiperSlide>

              <SwiperSlide className="md:w-full md:h-full w-11/12">
                <img src="/a5-990-516.webp"></img>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-screen md:h-[50rem] text-white justify-center items-end flex-col md:flex-row mb-10">
        <div className="flex lg:w-2/4 md:w-screen  md:h-full md:justify-center md:items-center ml-auto mr-auto md:flex-row lg:flex-row flex-col gap-5 md:gap-0 mt-5 md:mt-0">
          <div className="lg:w-96 md:w-1/2 w-screen flex flex-col gap-10 px-4">
            <div className="border-t-8 w-20"></div>
            <span className="text-5xl font-semibold">Our Advantages</span>
            <span className="w-96 md:w-fit">
              We look forward to establishing good cooperative relations with
              you and seeking development together for a promising future!
            </span>
            <div className="border-l-2 border-blue-400 pl-5">
              <div className="flex justify-center items-center bg-gray-400 w-44 h-14">
                <a className="">CONTACT US</a>
              </div>
            </div>
          </div>

          <div className="flex md:w-9/12 w-screen ml-auto flex-col gap-10 px-4">
            <div className="w-full h-fit flex justify-between md:flex-col lg:flex-row gap-5 flex-col">
              <div className="flex gap-3 c">
                <span className="flex justify-center items-center w-36 text-5xl border-r-2">
                  01
                </span>
                <span className="w-64 flex justify-center items-center text-center text-xl">
                  Our powerful professional team provides 24hour services
                  regarding the order tracking
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2">
                    02
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    Design, production and shipment of diesel generator sets,
                    gas generator sets, marine generators and diesel/gas
                    power...
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-fit flex justify-between md:flex-col gap-5 lg:flex-row flex-col">
              <div className="flex gap-3">
                <span className="flex justify-center items-center w-36 text-5xl border-r-2 flex-c">
                  03
                </span>
                <span className="w-64 flex justify-center items-center text-center text-xl">
                  We are forming five major business sectors of energy,
                  refrigeration, aluminium extrusion, textile and...
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2">
                    04
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    Including the united states, the european union, mid-east
                    aisa, africa and south america​​​​​​​
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
