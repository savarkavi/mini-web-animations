import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="fixed w-full h-full">
      <Image
        src="https://utfs.io/f/A6WPmewQD3mIpUE15CqiU4D9nCz0WXFrfgpYdvsalqoZbAjK"
        alt="navigation-menu-img"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Page;
