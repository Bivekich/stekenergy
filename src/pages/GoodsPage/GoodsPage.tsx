import { useParams } from "react-router-dom";
import Header from "../../componensts/Header/Header";
import Footer from "../../componensts/Footer/Footer";
import { useState } from "react";

export default function GoodsPage() {
  const [numberItems, setNumberItems] = useState(1);

  const ProductName = useParams();
  return (
    <div className="w-screen flex flex-col">
      <div className="h-32 bg-white">
        <Header></Header>
      </div>

      <div className="flex justify-center items-center lg:h-20 h-1/3 overflow-hidden bg-white">
        <div className="flex lg:w-1/2 md:w-[90%] w-[90%] text-black font-bold text-2xl lg:justify-between flex-col lg:flex-row lg:items-end justify-end pb-5 border-b-2 ml-auto mr-auto">
          <div>
            <span>{ProductName.nameOfProduct}</span>
          </div>
          <div>
            <span>Home - {ProductName.nameOfProduct}</span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 pb-5">
        <div className="flex lg:w-1/2 w-screen px-4 flex-col md:justify-normal md:items-start justify-center items-center md:flex-row">
          <img src="/SG.webp" className="w-fit h-fit"></img>
          <div className="lg:ml-10 md:px-3 lg:px-0">
            <span className="flex w-96 flex-col">
              Silent Generator/Containerized Generator In 2021, we became an
              authorized export agent and overseas project contractor of Jereh
              Group 8525, IEC 34-1, GB1105, GB/T 2820, CSH 22-2, VDE 0530 and
              YD/T502-2000 "Technical Requirements for Diesel Generator Sets for
              Communication" and other standards. Jereh is also the authorized
              supplier of Siemens for SGT-A05 (Industrial 501-K) aeroderivative
              gas turbine, gold certified integrator of Jenbacher & Waukesha. As
              one of the world's leading gas turbine equipment suppliers,
              Siemens aeroderivative SGT-A05 series gas turbines have mature
              technology, the most advanced materials and technical solutions,
              and the products are efficient, flexible and reliable. It is
              suitable for a variety of power generation applications such as
              cogeneration, offshore platforms and emergency power supplies.
              Jenbacher gas generator is a global leader in the field of
              combustible gas-fueled piston reciprocating engines, complete sets
              of generator sets and cogeneration systems. It is one of the few
              manufacturers in the world dedicated to the development of gas
              engine technology The power range of Jenbacher gas generator sets
              range from 0.2MW to 10.4MW. It has a wide range of gas
              adaptability and meets the most stringent exhaust emission
              standards in the world. The product performance is efficient,
              durable, and reliable, and can meet the diverse needs of users for
              cold, heat and electricity. It is widely used in commercial,
              industrial and municipal users.
            </span>
            <div className="flex gap-3 mt-5 mb-5">
              <span>Quantity:</span>
              <div className="flex gap-3">
                <button
                  className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
                  onClick={() =>
                    setNumberItems(numberItems - 1 > 0 ? numberItems - 1 : 1)
                  }
                >
                  -
                </button>
                <span className="text-xl">{numberItems}</span>
                <button
                  className="border-2 h-8 w-8 flex justify-center items-center text-xl text-center"
                  onClick={() => setNumberItems(numberItems + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col w-72 gap-3">
              <button className="border-2 rounded-full h-10">Inqu</button>
              <button className="border-2 rounded-full h-10">
                add to busket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-5">
        <div className="flex lg:w-1/2 md:w-full md:px-4 lg:px-0 flex-col">
          <div className="flex flex-col">
            <div className="flex gap-5 px-4 border-t-2 pt-3 pb-3">
              <span>Model:RYC</span>
              <span>Brand:Cummins</span>
            </div>

            <div className="w-full flex-col px-4 border-2">
              <div className="w-full">
                <span className="">Description</span>
              </div>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi, unde distinctio cum doloremque molestiae inventore
                quidem aspernatur explicabo quibusdam ut architecto nisi
                assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Excepturi, unde distinctio cum doloremque molestiae
                inventore quidem aspernatur explicabo quibusdam ut architecto
                nisi assumenda consequuntur at voluptatum numquam, amet repellat
                veniam.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
