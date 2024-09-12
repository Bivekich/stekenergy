import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { client } from "../../../stackenergy/client";
export default function ContactsPage() {
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMassageRequired] = useState(false);
  const [emailData, setEmailData] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [title, setTitle] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [info, setInfo] = useState<{ from: string; to: string }[]>([]);
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'contactsPage']{title, des, info[]{from, to}}"
      );
      setTitle(data[0].title);
      setDes(data[0].des);
      setInfo(data[0].info);
    };
    console.log(info);
    query();
  }, []);

  const handleEmailRequired = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== "") {
      setEmailRequired(false);
    } else {
      setEmailRequired(true);
    }
  };

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

  const handleMassageRequired = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== "") {
      setMassageRequired(false);
    } else {
      setMassageRequired(true);
    }
  };
  /*const data = [
    "Город Москва, Спартаковский пер, д. 26 стр. 2",
    "105082, город Москва, УЛ. 2-хуторская 38а стр 1 БЦ Башилов двор",
    "+86-523-86326170",
    "+86-523-86326170",
    "+86-15850872118 / +86-18012096599",
    "414833725",
    "info@stekenergy.ru",
    "414833725@qq.com",
    "+8615850872118",
    "Здание 24, Zhongjia International Plaza, город Тайчжоу, провинция Цзянсу, Китай",
  ];*/
  return (
    <div className="flex flex-col w-screen">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-[50%] md:w-[95%] w-[93%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>Контакты</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - Контакты
            </span>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center mt-5 lg:mt-0 mb-10">
        <div className="w-screen lg:w-1/2">
          <div className="w-full flex flex-col lg:flex-row">
            {info && (
              <div className="lg:w-1/2 md:w-full flex flex-col gap-2 px-4 lg:px-0">
                <span className="text-2xl font-bold">{title}</span>
                <span>{des}</span>
                <img src="/weibiaoti-990-516.webp"></img>
                <ul className="flex flex-col gap-3">
                  {info.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>{item.from} </span>
                        {item.to[0] === "h" ? (
                          <a href={item.to} className="text-blue-400">
                            {item.to}
                          </a>
                        ) : (
                          <span>{item.to}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <form
              className="flex flex-col gap-2 lg:w-[45%] md:w-full mt-14 text-black ml-0 lg:ml-auto px-4 lg:px-0 mb-5 lg:mb-0"
              onSubmit={(e) => sendEmail(e)}
            >
              <span className="text-2xl font-bold">Связаться</span>
              <div>
                <input
                  className="bg-gray-400 w-full h-24 placeholder-black"
                  type="email"
                  placeholder="*Email"
                  onBlur={handleEmailRequired}
                  onFocus={handleEmailRequired}
                  onChange={(e) => setEmailData(e.target.value)}
                />
                {emailRequired && <p className="text-red-500">Необходимо!</p>}
              </div>

              <div>
                <input
                  className="bg-gray-400 w-full h-20 placeholder-black"
                  type="text"
                  placeholder="Имя"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <input
                  className="bg-gray-400 w-full h-20 placeholder-black"
                  type="tel"
                  placeholder="Tел"
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>

              <div>
                <textarea
                  placeholder="*Сообщение"
                  className="bg-gray-400 placeholder-black required w-full h-32"
                  onBlur={handleMassageRequired}
                  onFocus={handleMassageRequired}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageRequired && <p className="text-red-500">Необходимо!</p>}
              </div>

              <input
                type="submit"
                value={"Отправить"}
                className="bg-red-500 h-12"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
