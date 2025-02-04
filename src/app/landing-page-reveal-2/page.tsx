"use client";

import { useGSAP } from "@gsap/react";
import Revealer from "./Revealer";
import gsap from "gsap";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Page = () => {
  useGSAP(() => {
    gsap.set(".img", { yPercent: 100, autoAlpha: 1 });
    gsap.set(".images-container", { x: 300 });
    gsap.set(".hero-text", { yPercent: 100 });
    gsap.set(".nav-item", { y: 50, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(".img", { yPercent: 0, stagger: 0.1, ease: "power3.out" })
      .to(".images-container", { x: 0, duration: 1 }, "<")
      .to(".img-container", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        stagger: 0.1,
        ease: "power3.out",
      })
      .to(".revealer", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" })
      .to(".hero-text", { yPercent: 0, stagger: 0.2 })
      .to(".nav-item", { y: 0, opacity: 1, stagger: 0.2 });
  });

  return (
    <div className="bg-[#e7e4e5] h-screen">
      <Revealer />
      <div className="h-full flex flex-col justify-between">
        <Navbar />
        <Hero />
        <div></div>
      </div>
    </div>
  );
};

export default Page;
