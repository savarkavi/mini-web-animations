import { Bodoni_Moda_SC } from "next/font/google";

const bodoni = Bodoni_Moda_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div
      className={`${bodoni.className} uppercase text-black p-4 flex flex-col items-center justify-center text-9xl`}
    >
      <div className="overflow-hidden">
        <p className="hero-text">We bielieve</p>
      </div>
      <div className="overflow-hidden">
        <p className="hero-text">Brands shape the</p>
      </div>
      <div className="overflow-hidden">
        <p className="hero-text font-extrabold">Future</p>
      </div>
    </div>
  );
};

export default Hero;
