import React from "react";
import v2x from "../images/v2x.png";

const Home = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:px-16 px-6 min-h-screen">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full mt-12">
          <h5 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            Know about my project <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[72px] text-[42px]">Finding a suitable V2X protocol for dubai</span>{" "}
          </h5>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
  </div>*/}
        </div>
      </div>
      <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
        <img src={v2x} alt="v2x communication" className="w-full h-[80%] object-cover relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
}

export default Home