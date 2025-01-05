import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="fixed w-full h-full">
      <Image
        src="https://utfs.io/f/A6WPmewQD3mIUHFYEcS0HFxRgZ0JcC6ltEL4vjWs5n1QOGwN"
        alt="navigation-menu-img"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Page;
