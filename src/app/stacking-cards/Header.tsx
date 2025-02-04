import { Delius_Unicase } from "next/font/google";

const delius = Delius_Unicase({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-8 fixed top-0 text-black z-[999]">
      <button className="bg-white px-4 py-2 rounded-full text-lg">
        Let&apos;s Work
      </button>
      <h2 className={`${delius.className} uppercase font-bold text-4xl`}>
        Serious.Business
      </h2>
      <button className="bg-white px-4 py-2 rounded-full text-lg">Menu</button>
    </div>
  );
};

export default Header;
