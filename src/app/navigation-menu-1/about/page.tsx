import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="fixed w-full h-screen">
      <div className="fixed w-full h-full">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mI0TH5pO3OfmLgRZEhpyWHj2Y6VCli4vSN3bnT"
          alt="navigation-menu-img"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default Page;
