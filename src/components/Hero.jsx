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
      {/* Hero Image Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="sticky top-0 h-screen w-full z-10">
          <div
            className="absolute inset-0 w-full h-full transition-all duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              opacity,
            }}
          >
            {/* Mobile (Vertical Image) */}
            <img
              src="/images/AA3D_Vertical.png"
              alt="Hero Vertical"
              className="block md:hidden w-full h-full object-contain"
            />

            {/* Tablet+ (Horizontal Image) */}
            <img
              src="/images/AA1kg.png"
              alt="Hero Horizontal"
              className="hidden md:block w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Next content section (not sticky!) */}
      <div className="relative z-0 px-4 md:px-8 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[32px] md:text-[55px] font-semibold text-black leading-tight">
          The Easiest Way to Buy & Sell{" "}
          <span className="text-[#ffd700]">Gold</span> and{" "}
          <span className="text-[#c0c0c0]">Silver</span> in India. <br />
          Your trusted gateway to real{" "}
          <span className="text-[#ffd700]">gold</span> and{" "}
          <span className="text-[#c0c0c0]">silver</span> bars — now just a tap
          away. <br />
          Buy and sell with confidence, 24/7. No hassle. No delays. Just pure
          metal. <br />
          The Platform Investors Have Been Waiting For. Smart. Secure. Serious.{" "}
          <br />
          <span className="italic text-gray-600">Coming Soon</span>
        </p>
      </div>
    </div>
  );
};

export default HeroZoomOut;
