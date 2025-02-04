"use client";

import Image from "next/image";

const Revealer = () => {
  return (
    <div
      className="revealer bg-black w-screen h-screen overflow-hidden absolute"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="images-container w-[150vw] flex gap-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIfVtqsczmhnYLDHqK9iE6F8Q5r2P3GJCu4lV7"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIGIAx8a9pyHes9h1JCnRwi8jZGYPIv4zTAUSM"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIHxRSeLjbTCiUrVdI3ZFAc8L7PmQ2XqlHsW9y"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIdVm5UhNSLAjsBTCZMwO4Egv9Iz1xFhXcqGNr"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIpU33LFJiU4D9nCz0WXFrfgpYdvsalqoZbAjK"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIfVtqsczmhnYLDHqK9iE6F8Q5r2P3GJCu4lV7"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
        <div
          className="overflow-hidden relative h-[400px] flex-1 img-container"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <Image
            src="https://mnje44qvzv.ufs.sh/f/A6WPmewQD3mIGIAx8a9pyHes9h1JCnRwi8jZGYPIv4zTAUSM"
            alt="landing-reveal-image"
            fill
            className="img object-cover invisible"
          />
        </div>
      </div>
    </div>
  );
};

export default Revealer;
