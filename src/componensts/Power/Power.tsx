export default function Power() {
  return (
    <div className="bg-[url('/strong.webp')] w-full h-3/5 bg-no-repeat bg-cover">
      <div className="flex bg-[#06375c] w-1/2 h-full opacity-80 flex-col text-white">
        <div className="relative flex w-full h-44 justify-end items-center group">
          <div className="w-0 bg-[#0c64ab] h-full absolute inset-0 opacity-80 transition-all duration-500 ease-in-out group-hover:w-[calc(100%+10rem)] origin-left"></div>
          <div className="flex w-6/12">
            <div className="border-r-2 pr-4 z-50">
              <img
                src="/icon1.webp"
                width={"100px"}
                height={"100px"}
                className=""
              ></img>
            </div>

            <div className="flex w-4/5 flex-col gap-y-2 ml-5">
              <span className="text-2xl z-50">Профессиональная команда</span>
              <span className="w-11/12 text-[13px] z-50">
                Наша сильная профессиональная команда предоставляет
                круглосуточные услуги по отслеживанию заказов
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-44 justify-end items-center group">
          <div className="w-0 bg-[#0c64ab] h-full absolute inset-0 opacity-80 transition-all duration-500 ease-in-out group-hover:w-[calc(100%+10rem)] origin-left"></div>
          <div className="flex w-6/12">
            <div className="border-r-2 pr-4 z-50">
              <img
                src="/icon3.webp"
                width={"100px"}
                height={"100px"}
                className=""
              ></img>
            </div>

            <div className="flex w-4/5 flex-col gap-y-2 ml-5">
              <span className="text-2xl z-50">
                Полная производственная цепочка
              </span>
              <span className="w-11/12 text-[13px] z-50">
                Проектирование, производство и отгрузка дизельных генераторных
                установок, газовых генераторных установок, судовых генераторов и
                дизельных/газовых электростанций
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-44 justify-end items-center group">
          <div className="w-0 bg-[#0c64ab] h-full absolute inset-0 opacity-80 transition-all duration-500 ease-in-out group-hover:w-[calc(100%+10rem)] origin-left"></div>
          <div className="flex w-6/12">
            <div className="border-r-2 pr-4 z-50">
              <img
                src="/icon2.webp"
                width={"100px"}
                height={"100px"}
                className=""
              ></img>
            </div>

            <div className="w-4/5 flex flex-col gap-y-2 ml-5">
              <span className="text-2xl z-50">Широкий спектр деятельности</span>
              <span className="w-11/12 text-[13px] z-50">
                Мы формируем пять основных бизнес-секторов: энергетика,
                холодильное оборудование, экструзия алюминия, текстиль и
                международная торговля.
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex w-full h-44 justify-end items-center group">
          <div className="w-0 bg-[#0c64ab] h-full absolute inset-0 opacity-80 transition-all duration-500 ease-in-out group-hover:w-[calc(100%+10rem)] origin-left"></div>
          <div className="flex w-6/12">
            <div className="border-r-2 pr-4 z-50">
              <img
                src="/icon2.webp"
                width={"100px"}
                height={"100px"}
                className=""
              ></img>
            </div>

            <div className="w-4/5 flex flex-col gap-y-2 ml-5">
              <span className="text-2xl z-50">Экспортная торговля</span>
              <span className="w-11/12 text-[13px] z-50">
                Включая Соединенные Штаты, Европейский союз, Ближний Восток,
                Азию, Африку и Южную Америку
              </span>
            </div>
          </div>
        </div>
        <div className="flex bg-[#0e7fdf] w-full h-[4rem] items-center justify-center">
          <a>
            <span>CМОТРЕТЬ ЕЩЕ УСЛУГИ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
