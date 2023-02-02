import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { approachContent } from '../constants'

import "swiper/css";
import "swiper/css/pagination";

const Methodology = () => {
  return (
    <section id="methodology" className="flex flex-col sm:px-16 px-6 gap-10 my-10 h-full gap-16">
      <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        My approach
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={25}
        modules={[Pagination]}
        className="rounded-3xl px-5 drop-shadow-primary self-start w-3/4"
      >
        {approachContent.map((content, index) => (
          <SwiperSlide
            key={index}
            className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] mb-10"
          >
            {content.hasImg ? <img src={content.img} alt="chart" className="object-cover w-full" />
              : <video src={content.video} alt="demostrative video" type="video/mp4" controls className="object-cover w-full" />}
            <p className="font-normal text-[16px] leading-[30.8px] mt-5">{content.info}</p>

          </SwiperSlide>
        ))
        }
      </Swiper>
    </section>
  )
}

export default Methodology