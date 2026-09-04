import { motion } from "framer-motion";

export default function TransitionSection() {
  return (
    <section
      id="transition"
      className="relative overflow-hidden bg-[#080808] py-32 md:py-44 lg:py-56"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2 }}
          className="border-y border-white/10"
        >
          {/* GRAPHIC DESIGN */}
          <div className="border-b border-white/10 py-10 sm:py-14 md:py-20">
            <h2
              className="font-display text-[13vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-white"
            >
              GRAPHIC
              <br />
              <span className="text-white/20">DESIGN</span>
            </h2>
          </div>

          {/* VIDEO EDITING */}
          <div className="py-10 sm:py-14 md:py-20">
            <h2
              className="font-display text-[13vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-white"
            >
              VIDEO
              <br />
              <span className="text-white/20">EDITING</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}