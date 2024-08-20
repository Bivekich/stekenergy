import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import QuestionCard from "../../componensts/QuestionCard/QuestionCard";
const questionAnswer = [
  {
    question: "Вы торговая компания или производитель?",
    answer:
      "Мы — группа компаний, включающая пять заводов и две торговые компании.",
  },
  {
    question: "Какой диапазон мощности ваших дизельных генераторов?",
    answer: "Мы можем предоставить мощность от 6KVA до 5000KVA.",
  },
  {
    question: "Какое время вашей доставки?",
    answer:
      "Зависит от различных продуктов. Самый короткий срок выполнения заказа — 1 неделя.",
  },
  {
    question: "Какие ваши условия оплаты?",
    answer:
      "T/T 30% авансом и T/T 70% остатка оплачивается перед отправкой или 100% аккредитив при предъявлении.",
  },
  {
    question: "Каков ваш гарантийный срок?",
    answer:
      "Наши условия гарантии — 1 год или 1000 часов работы, в зависимости от того, что наступит раньше. Но на основе некоторых специальных проектов мы можем продлить наш гарантийный срок.",
  },
  {
    question: "Предлагаете ли вы услуги OEM?",
    answer: "Да.",
  },
  {
    question: "Как я могу вам доверять?",
    answer:
      "Diesel Service & Supply гарантирует качество всех генераторов и промышленного оборудования, которые мы продаем. Если вас не убеждают фотографии, видео, отчеты о проверках, нагрузочные испытания, отзывы клиентов и знание наших специалистов о генераторах, которые вас интересуют, то мы приглашаем вас посетить наш большой двор и производственный цех, чтобы увидеть нагрузочное испытание и убедиться в профессионализме нашей работы.",
  },
];
export default function FaqPage() {
  return (
    <div className="flex flex-col w-screen">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-[50%] md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>FAQ</span>
          </div>
          <div>
            <span>
              <a href="/" className="hover:text-blue-600">
                Главная
              </a>{" "}
              - FAQ
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[80vh] mt-5">
        <div className="flex lg:w-[55%] md:w-full w-screen items-center bg-white h-full flex-col gap-10">
          {questionAnswer.map((item, _) => {
            return (
              <QuestionCard
                quesion={item.question}
                answer={item.answer}
              ></QuestionCard>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
