"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { Bonheur_Royale } from "next/font/google";

const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: ["400"],
});

const ImageContainer = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#image-container",
        start: "top center",
        scrub: 1,
      },
    });

    gsap.utils.toArray(".left-container img").forEach((img, i) => {
      tl.to(
        img as HTMLElement,
        {
          x: i === 0 ? -800 : i === 1 ? -800 : -400,
          rotate: i === 0 ? "-50deg" : i === 1 ? "-25deg" : "-35deg",
          y: i === 0 ? 0 : i === 1 ? "-300" : "-500",
        },
        0
      );
    });

    gsap.utils.toArray(".right-container img").forEach((img, i) => {
      tl.to(
        img as HTMLElement,
        {
          x: i === 0 ? 800 : i === 1 ? 800 : 400,
          rotate: i === 0 ? "50deg" : i === 1 ? "25deg" : "35deg",
          y: i === 0 ? 0 : i === 1 ? "-300" : "-500",
        },
        0
      );
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-text",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
      .to(".main-text", { y: 0, opacity: 1 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-paragraph",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })
      .to(".main-paragraph", { y: 0, opacity: 1 });
  });

  return (
    <div
      id="image-container"
      className="relative max-w-[1600px] mx-auto flex justify-between gap-12 mt-[300px]"
    >
      <div className="absolute top-[500px] left-1/2 -translate-x-[50%] flex flex-col gap-8 items-center">
        <h1
          className={`main-text text-rose-500 text-7xl opacity-0 translate-y-10 ${bonheur.className}`}
        >
          memory of light
        </h1>
        <p className="main-paragraph text-white font-serif text-2xl text-center opacity-0 translate-y-10">
          Sun-dappled shadows dance on fading walls—
          <br /> like ghosts of summer warmth, they slip away,
          <br /> leaving only whispers of yesterday&apos;s gold.
        </p>
      </div>
      <div className="left-container flex flex-col w-full">
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIVZQErCIW3mNcSrHw9x78QIthEDAodiT6bRPB"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIhOrjVAmFJcRnbHiGP26kKySATetYsmqW7Buj"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIrvE7bvokxde8tJNIf6Agp17VDGMjsnTv3B0H"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="right-container flex flex-col w-full">
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIM135MFC8QehPsCSRglT9XGwqc3Kobtpn746O"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIUtdcce0HFxRgZ0JcC6ltEL4vjWs5n1QOGwNq"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-[500px] rounded-xl">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIaQWZ7CLGRanAD67KorWNxEcqf9vJ2PB4gZ30"
            alt="scroll-trigger-img"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
