
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["WORK", "work"],
  ["VIDEOS", "videos"],
  ["SKILLS", "skills"],
  ["ABOUT", "about"],
  ["SERVICES", "services"],
  ["PROCESS", "process"],
  ["CONTACT", "contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#080808]/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex h-20 items-center justify-between">
          {/* ================= LOGO ================= */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            PARVEZ<span className="lime">.</span>
          </button>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="group relative font-mono text-[11px] tracking-[0.18em] text-white/70 transition-colors duration-300 hover:text-white"
              >
                {label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff35] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-[110] text-white md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE NAVIGATION ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-[#080808] px-7 md:hidden"
          >
            <div className="space-y-5">
              {links.map(([label, id], index) => (
                <motion.button
                  key={id}
                  type="button"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                  onClick={() => scrollToSection(id)}
                  className="block font-display text-5xl font-semibold text-white transition-colors duration-300 hover:text-[#c7ff35]"
                >
                  {label}
                </motion.button>
              ))}
            </div>

            {/* ================= MOBILE FOOTER ================= */}
            <div className="absolute bottom-8 left-7 right-7 flex justify-between font-mono text-xs text-white/40">
              <span>PARVEZ MUSHRAF</span>
              <span>CREATIVE PORTFOLIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

