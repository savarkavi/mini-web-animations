"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MaskText = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#mask-text",
          start: "top 90%",
          end: "top 10%",
          scrub: 1,
        },
      })
      .to("#mask-text", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      });
  });

  return (
    <div className="-mt-[200px] h-screen relative">
      <div className="flex flex-col justify-center items-center text-[170px] leading-[0.8] font-serif font-bold uppercase text-gray-400/20 absolute top-0 left-1/2 -translate-x-1/2">
        <h2>Join the</h2>
        <h2>life of</h2>
        <h2>call</h2>
      </div>

      <div
        id="mask-text"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        className="flex flex-col justify-center items-center text-[170px] leading-[0.8] font-serif font-bold uppercase text-white absolute top-0 left-1/2 -translate-x-1/2"
      >
        <h2>Join the</h2>
        <h2>life of</h2>
        <h2>call</h2>
      </div>
    </div>
  );
};

export default MaskText;
