import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
export default function VideoPage() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>
      <div className="lg:w-[50%] w-full flex justify-center items-center mb-10">
        <video className="w-full h-full" controls={true}>
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Footer></Footer>
    </div>
  );
}
