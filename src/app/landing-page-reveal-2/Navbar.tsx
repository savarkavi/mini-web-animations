import { Ephesis } from "next/font/google";

const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between text-black p-4 font-serif">
      <p className="nav-item">(Menu)</p>
      <p className={`${ephesis.className} text-5xl nav-item`}>OurRevolution</p>
      <p className="nav-item">(Work*)</p>
    </div>
  );
};

export default Navbar;
