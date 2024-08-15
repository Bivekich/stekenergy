export default function AboutComapny() {
  return (
    <div className="flex justify-center items-center w-full h-screen min-w-screen">
      <div className="w-full h-5/6">
        <div className="w-full h-full flex justify-center">
          <div className="flex flex-col w-[29%] h-full justify-center mr-20">
            <span className="text-xl text-[#06365b]">
              Royal Power Machinery
            </span>
            <span className="text-5xl mt-5 text-[#0e6ebc]">
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

          <div className="flex h-full/6 w-1/4 justify-center items-center">
            <div className="pt-10">
              <img
                src={"/aboutUs.webp"}
                width={"650px"}
                height={"600px"}
                className="min-w-[580px]"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
