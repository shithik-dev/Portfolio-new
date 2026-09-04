import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
    >
      <div className="text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mb-5 h-px w-48 origin-left bg-[#c7ff35]"
        />

        <div className="font-display text-3xl font-bold">
          PARVEZ<span className="text-[#c7ff35]">.</span>
        </div>

        <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-white/40">
          CREATIVE PORTFOLIO
        </p>
      </div>
    </motion.div>
  );
}