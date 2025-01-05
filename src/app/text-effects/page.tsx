"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import localFont from "next/font/local";
// import { useRef, useState } from "react";

const johnCream = localFont({
  src: "../../fonts/Jhon Cream.otf",
});

const colors = [
  "#f1948a",
  "#af7ac5",
  "#85c1e9",
  "#a3e4d7",
  "#f9e79f",
  "#fad7a0",
  "#abebc6",
  "#CCCCFF",
  "#6495ED",
  "#e74c3c",
  "#884ea0",
  "#eb984e",
];

const Page = () => {
  //   const [effectType, setEffectType] = useState(1);
  //   const anim = useRef<gsap.core.Timeline>(null);

  const txt = "HakunaMatata";

  const { contextSafe } = useGSAP();

  const handleClick = contextSafe((type: number) => {
    if (type === 1) {
      gsap
        .timeline()
        .to(".char", {
          y: -150,
          stagger: 0.05,
          duration: 0.8,
          ease: "back(2)",
        })
        .to(".char", { y: 0, stagger: 0.05, ease: "back(2)" }, 0.3);
    } else if (type === 2) {
      gsap
        .timeline()
        .to(".char", {
          y: gsap.utils.wrap([-150, 150]),
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out",
        })
        .to(".char", { y: 0, stagger: 0.05, ease: "back.out" }, 0.3);
    } else if (type === 3) {
      gsap
        .timeline()
        .set(".char", { rotate: 0 })
        .to(".char", {
          y: gsap.utils.wrap([-150, 150]),
          rotate: gsap.utils.wrap([-360, 360]),
          stagger: 0.05,
          duration: 1,
          ease: "back.out",
        })
        .to(".char", { y: 0, stagger: 0.05, ease: "back.out" }, 0.5);
    } else if (type === 4) {
      gsap
        .timeline()
        .set(".char", { opacity: 0, rotate: 0, y: 0 })
        .fromTo(
          ".char",
          {
            opacity: 0,
            y: gsap.utils.wrap([-250, 250]),
            rotate: gsap.utils.wrap([-360, 360]),
            stagger: {
              each: 0.05,
              from: "center",
            },
            duration: 1,
            ease: "back.out",
          },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            stagger: {
              each: 0.05,
              from: "center",
            },
            duration: 1,
            ease: "back.out",
          }
        );
    } else if (type === 5) {
      gsap.set(".char", {
        transformPerspective: 400,
        rotateY: 0,
        overwrite: true,
      });
      gsap.to(".char", {
        rotateY: 360,
        duration: 1,
        ease: "back(2)",
        stagger: { each: 0.1 },
        overwrite: true,
      });
    }
  });

  return (
    <div
      className={`${johnCream.className} flex flex-col justify-between items-center h-screen py-36`}
    >
      <div className="text-container text-[150px] mt-24">
        {txt.split("").map((char, i) => (
          <span
            key={i}
            className="char inline-block"
            style={{ color: colors[i] }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-rose-300 py-2 px-4 rounded-md w-fit text-black"
          onClick={() => handleClick(1)}
        >
          Effect 1
        </button>
        <button
          className="bg-rose-300 py-2 px-4 rounded-md w-fit text-black"
          onClick={() => handleClick(2)}
        >
          Effect 2
        </button>
        <button
          className="bg-rose-300 py-2 px-4 rounded-md w-fit text-black"
          onClick={() => handleClick(3)}
        >
          Effect 3
        </button>
        <button
          className="bg-rose-300 py-2 px-4 rounded-md w-fit text-black"
          onClick={() => handleClick(4)}
        >
          Effect 4
        </button>
        <button
          className="bg-rose-300 py-2 px-4 rounded-md w-fit text-black"
          onClick={() => handleClick(5)}
        >
          Effect 5
        </button>
      </div>
    </div>
  );
};

export default Page;
