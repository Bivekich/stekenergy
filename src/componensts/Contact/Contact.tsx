export default function Contact() {
  return (
    <div className="w-full mb-20 flex justify-center">
      <div className="relative w-11/12 h-auto md:h-96 lg:h-[50vh] bg-none md:bg-[url('/contact.webp')] bg-no-repeat bg-center md:bg-contain flex flex-col items-center justify-center">
        <div className="block md:hidden w-full border-t-2 border-gray-300 my-4"></div>

        <div className="relative w-full md:w-9/12 text-center md:text-left flex flex-col p-6 md:p-12 lg:pl-36 md:items-start justify-center z-10">
          <span className="text-2xl md:text-3xl text-[#02334d] font-bold">
            Запросить расценки
          </span>
          <span className="mt-2 md:w-4/5 lg:w-2/5">
            Мы с нетерпением ожидаем установления хороших партнерских отношений
            с вами и совместного стремления к развитию ради многообещающего
            будущего!
          </span>
          <div className="w-full md:w-auto mt-4 md:mt-8 flex justify-center md:justify-start">
            <div className="flex items-center justify-center h-10 px-6 bg-[#0e6eb8] hover:bg-[#055084] transition-colors duration-200">
              <a className="text-white text-lg cursor-pointer" href="/Contacts">
                Связаться
              </a>
            </div>
          </div>
        </div>

        <div className="block md:hidden w-full border-t-2 border-gray-300 my-4"></div>
      </div>
    </div>
  );
}
