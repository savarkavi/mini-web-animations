"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { contextSafe } = useGSAP();

  const handleMouseMove = contextSafe(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { movementX, movementY } = e;
      gsap.to("#plane1", {
        x: `+=${-movementX * 0.4}`,
        y: `+=${-movementY * 0.4}`,
      });
      gsap.to("#plane2", {
        x: `+=${-movementX * 0.6}`,
        y: `+=${-movementY * 0.6}`,
      });
      gsap.to("#plane3", {
        x: `+=${-movementX * 0.3}`,
        y: `+=${-movementY * 0.3}`,
      });
      gsap.to("#plane4", {
        x: `+=${-movementX * 0.2}`,
        y: `+=${-movementY * 0.2}`,
      });
    }
  );

  const handleMouseLeave = contextSafe(() => {
    gsap.to(["#plane1", "#plane2", "#plane3"], {
      x: 0,
      y: 0,
    });
  });

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => handleMouseLeave()}
      className="relative h-screen w-full overflow-hidden"
    >
      <h1 className="fixed z-[20] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white italic uppercase text-9xl text-center font-serif">
        Movie Posters
      </h1>
      <div id="plane1" className="w-full h-screen absolute z-[99]">
        <div className="img-1 absolute top-[10%] left-[30%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIp7azhviU4D9nCz0WXFrfgpYdvsalqoZbAjK7"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-2 absolute top-[5%] left-[5%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIQcuD8TvBFky8PrA4sG0oxZwgWuOa6nmMDNtq"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-3 absolute top-[2%] left-[55%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIzWGAmigWjlniH2ph09aBm43rMEvfg71oD8QS"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div id="plane2" className="w-full h-screen absolute z-[99]">
        <div className="img-4 absolute top-[13%] left-[85%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIhpLWXMmFJcRnbHiGP26kKySATetYsmqW7Buj"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-5 absolute top-[28%] left-[70%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIs6Jxe9VEGAd7MSokNcv0q9rimOZ1nR6XThpY"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-6 absolute top-[60%] left-[45%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mICg40hqnqN9PLSVTQD3o8iesIB0Aur1fhxw2c"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div id="plane3" className="w-full h-screen absolute z-[99]">
        <div className="img-7 absolute top-[65%] left-[65%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mICjzTl3nqN9PLSVTQD3o8iesIB0Aur1fhxw2c"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-8 absolute top-[65%] left-[10%] w-[200px] h-[300px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIXjGFX0hCbiw6vUVmS8cMktTy327OZKqxg5FY"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        id="plane4"
        className="w-full h-screen absolute z-[-99] brightness-50"
      >
        <div className="img-7 absolute top-[5%] left-[75%] w-[150px] h-[200px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIJ84gtDrYe1TQPfvIMHK5dVRO3pGWLBZjiw4C"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-8 absolute top-[38%] left-[17%] w-[150px] h-[200px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIFWZSiHBP4JMDi8eSaly5p1qOg97AuNHLmrwC"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-7 absolute top-[65%] left-[80%] w-[150px] h-[200px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIqwfWzfXbRwdGS8lJ6a2BNUxWKgovjT5nXP3e"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-8 absolute top-[50%] left-[33%] w-[150px] h-[200px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIE77ZdBU2gOAWJr7mURZpVejX3xCiSBKGEskw"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
        <div className="img-8 absolute top-[20%] left-[42%] w-[150px] h-[200px]">
          <Image
            src="https://utfs.io/f/A6WPmewQD3mIhhjb8tmFJcRnbHiGP26kKySATetYsmqW7Buj"
            alt="gallery-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
