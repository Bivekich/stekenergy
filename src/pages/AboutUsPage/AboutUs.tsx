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
        <div className="flex lg:w-1/2 m-auto flex-col gap-5 px-4">
          <span className="text-3xl">О нашей компании</span>
          <span className="flex flex-col gap-5 text-lg">
            <p>
              China Royal Power Machinery Co., Ltd, основанная в 2004 году,
              является предприятием по торговле и производству машинного
              оборудования, которое объединяет проектирование, производство и
              поставку дизельных генераторов, газовых генераторов, морских
              генераторов и дизельных/газовых электростанций, формируя полную
              производственную цепочку.
            </p>
            <p>
              За последние 18 лет компания стабильно развивалась и сейчас
              владеет пятью полностью или частично дочерними предприятиями,
              включая Changzhou Fugesen Refrigeration Engineering Co., Ltd, Wuxi
              Yuanjia Aluminium Extrusion Machine Co., Ltd, China Royal Power
              Machinery Co. Ltd (H.K), Taizhou Royal Power Machinery IMP&EXP
              Co., Ltd, Nantong Fancywill International Co., Ltd и Jiangsu
              Wantai Power Machinery Co., Ltd. Мы формируем пять основных
              бизнес-секторов: энергетика, холодильное оборудование, алюминиевое
              экструзионное оборудование, текстиль и международная торговля.
            </p>
            <p>
              Наши продукты экспортируются в многочисленные страны и регионы,
              включая Соединенные Штаты Америки, Европейский Союз, Ближний
              Восток, Азию, Африку и Южную Америку. В 2021 году годовой объем
              продаж составил 50 миллиардов юаней, общая прибыль - 40 миллионов
              юаней, а общий объем экспорта-импорта - 5 миллионов долларов США.
            </p>
            <p>
              Наша мощная профессиональная команда предоставляет круглосуточные
              услуги по отслеживанию заказов, производственному графику и
              качеству для помощи клиентам в решении проблем и использовании
              деловых возможностей благодаря оперативному реагированию и
              высококачественным продуктам, что заслужило признание
              потребителей.
            </p>
            <p>
              Royal Power Machinery Co., Ltd несет ответственность за
              предоставление ценных услуг иностранным и отечественным клиентам.
              Мы с нетерпением ждем установления хороших партнерских отношений с
              вами и совместного развития ради светлого будущего!
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
            <div className="border-t-8 w-20 border-blue-600"></div>
            <span className="text-5xl font-semibold">Наши преимущества</span>
            <span className="w-96 md:w-fit">
              Мы с нетерпением ждем установления хороших партнерских отношений с
              вами и совместного развития для перспективного будущего!
            </span>
            <div className="border-l-2 border-blue-600 pl-5">
              <div className="relative flex justify-center items-center bg-gray-400 w-44 h-14  transition-all duration-500 group">
                <span className="w-0 h-full absolute inset-0 bg-blue-600 z-20 group-hover:w-full transition-all duration-500"></span>
                <a className="z-30 select-none">СВЯЗАТЬСЯ</a>
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
                  Наша мощная профессиональная команда предоставляет
                  круглосуточные услуги по отслеживанию заказов.
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2">
                    02
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    Дизайн, производство и доставка дизельных генераторных
                    установок, газовых генераторных установок, судовых
                    генераторов и дизельных/газовых энергетических установок.
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
                  Мы формируем пять основных бизнес-секторов в области
                  энергетики, холодильного оборудования, алюминиевого экструзии,
                  текстиля и...
                </span>
              </div>
              <div>
                <div className="flex gap-3">
                  <span className="flex justify-center items-center w-36 text-5xl border-r-2">
                    04
                  </span>
                  <span className="w-64 flex justify-center items-center text-center text-xl">
                    Включая Соединенные Штаты, Европейский Союз, Ближний Восток,
                    Азию, Африку и Южную Америку.
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
