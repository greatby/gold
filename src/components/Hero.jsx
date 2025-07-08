// components/HeroZoomOut.jsx
import { useEffect, useState } from "react";

const HeroZoomOut = () => {
  const [progress, setProgress] = useState(0); // 0 to 1

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const p = Math.min(scrollY / maxScroll, 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 - 0.4 * progress;
  const opacity = 1 - progress;

  return (
    <div className="w-full bg-white">
      {/* Hero section: sticky + responsive */}
      <div className="sticky top-0 h-screen w-full z-10 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-auto md:h-full lg:h-full"
          style={{
            transform: `scale(${scale})`,
            opacity,
            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
          }}
        >
          <img
            src="/images/AA1kg.png"
            alt="Hero"
            className="w-full h-auto md:h-full lg:h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll spacer */}
      <div className="h-screen" />

      {/* Next content section */}
      <div className="sticky h-screen top-0 z-20 px-4 md:px-8 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[55px] font-semibold text-black">
          THE EASIEST WAY TO BUY AND SELL GOLD AND SILVER IN INDIA. YOU CAN NOW
          BUY AND SELL GOLD AND SILVER BARS ANYTIME EASILY ANYTIME. THE PLATFORM
          YOU ALWAYS WANTED COMING SOON
        </p>
         <p className="text-[55px] font-semibold text-[#ffd700]">
          THE EASIEST WAY TO BUY AND SELL GOLD AND SILVER IN INDIA. YOU CAN NOW
          BUY AND SELL GOLD AND SILVER BARS ANYTIME EASILY ANYTIME. THE PLATFORM
          YOU ALWAYS WANTED COMING SOON
        </p>
         <p className="text-[55px] font-semibold text-[#c0c0c0]">
          THE EASIEST WAY TO BUY AND SELL GOLD AND SILVER IN INDIA. YOU CAN NOW
          BUY AND SELL GOLD AND SILVER BARS ANYTIME EASILY ANYTIME. THE PLATFORM
          YOU ALWAYS WANTED COMING SOON
        </p>
      </div>
    </div>
  );
};

export default HeroZoomOut;
