export default function AboutComapny() {
  return (
    <div className="flex w-full h-3/5 justify-center items-center">
      <div className="flex w-10/12 h-5/6 justify-center items-center m-auto">
        <div className="flex w-4/12 h-full flex-col gap-5">
          <div>
            <span className="text-2xl font-bold">Royal Power Machinery</span>
          </div>
          <div>
            <span className="text-5xl text-[#0e6ec0]">О Нашей Компании</span>
          </div>
          <div className="flex text-lg w-5/6 flex-col gap-5">
            <span>
              Компания China Royal Power Machinery Co., Ltd, основанная в 2004
              году, является торгово-производственным предприятием в сфере
              машиностроения, которое занимается проектированием, производством
              и поставкой дизельных генераторных установок, газовых генераторных
              установок, морских генераторов и дизельных/газовых электростанций,
              формируя целую промышленную цепочку.
            </span>
            <div className="">
              <span>
                Наши продукты экспортируются во множество стран и регионов,
                включая Соединенные Штаты, Европейский Союз, Среднюю Азию,
                Африку и Южную Америку. В 2021 году годовой объем продаж
                составил 50 миллиардов юаней, общая прибыль — 40 миллионов
                юаней, а общий объем внешней торговли — 5 миллионов долларов
                США.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/3">
          <img src="/aboutUs.webp" className="flex w-auto h-auto"></img>
        </div>
      </div>
    </div>
  );
}
