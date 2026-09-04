import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-[#c7ff35]"
    />
  );
}