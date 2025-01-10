"use client";

import { Stalinist_One, Cormorant_Garamond } from "next/font/google";
import Image from "next/image";

const stalinist = Stalinist_One({
  subsets: ["latin"],
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "300", "500"],
});

const siteName = "Nova";
const navLinks = ["About", "Work", "Journal", "Contact"];
const address = ["COLONY", "FLINT GLASS WORKS", "- 64 JERSEY ST", "M4 6JW"];
const contact = ["mail@Nova.com", "INSTAGRAM", "LINKEDIN"];

const Content = () => {
  return (
    <div className="text-black absolute top-0 left-0 w-full h-full p-6 flex flex-col">
      <div className="w-full flex justify-between">
        <div
          className={`${stalinist.className} text-[12rem] leading-[0.9] text-[#ff6542] uppercase relative overflow-hidden flex items-center justify-center`}
        >
          {siteName.split("").map((l, i) => (
            <span key={i} className="letter inline-block top-8">
              {l}
            </span>
          ))}
        </div>
        <div className="flex-1 flex gap-12 justify-end mr-4">
          {navLinks.map((link) => (
            <div
              key={link}
              className="nav-link text-4xl font-serif font-semibold"
            >
              <span className="underline cursor-pointer">{link}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[calc(100vw-300px)] h-full self-end flex justify-between gap-24 mt-24 overflow-hidden">
        <div className="w-full max-w-[500px] mt-28 flex flex-col justify-between">
          <div className="">
            <p className="max-w-[450px] text-4xl font-serif">
              Welcome to the futre of fashion. Explore and discover outfits from
              Nova.
            </p>
          </div>
          <div
            className={`${cormorant.className} flex justify-between uppercase font-semibold text-sm`}
          >
            <span>2025</span>
            <div>
              {address.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <span className="footer-text-1 inline-block">{line}</span>
                </div>
              ))}
            </div>
            <div>
              {contact.map((social, i) => (
                <div key={i} className="overflow-hidden">
                  <span className="footer-text-2 inline-block">{social}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-img w-full h-full relative">
          <Image
            src="/landing-page-reveal-img.png"
            alt="home image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
