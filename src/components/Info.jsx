import React from "react";
import { features, problemStatement } from "../constants";
import ButtonWithModal from "./ButtonWithModal";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Info = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:px-16 px-6">
      <div className="flex-1 flex justify-center items-start flex-col gap-5">
        <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          My project's <br className="sm:block hidden" /> objectives
        </h2>
        <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          My project aim was to find a protocol that would prevent traffic accidents in Dubai.
          For this I compared DSRC and V2X protocols in terms of packet loss, throughput, latencies
          decide which one is the best fit for dubai.
        </p>
        <ButtonWithModal title={problemStatement.title} body={problemStatement.text} img={problemStatement.img}>
          View the problem statement
        </ButtonWithModal>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-5 relative">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Info