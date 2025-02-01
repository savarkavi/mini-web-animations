import React from "react";

const Intro = () => {
  return (
    <div className="intro w-full min-h-screen bg-[#fbc1d4] text-black font-serif text-xl flex flex-col gap-10 p-8 z-[-10]">
      <div className="pt-48 flex gap-32 h-screen">
        <div className="flex flex-col gap-4 w-[250px] shrink-0">
          <div className="flex items-center justify-between">
            <p>Serious Facts</p>
            <p>01 / 03</p>
          </div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="flex flex-col gap-4">
            <span className="text-8xl font-bold">100+</span>
            <p>
              Startups we have helped in their growth journey over the past 5
              years
            </p>
          </div>
        </div>

        <div className="w-[1200px]">
          <p className="text-8xl font-semibold">
            Crafting premium brands for startups that make people smile
          </p>
          <button className="mt-16 bg-white px-6 py-2 rounded-full text-lg">
            Scroll ↓
          </button>
        </div>
      </div>
      <p className="text-4xl">Servives</p>
    </div>
  );
};

export default Intro;
