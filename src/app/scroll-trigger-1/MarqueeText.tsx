"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Oswald } from "next/font/google";
import { useRef } from "react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const MarqueeText = ({ isLeft }: { isLeft: boolean }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.timeline().to(containerRef.current, {
      xPercent: isLeft ? -50 : 50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div
      ref={containerRef}
      className={`w-max text-nowrap flex gap-4 relative ${oswald.className}`}
    >
      <div className="text-white text-[200px] leading-[1] font-bold font-serif uppercase flex items-center px-1">
        <p>Wild ideas </p>
        <div className="w-[150px] h-[10px] bg-white"></div>
        <p>Let&apos;s dive right in</p>
      </div>
      <div
        className={`text-white text-[200px] leading-[1] font-bold font-serif uppercase flex items-center px-1`}
      >
        <p>Wild ideas </p>
        <div className="w-[150px] h-[10px] bg-white"></div>
        <p>Let&apos;s dive right in</p>
      </div>
    </div>
  );
};

export default MarqueeText;
