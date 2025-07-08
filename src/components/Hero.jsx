// import { useEffect, useState } from "react";

// const HeroZoomOut = () => {
//   const [progress, setProgress] = useState(0); // 0 to 1

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = window.innerHeight;
//       const p = Math.min(scrollY / maxScroll, 1);
//       setProgress(p);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scale = 1 - 0.4 * progress;
//   const imageOpacity = 1 - progress;
//  const textOpacity = progress >= 0.98 ? 1 : 0;


//   return (
//     <div className="w-full bg-white">
//       {/* Hero Section */}
//       <div className="relative h-screen w-full overflow-hidden">
//         <div className="sticky top-0 h-screen w-full z-10">
//           <div
//             className="absolute inset-0 w-full h-full transition-all duration-200 ease-out"
//             style={{
//               transform: `scale(${scale})`,
//               opacity: imageOpacity,
//             }}
//           >
//             {/* Mobile Image */}
//             <img
//               src="/images/AA3D_Vertical.png"
//               alt="Hero Vertical"
//               className="block md:hidden w-full h-full object-cover"
//             />
//             {/* Desktop Image */}
//             <img
//               src="/images/AA1kg.png"
//               alt="Hero Horizontal"
//               className="hidden md:block w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Text content appears only after image fully fades out */}
//       <div
//         className="relative z-0 px-4 md:px-8 py-20 max-w-4xl mx-auto text-center transition-opacity duration-700"
//         style={{
//           opacity: textOpacity,
//           pointerEvents: textOpacity ? "auto" : "none",
//         }}
//       >
//         <p className="text-[32px] md:text-[55px] font-semibold text-black leading-tight">
//           The Easiest Way to Buy & Sell{" "}
//           <span className="text-[#ffd700]">Gold</span> and{" "}
//           <span className="text-[#c0c0c0]">Silver</span> in India. <br />
//           Your trusted gateway to real{" "}
//           <span className="text-[#ffd700]">gold</span> and{" "}
//           <span className="text-[#c0c0c0]">silver</span> bars — now just a tap
//           away. <br />
//           Buy and sell with confidence, 24/7. No hassle. No delays. Just pure
//           metal. <br />
//           The Platform Investors Have Been Waiting For. Smart. Secure. Serious.{" "}
//           <br />
//           <span className="italic text-gray-600">Coming Soon</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroZoomOut;


// import { useEffect, useState } from "react";

// const HeroZoomIn = () => {
//   const [progress, setProgress] = useState(0); // scroll progress from 0 to 1

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = window.innerHeight; // 100vh
//       const p = Math.min(scrollY / maxScroll, 1);
//       setProgress(p);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Zoom from 0.6 to 1.0 scale
//   const scale = 0.6 + 0.4 * progress;

//   return (
//     <div className="w-full bg-white">
//       {/* Outer container: 200vh to create a scroll zone */}
//       <div className="h-[200vh] relative">
//         {/* Sticky image section: zooms during first 100vh */}
//         <div className="sticky top-0 h-screen w-full z-10 overflow-hidden flex items-center justify-center">
//           <div
//             className="w-full h-full transition-all duration-200 ease-out"
//             style={{
//               transform: `scale(${scale})`,
//             }}
//           >
//             {/* Mobile Image */}
//             <img
//               src="/images/AA3D_Vertical.png"
//               alt="Hero Vertical"
//               className="block md:hidden w-full h-full object-cover"
//             />
//             {/* Desktop Image */}
//             <img
//               src="/images/AA1kg.png"
//               alt="Hero Horizontal"
//               className="hidden md:block w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Text content scrolls normally AFTER image zooms in */}
//       <div className="px-4 md:px-8 py-20 max-w-4xl mx-auto text-center">
//         <p className="text-[32px] md:text-[55px] font-semibold text-black leading-tight">
//           The Easiest Way to Buy & Sell{" "}
//           <span className="text-[#ffd700]">Gold</span> and{" "}
//           <span className="text-[#c0c0c0]">Silver</span> in India. <br />
//           Your trusted gateway to real{" "}
//           <span className="text-[#ffd700]">gold</span> and{" "}
//           <span className="text-[#c0c0c0]">silver</span> bars — now just a tap
//           away. <br />
//           Buy and sell with confidence, 24/7. No hassle. No delays. Just pure
//           metal. <br />
//           The Platform Investors Have Been Waiting For. Smart. Secure. Serious.{" "}
//           <br />
//           <span className="italic text-gray-600">Coming Soon</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroZoomIn;

// import { useEffect, useState } from "react";

// const HeroZoomOut = () => {
//   const [progress, setProgress] = useState(0); // 0 to 1

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = window.innerHeight;
//       const p = Math.min(scrollY / maxScroll, 1); // 0 to 1
//       setProgress(p);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Image scales down from 1 → 0.6
//   const scale = 1 - 0.4 * progress;
//   const imageOpacity = 1 - progress;

//   return (
//     <div className="w-full bg-white">
//       {/* Outer container: 200vh to create scroll-lock effect */}
//       <div className="h-[200vh] relative">
//         {/* Sticky zoom-out image section */}
//         <div className="sticky top-0 h-screen w-full z-10 overflow-hidden flex items-center justify-center">
//           <div
//             className="w-full h-full transition-all duration-200 ease-out"
//             style={{
//               transform: `scale(${scale})`,
//               opacity: imageOpacity,
//             }}
//           >
//             {/* Mobile Image */}
//             <img
//               src="/images/AA3D_Vertical.png"
//               alt="Hero Vertical"
//               className="block md:hidden w-full h-full object-cover"
//             />
//             {/* Desktop Image */}
//             <img
//               src="/images/AA1kg.png"
//               alt="Hero Horizontal"
//               className="hidden md:block w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content appears after image has zoomed out and faded */}
//       <div className="px-4 md:px-8 py-20 max-w-4xl mx-auto text-center">
//         <p className="text-[32px] md:text-[55px] font-semibold text-black leading-tight">
//           The Easiest Way to Buy & Sell{" "}
//           <span className="text-[#ffd700]">Gold</span> and{" "}
//           <span className="text-[#c0c0c0]">Silver</span> in India. <br />
//           Your trusted gateway to real{" "}
//           <span className="text-[#ffd700]">gold</span> and{" "}
//           <span className="text-[#c0c0c0]">silver</span> bars — now just a tap
//           away. <br />
//           Buy and sell with confidence, 24/7. No hassle. No delays. Just pure
//           metal. <br />
//           The Platform Investors Have Been Waiting For. Smart. Secure. Serious.{" "}
//           <br />
//           <span className="italic text-gray-600">Coming Soon</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroZoomOut;
import { useEffect, useState, useRef } from "react";

const HeroZoomIn = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight;
          const p = Math.min(scrollY / maxScroll, 1);
          setProgress(p);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 0.6 + 0.4 * progress;
  const imageOpacity = 1 - progress;
  const textOpacity = progress >= 0.98 ? 1 : 0;

  return (
    <div className="w-full bg-white">
      <div className="h-[200vh] relative">
        <div className="sticky top-0 h-screen w-full z-10 flex items-center justify-center overflow-hidden">
          {/* Zoom Image */}
          <div
            className="absolute inset-0 will-change-transform transition-transform duration-75 ease-out"
            style={{
              transform: `scale(${scale})`,
              opacity: imageOpacity,
              zIndex: 1,
            }}
          >
            {/* Mobile Image */}
            <img
              src="/images/AA3D_Vertical.png"
              alt="Hero Vertical"
              className="block md:hidden w-full h-full object-cover"
              draggable={false}
            />
            {/* Desktop Image */}
            <img
              src="/images/AA1kg.png"
              alt="Hero Horizontal"
              className="hidden md:block w-full h-full object-cover"
              draggable={false}
            />
          </div>

          {/* Text Content */}
          <div
            className="absolute inset-0 flex items-center justify-center px-4 md:px-8 text-center transition-opacity duration-500 ease-in will-change-opacity"
            style={{
              opacity: textOpacity,
              zIndex: 2,
              pointerEvents: textOpacity ? "auto" : "none",
            }}
          >
            <p className="text-[32px] md:text-[55px] font-semibold text-black leading-tight">
              The Easiest Way to Buy & Sell{" "}
              <span className="text-[#ffd700]">Gold</span> and{" "}
              <span className="text-[#c0c0c0]">Silver</span> in India. <br />
              Your trusted gateway to real{" "}
              <span className="text-[#ffd700]">gold</span> and{" "}
              <span className="text-[#c0c0c0]">silver</span> bars — now just a
              tap away. <br />
              Buy and sell with confidence, 24/7. No hassle. No delays. Just
              pure metal. <br />
              The Platform Investors Have Been Waiting For. Smart. Secure.
              Serious. <br />
              <span className="italic text-gray-600">Coming Soon</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroZoomIn;

