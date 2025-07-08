// components/HeroZoomOut.jsx
import { useEffect, useState } from "react";

const HeroZoomOut = () => {
  const [progress, setProgress] = useState(0);

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
      <div className="relative z-20 px-4 md:px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Gold</h2>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          modi asperiores accusamus tempore nulla dolore eos assumenda at ab,
          dolorem nisi sapiente corporis facere, id, repudiandae ea
          exercitationem. Fugiat ipsam beatae quidem sunt nesciunt itaque, a
          recusandae fuga, quibusdam quas, dolor iste vero iusto minus eveniet
          in quisquam odio adipisci ipsa perferendis vitae temporibus?
          Distinctio reprehenderit exercitationem optio nam amet qui possimus
          voluptatum iusto tempora maxime dolorum earum, deleniti cumque fuga
          repellat ea quis ducimus laboriosam quod. Quisquam quidem error
          aperiam? Placeat fugit aspernatur inventore suscipit quisquam. Dolore
          quas placeat, sint quos vel ipsa alias odit enim, sed tenetur dolores?
        </p>
      </div>
    </div>
  );
};

export default HeroZoomOut;
