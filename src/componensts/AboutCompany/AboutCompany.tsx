export default function AboutComapny() {
  return (
    <div className="flex justify-center items-center w-full h-screen min-w-screen px-4 md:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-20 h-full items-center">
          <div className="flex flex-col w-full lg:w-1/3 justify-center">
            <span className="text-xl text-[#06365b]">
              Royal Power Machinery
            </span>
            <span className="text-3xl lg:text-5xl mt-5 text-[#0e6ebc]">
              О Нашей Компании
            </span>
            <span className="mt-10 text-[#959597]">
              Компания China Royal Power Machinery Co., Ltd, основанная в 2004
              году, является торгово-производственным предприятием в сфере
              машиностроения, которое занимается проектированием, производством
              и поставкой дизельных генераторных установок, газовых генераторных
              установок, морских генераторов и дизельных/газовых электростанций,
              формируя целую промышленную цепочку.
            </span>
            <span className="mt-7 text-[#959597]">
              Наши продукты экспортируются во множество стран и регионов,
              включая Соединенные Штаты, Европейский Союз, Среднюю Азию, Африку
              и Южную Америку. В 2021 году годовой объем продаж составил 50
              миллиардов юаней, общая прибыль — 40 миллионов юаней, а общий
              объем внешней торговли — 5 миллионов долларов США.
            </span>
            <button className="place-self-start mt-7 border-none w-44 h-10 bg-[#0e6eb8] text-white">
              ПОДРОБНЕЕ
            </button>
          </div>

          <div className="flex justify-center items-center w-full lg:w-2/4 pt-10 lg:pt-0">
            <div className="flex w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none h-auto md:pl-5 items-center justify-center">
              <img
                src={"/aboutUs.webp"}
                className="“w-full h-auto object-contain md:w-3/4"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
