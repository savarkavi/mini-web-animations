import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <div>
        <h1 className="text-7xl uppercase font-bold">web animations</h1>
        <div className="mt-4 font-serif flex flex-col gap-2 items-start">
          <Link href="/navigation-menu-1">Navigation menu 1</Link>
          <Link href="/scroll-trigger-1">Scroll Trigger 1</Link>
          <Link href="/text-effects">Text Effects</Link>
          <Link href="/floating-gallery">Floating Gallery</Link>
          <Link href="/landing-page-reveal">Landing Page Reveal</Link>
          <Link href="/stacking-cards">Stacking Cards</Link>
          <Link href="/landing-page-reveal-2">Landing Page Reveal 2</Link>
        </div>
      </div>
    </div>
  );
}
