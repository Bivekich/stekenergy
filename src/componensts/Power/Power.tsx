export default function Power() {
  const power = [
    {
      img: "/icon1.webp",
      title: "Профессиональная команда",
      text: "Наша сильная профессиональная команда предоставляет круглосуточные услуги по отслеживанию заказов",
    },
    {
      img: "/icon3.webp",
      title: "Полная производственная цепочка",
      text: "Проектирование, производство и отгрузка дизельных генераторных установок, газовых генераторных установок, судовых генераторов и дизельных/газовых электростанций",
    },
    {
      img: "/icon2.webp",
      title: "Широкий спектр деятельности",
      text: "Мы формируем пять основных бизнес-секторов: энергетика, холодильное оборудование, экструзия алюминия, текстиль и международная торговля.",
    },
    {
      img: "/icon2.webp",
      title: "Экспортная торговля",
      text: "Включая Соединенные Штаты, Европейский союз, Ближний Восток, Азию, Африку и Южную Америку",
    },
  ];
  return (
    <div className="md:bg-[url('/strong.webp')] md:bg-[#06375c] min-w-full min-w-auto md:h-3/5 md:block flex items-center justify-center py-8 md:py-0 bg-no-repeat bg-cover">
      <div className="flex bg-[#06375c] md:bg-none bg-[url('/strong.webp')] w-full md:w-1/2 h-full opacity-80 flex-col text-white bg-cover bg-center bg-no-repeat">
        {power.map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex w-full h-auto md:h-44 justify-end items-center group py-4 md:py-0"
            >
              <div className="w-0 bg-[#0c64ab] h-full absolute inset-0 opacity-80 transition-all duration-500 ease-in-out md:group-hover:w-[calc(100%+10rem)] origin-left"></div>
              <div className="flex w-11/12 md:w-6/12 pl-4 md:pl-0">
                <div className="border-r-0 md:border-r-2 pr-0 md:pr-4 z-50 md:block flex justify-center items-center">
                  <img
                    src={item.img}
                    width={"64px"}
                    height={"64px"}
                    className="md:w-[100px] md:h-[100px]"
                  ></img>
                </div>

                <div className="flex w-full md:w-4/5 flex-col gap-y-2 ml-4 md:ml-5">
                  <span className="text-2xl z-50">{item.title}</span>
                  <span className="w-11/12 text-[13px] z-50">{item.text}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex bg-[#0e7fdf] w-full h-[4rem] items-center justify-center">
          <a>
            <span>CМОТРЕТЬ ЕЩЕ УСЛУГИ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
