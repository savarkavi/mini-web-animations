"use client";

import Header from "./Header";
import Intro from "./Intro";
import Cards from "./cards";
import Outro from "./Outro";
import ReactLenis from "lenis/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card") as HTMLElement[];

    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 30%",
      pin: ".intro",
      pinSpacing: false,
    });

    gsap.to(".intro", {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: cards[0],
        start: "top 30%",
        scrub: true,
      },
    });

    cards.forEach((card, i) => {
      const isLastCard = cards.length - 1 === i;
      const cardInner = card.querySelector(".card-inner");

      if (!isLastCard) {
        ScrollTrigger.create({
          trigger: card,
          start: "top 30%",
          pin: true,
          pinSpacing: false,
          // markers: true,
          endTrigger: cards[cards.length - 1],
          end: "top 20%",
        });

        gsap.to(cardInner, {
          y: `-${(cards.length - i) * 150}`,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            scrub: true,
            start: "top 30%",
            endTrigger: cards[cards.length - 1],
            end: "top 20%",
          },
        });
      }
    });
  });

  return (
    <ReactLenis root>
      <div>
        <Header />
        <Intro />
        <Cards />
        <Outro />
      </div>
    </ReactLenis>
  );
};

// -${(cards.length - i) * 150}

export default Page;
