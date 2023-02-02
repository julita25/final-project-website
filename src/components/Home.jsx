import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import award from "../images/award-1.jpg";
import award2 from "../images/award-2.jpg";
import award4 from "../images/award-4.jpg";

import "swiper/css";
import "swiper/css/pagination";

const imgContent = [award, award2, award4];

const Home = () => {
  return (
    <section id="home" className="md:container sm:px-16 px-6 min-h-screen mt-10 mb-5">
      <div className="flex md:flex-row justify-center flex-col-reverse items-center md:mt-16">
        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
          <h5 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            Know about my project <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[72px] text-[42px]">Finding a suitable V2X protocol for dubai</span>{" "}
          </h5>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="rounded-3xl px-5 drop-shadow-primary w-2/4 z-[5]"
        >
          {imgContent.map((img, i) => (
            <SwiperSlide
              key={i}
              className="rounded-3xl border-[#FAF9FD] mb-10"
            >
              <img src={img} alt="DAST award" className="w-full md:h-[36rem] h-[24rem] object-cover relative" />
            </SwiperSlide>
          ))
          }
        </Swiper>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
}

export default Home