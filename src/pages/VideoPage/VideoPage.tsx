import { useEffect, useState } from "react";
import Footer from "../../componensts/Footer/Footer";
import Header from "../../componensts/Header/Header";
import { client } from "../../../stackenergy/client";
export default function VideoPage() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const query = async () => {
      const data = await client.fetch(
        "*[_type == 'videoPage']{video{asset->{url}}}"
      );
      setUrl(data[0].video.asset.url);
    };
    query();
  }, []);
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>
      <div className="lg:w-[50%] w-full flex justify-center items-center mb-10">
        {url && (
          <video className="w-full h-full" controls={true}>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
