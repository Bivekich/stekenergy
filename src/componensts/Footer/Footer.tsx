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

  const handleMassageRequired = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value !== "") {
      setMassageRequired(false);
    } else {
      setMassageRequired(true);
    }
  };
  return (
    <div className="flex w-full min-h-[50rem] flex-col bg-[#222222] text-white justify-center items-center">
      <div className="flex-grow flex w-3/4 nin-h-2/4 gap-x-24 flex-wrap justify-center">
        <div className="flex flex-col gap-5 mt-10">
          <img src="/logo-1.webp" className="w-64"></img>
          <span className="w-80">
            We look forward to establishing good cooperative relations with you
            and seeking development together for a promising future!
          </span>
          <ul className="flex gap-2">
            <li className="flex bg-red-600 w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li className="flex bg-red-600 w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaXTwitter />
              </a>
            </li>
            <li className="flex bg-red-600 w-8 h-8 items-center justify-center rounded-full">
              <a>
                <IoLogoYoutube />
              </a>
            </li>
            <li className="flex bg-red-600 w-8 h-8 items-center justify-center rounded-full">
              <a>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-10 gap-1">
          <span className="text-2xl w-56">Product Category</span>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="hover:text-blue-400">
                Diesel Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Marine Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Gas Generator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Metel Forming Equipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Cold Storage Room
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Diesel Pump Set
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Chemicals
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-10 gap-1">
          <span className="text-2xl w-32">Quick Links</span>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <form className="flex flex-col mt-10 gap-y-2">
          <span>Contact Us</span>
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
                {emailRequired && <p className="text-red-500">Required!</p>}
              </div>

              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-gray-400 w-24 h-8 placeholder-black"
                type="tel"
                placeholder="Tel"
              />
            </div>

            <div>
              <textarea
                placeholder="*Message"
                className="bg-gray-400 placeholder-black required w-full h-32"
                onBlur={handleMassageRequired}
                onFocus={handleMassageRequired}
              ></textarea>
              {messageRequired && <p className="text-red-500">Required!</p>}
            </div>
          </div>
          <input
            type="submit"
            value={"click"}
            className="bg-red-500 h-8"
          ></input>
        </form>
      </div>
      <div className="w-full  min-h-10 bg-black "></div>
    </div>
  );
}
