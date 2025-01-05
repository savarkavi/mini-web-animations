"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef, useState } from "react";

const menuItems = [
  { id: 1, name: "Home", link: "/navigation-menu-1/" },
  { id: 2, name: "About", link: "/navigation-menu-1/about" },
  { id: 3, name: "Work", link: "/navigation-menu-1/work" },
  { id: 4, name: "Contact", link: "/navigation-menu-1/contact" },
  { id: 5, name: "Studio", link: "/navigation-menu-1/studio" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);

  useGSAP(() => {
    gsap.to("#menu-container", {
      clipPath: isOpen
        ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1,
      delay: isOpen ? 0 : 0.2,
    });

    gsap.to(".menu-item", {
      y: isOpen ? 0 : 112,
      stagger: {
        each: 0.2,
        from: isOpen ? "start" : "end",
      },
      delay: isOpen ? 0.2 : 0,
    });
  }, [isOpen]);

  const { contextSafe } = useGSAP({
    scope: container,
    revertOnUpdate: true,
  });

  const handleMouseHover = contextSafe((i: number) => {
    gsap.to(`.menu-item-${i} .menu-item-letter`, {
      y: -112,
      stagger: 0.08,
      duration: 0.3,
      overwrite: true,
    });
  });

  const handleMouseLeave = contextSafe((i: number) => {
    gsap.to(`.menu-item-${i} .menu-item-letter`, {
      y: 0,
      stagger: { each: 0.08, from: "end" },
      duration: 0.3,
      overwrite: true,
    });
  });

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white uppercase text-xl absolute top-6 right-10"
      >
        Menu
      </button>
      <div
        id="menu-container"
        className="w-full relative overflow-hidden h-screen bg-[#c5fb45]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-black uppercase text-xl absolute top-6 right-10"
        >
          Close
        </button>
        <div ref={container} className="flex flex-col gap-4 ml-10 mt-6">
          {menuItems.map((item, i) => (
            <Link
              href={item.link}
              onClick={() => setIsOpen(false)}
              key={item.id}
              className="overflow-hidden w-fit"
              onMouseEnter={() => handleMouseHover(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <h2
                className={`menu-item menu-item-${i} text-black relative uppercase text-9xl font-serif translate-y-28`}
              >
                {item.name.split("").map((l, i) => (
                  <span
                    key={i}
                    className="menu-item-letter relative inline-block"
                  >
                    <span className="relative block">{l}</span>
                    <span className="absolute top-[112px] left-0">{l}</span>
                  </span>
                ))}
              </h2>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-between items-end px-10">
          <h2 className="text-black text-2xl uppercase font-serif">
            Savarkavi
          </h2>
          <div className="text-black text-2xl uppercase font-serif flex flex-col">
            <span>Instagram ↗</span>
            <span>Twitter ↗</span>
            <span>LinkedIn ↗</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
