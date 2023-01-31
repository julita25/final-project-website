import React from "react";
import { resultsContent } from "../constants";

const Analysis = () => {
  return (
    <section id="methodology" className="flex flex-col sm:px-16 px-6 gap-16 my-5 h-full">
      <h2 className="font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Results: CV2X is more suitable for Dubai
      </h2>
      <div className="flex gap-5 justify-between flex-wrap group text-dimWhite">
        {resultsContent.map((content, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center min-w-[14rem] duration-300 border-2 border-slate-200 rounded-xl text-center  p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
          >
            <div className="text-xl">{React.createElement(content.logo)}</div>
            <h6 className="my-3">{content.title}</h6>
            <p className="leading-7">{content.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Analysis