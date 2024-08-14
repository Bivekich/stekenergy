export default function Contact() {
  return (
    <div className="flex w-full h-1/3 justify-center items-center mt-10 ">
      <div className="flex w-full h-5/6 bg-[url('/contact.webp')] bg-no-repeat bg-contain m-auto justify-center pt-3">
        <div className="w-5/6 h-1/2 ">
          <div className="flex w-1/3 h-5/6  mr-auto pl-40 flex-col">
            <span className="text-3xl text-[#02334d] mt-5">Get A Quote</span>
            <span className="text-xl w-[30rem] text-[#02334d] mt-5">
              We look forward to establishing good cooperative relations with
              you and seeking development together for a promising future!
            </span>
            <div className="mt-3">
              <a className="w-40 h-11 flex justify-center items-center bg-[#0e6eb8] text-white">
                Contact US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
