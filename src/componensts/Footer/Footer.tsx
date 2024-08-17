import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
export default function Footer() {
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMassageRequired] = useState(false);
  const handleEmailRequired = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      setEmailRequired(false);
    } else {
      setEmailRequired(true);
    }
  };
  /*            */
  const productCategory = [
    "Дизельный генератор",
    "Морской генератор",
    "Газовый генератор",
    "Оборудование для обработки металла",
    "Холодильная камера",
    "Дизельная насосная установка",
    "Химические вещества",
  ];

  const quickLinks = [
    "Главная",
    "Продукция",
    "О нас",
    "Новости",
    "Свяжитесь с нами",
    "Скачать",
    "Часто задаваемые вопросы",
    "Политика конфиденциальности",
  ];

  const handleMassageRequired = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== "") {
      setMassageRequired(false);
    } else {
      setMassageRequired(true);
    }
  };
  return (
    <div className="flex w-full min-h-[50rem] flex-col bg-[#222222] text-white justify-center items-center">
      <div className="flex-grow flex min-w-3/4 nin-h-2/4 gap-x-24 flex-wrap flex-col md:flex-row justify-center">
        <div className="flex flex-col gap-5 mt-10">
          <img src="/logo-1.webp" className="w-64"></img>
          <span className="w-80">
            Мы с нетерпением ждем установления хороших партнерских отношений с
            вами и совместного развития для многообещающего будущего!
          </span>
          <ul className="flex gap-2">
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaFacebookF fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaXTwitter fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a>
                <IoLogoYoutube fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaInstagram fill="#0e6eb8" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-10 gap-1">
          <span className="text-2xl w-56">Категория товара</span>
          <ul className="flex flex-col gap-1">
            {productCategory.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col mt-10 gap-1">
          <span className="text-2xl w-52">Быстрые ссылки</span>
          <ul className="flex flex-col gap-1">
            {quickLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" className="hover:text-blue-400">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="flex flex-col mt-10 gap-y-2">
          <span className="text-2xl w-72">Обратная связь</span>
          <div className="flex gap-y-2 flex-col">
            <div className="flex gap-3 text-black">
              <div>
                <input
                  className="bg-gray-400 w-24 h-8 placeholder-black"
                  type="email"
                  placeholder="*Email"
                  onBlur={handleEmailRequired}
                  onFocus={handleEmailRequired}
                />
                {emailRequired && <p className="text-red-500">Необходимо!</p>}
              </div>

              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="text"
                placeholder="Имя"
              />
              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="tel"
                placeholder="Тел"
              />
            </div>

            <div>
              <textarea
                placeholder="*Сообщение"
                className="bg-gray-400 placeholder-black required w-full h-32"
                onBlur={handleMassageRequired}
                onFocus={handleMassageRequired}
              ></textarea>
              {messageRequired && <p className="text-red-500">Необходимо!</p>}
            </div>
          </div>
          <input
            type="submit"
            value={"отправить"}
            className="bg-red-500 h-8"
          ></input>
        </form>
      </div>
      <div className="w-full  min-h-10 bg-black "></div>
    </div>
  );
}
