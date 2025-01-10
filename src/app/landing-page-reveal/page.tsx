"use client";

import React, { useEffect, useRef } from "react";
import Photos from "./Photos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import Content from "./Content";

const Page = () => {
  const mainTl = useRef<gsap.core.Timeline>(null);
  const revealerTl = useRef<gsap.core.Timeline>(null);
  const scaleTl = useRef<gsap.core.Timeline>(null);

  gsap.registerPlugin(Flip);

  useGSAP(() => {
    revealerTl.current = gsap
      .timeline()
      .to(".revealer-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
      })
      .to(
        ".revealer-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        "<"
      );

    scaleTl.current = gsap
      .timeline()
      .to(".img-1", { scale: 1, duration: 2, ease: "power4.inOut" })
      .to(
        ".img",
        {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.4,
        },
        ">-1"
      );

    mainTl.current = gsap
      .timeline()
      ?.add(revealerTl.current)
      .add(scaleTl.current, "-=1")
      .add(gsap.from(".letter", { yPercent: 100, duration: 0.5, stagger: 0.1 }))
      .add(
        gsap.from(".nav-link", { yPercent: -100, duration: 0.5, stagger: 0.1 }),
        "<"
      )
      .add(gsap.from(".home-img", { xPercent: 50, duration: 0.5 }), "<")
      .add(
        gsap.from(".footer-text-1", {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.2,
        }),
        "<+0.5"
      )
      .add(
        gsap.from(".footer-text-2", {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.2,
        }),
        "<"
      );
  });

  const handleStackAnimation = () => {
    document.querySelectorAll(".img:not(.main)").forEach((img) => {
      img.remove();
    });

    const state = Flip.getState(".main");
    document.querySelector(".images")?.classList.add("stacked-container");

    document.querySelectorAll(".main").forEach((img) => {
      img.classList.add("stacked");
    });

    Flip.from(state, {
      duration: 0.8,
      stagger: -0.1,
      absolute: true,
    });
  };

  useEffect(() => {
    scaleTl.current?.eventCallback("onComplete", handleStackAnimation);

    return () => {
      scaleTl.current?.eventCallback("onComplete", null);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#f4f2ed] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          className="revealer-1 w-full h-full bg-[#f4f2ed] absolute top-0 left-0 flex-1 z-[99]"
        ></div>
        <div
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          className="revealer-2 w-full h-full bg-[#f4f2ed] absolute bottom-0 left-0 flex-1 z-[99]"
        ></div>
      </div>
      <Content />
      <Photos />
    </div>
  );
};

export default Page;
