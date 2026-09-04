import { motion } from "framer-motion";

const items = [
  "GRAPHIC DESIGN",
  "BRANDING",
  "MOTION",
  "VIDEO EDITING",
  "VISUAL STORYTELLING",
  "CREATIVE DIRECTION",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        {[...items, ...items].map(
          (item, index) => (
            <div
              key={index}
              className="flex items-center"
            >
              <span className="px-6 font-display text-2xl font-semibold tracking-tight sm:text-4xl">
                {item}
              </span>

              <span className="text-[#c7ff35]">
                ×
              </span>
            </div>
          )
        )}
      </motion.div>
    </section>
  );
}