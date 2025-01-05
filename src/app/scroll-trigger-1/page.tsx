import React from "react";
import ImageContainer from "./ImageContainer";
import MaskText from "./MaskText";
import MarqueeText from "./MarqueeText";

const Page = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <MarqueeText isLeft={true} />
      {/* <MarqueeText isLeft={false} /> */}
      <ImageContainer />
      <MaskText />
    </div>
  );
};

export default Page;
