import Image from "next/image";
import React from "react";

const Photos = () => {
  return (
    <div className="images w-full h-full relative">
      <div className="img img-1 absolute top-0 left-0 w-full h-full scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mIHkM4D5jbTCiUrVdI3ZFAc8L7PmQ2XqlHsW9y"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mIJbEEyLrYe1TQPfvIMHK5dVRO3pGWLBZjiw4C"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mINn0lLJIMJ2OtHUYDxVCRhIiP51uQswLnfKEg"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mItZK2FTdWc17jOrXLbCY29uapzin3d58FgohJ"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mILoVefGJR2nDgtwT90kWI1A5PcVYor8jXxhfU"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img main absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mIhEWX85mFJcRnbHiGP26kKySATetYsmqW7Buj"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img main absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mIWthwOWLASRBogxGMwZ9u7TypDzcbdEv8WKhH"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="img main absolute top-0 left-0 w-full h-full opacity-0 scale-125">
        <Image
          src="https://utfs.io/f/A6WPmewQD3mISe9mGnDvbos2Pp6ZutUYHQE0dIXOTF3kcz5f"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Photos;
