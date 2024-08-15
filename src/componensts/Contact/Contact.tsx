export default function Contact() {
  return (
    <div className="h-1/3 w-full mb-20 place-content-center">
      <div className="flex w-11/12 bg-[url('contact.webp')] h-5/6 bg-no-repeat bg-contain m-auto bg-center flex-col items-center justify-center">
        <div className="flex w-9/12 h-2/4 text-black flex-col pl-36">
          <span className="text-3xl text-[#02334d] font-bold">
            Запросить расценки
          </span>
          <span className="w-2/5 mt-2">
            Мы с нетерпением ожидаем установления хороших партнерских отношений
            с вами и совместного стремления к развитию ради многообещающего
            будущего!
          </span>
        </div>
        <div className="w-9/12 h-1/6 pl-36">
          <div className="flex w-36 items-center justify-center h-10 bg-[#0e6eb8]">
            <a className="text-white text-xl">Связаться</a>
          </div>
        </div>
      </div>
    </div>
  );
}
