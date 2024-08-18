import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import QuestionCard from "../../componensts/QuestionCard/QuestionCard";

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
            <span>Home - FAQ</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[80vh] mt-5">
        <div className="flex lg:w-[55%] md:w-full w-screen items-center bg-white h-full flex-col gap-10">
          <QuestionCard></QuestionCard>
          <QuestionCard></QuestionCard>
          <QuestionCard></QuestionCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
