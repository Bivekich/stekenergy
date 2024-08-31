import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Footer() {
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMassageRequired] = useState(false);
  const [emailData, setEmailData] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [name, setName] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const param = {
      email: emailData,
      name: name,
      tel: tel,
      message: message,
    };
    //const data = `Новая заявка на контакт:\nФИО: ${name}\nemail: ${emailData}\nТел: ${tel}\nСообщение: ${message}`;
    emailjs.send(
      "service_byjyg8r",
      "template_w2hum88",
      param,
      "EjXlyNE41-sign7QK"
    );
    //sendMessage(data);
  };

  const handleEmailRequired = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      setEmailRequired(false);
    } else {
      setEmailRequired(true);
    }
  };
  const productCategory = [
    {
      title: "Дизельный генератор",
      link: "/ProductsPage/type/DieselGenerator/all",
    },
    {
      title: "Морской генератор",
      link: "/ProductsPage/type/MarineGenerator/all",
    },
    {
      title: "Газовый генератор",
      link: "/ProductsPage/type/GasGenerator/all",
    },
    {
      title: "Оборудование для обработки металла",
      link: "/ProductsPage/type/MetalFormingEquipment/all",
    },
    {
      title: "Холодильная камера",
      link: "#",
    },
    {
      title: "Дизельная насосная установка",
      link: "/ProductsPage/type/DieselPumpSet/all",
    },
    {
      title: "Химические вещества",
      link: "/ProductsPage/type/Chemicals/all",
    },
  ];

  const quickLinks = [
    {
      title: "Главная",
      link: "/",
    },
    {
      title: "Продукция",
      link: "/ProductsPage",
    },
    {
      title: "О нас",
      link: "/AboutUs",
    },
    {
      title: "Новости",
      link: "/News",
    },
    {
      title: "Свяжитесь с нами",
      link: "/Contacts",
    },
    {
      title: "Часто задаваемые вопросы",
      link: "/FAQ",
    },
    {
      title: "Политика конфиденциальности",
      link: "/Privacy",
    },
  ];

  const handleMassageRequired = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== "") {
      setMassageRequired(false);
    } else {
      setMassageRequired(true);
    }
  };
  return (
    <div className="flex w-full min-h-[50rem] flex-col bg-[#5e5c5c] text-white justify-center items-center">
      <div className="flex-grow flex min-w-3/4 nin-h-2/4 gap-x-24 flex-wrap flex-col md:flex-row justify-center">
        <div className="flex flex-col gap-5 mt-10">
          <img src="/Energylogo.png" className="w-52"></img>
          <span className="w-80">
            Мы с нетерпением ждем установления хороших партнерских отношений с
            вами и совместного развития для многообещающего будущего!
          </span>
          <ul className="flex gap-2">
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a href="https://www.facebook.com/CNRoyalPower/">
                <FaFacebookF fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a href="https://twitter.com/ansonhy">
                <FaXTwitter fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a href="https://www.youtube.com/@royalpoweranson270">
                <IoLogoYoutube fill="#0e6eb8" />
              </a>
            </li>
            <li className="flex bg-[#ffffff] w-8 h-8 items-center justify-center rounded-full">
              <a href="https://www.instagram.com/cnroyalpower/">
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
                  <a href={item.link} className="hover:text-blue-400">
                    {item.title}
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
                  <a href={item.link} className="hover:text-blue-400">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form
          className="flex flex-col mt-10 gap-y-2"
          onSubmit={(e) => sendEmail(e)}
        >
          <span className="text-2xl w-72">Обратная связь</span>
          <div className="flex gap-y-2 flex-col">
            <div className="flex gap-3 text-black">
              <div>
                <input
                  className="bg-gray-400 w-24 h-8 placeholder-black"
                  type="email"
                  placeholder="*Email"
                  value={emailData}
                  onBlur={handleEmailRequired}
                  onFocus={handleEmailRequired}
                  onChange={(e) => setEmailData(e.target.value)}
                />
                {emailRequired && <p className="text-red-500">Необходимо!</p>}
              </div>

              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="tel"
                placeholder="Тел"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>

            <div>
              <textarea
                placeholder="*Сообщение"
                className="bg-gray-400 placeholder-black required w-full h-32 text-black"
                onBlur={handleMassageRequired}
                onFocus={handleMassageRequired}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
      <div className="flex w-full min-h-10 bg-[#5e5c5c] justify-center items-center mt-5">
        <span className="flex justify-center items-center w-full text-center">
          {" "}
          Авторские права © 2024 ООО "Стэк Энерджи", Ltd. Все права защищены.
        </span>
      </div>
    </div>
  );
}
