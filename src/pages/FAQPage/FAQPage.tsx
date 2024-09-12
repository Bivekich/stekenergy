import { useEffect, useState } from "react";
import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import QuestionCard from "../../componensts/QuestionCard/QuestionCard";
import { client } from "../../../stackenergy/client";
/*const questionAnswer = [

];*/

export default function FaqPage() {
  const [questionAnswer, setQustionAnswer] = useState([]);
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'FAQ']{FAQ[]{question, answer}}"
      );
      console.log(data[0].FAQ);
      const questionanswer = data[0].FAQ.map((item: any) => {
        return item;
      });
      setQustionAnswer(questionanswer);
    };
    query();
  }, []);

  return (
    <div className="flex flex-col w-screen">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center overflow-hidden bg-white">
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

      <div className="flex justify-center items-center w-full mt-5 mb-10">
        <div className="flex lg:w-[55%] md:w-full w-screen items-center bg-white h-full flex-col gap-10">
          {questionAnswer?.map((item: any, index: any) => {
            return (
              <QuestionCard
                key={index}
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
