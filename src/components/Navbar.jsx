import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["WORK", "work"],
  ["VIDEOS", "videos"],
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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/85 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="font-display text-xl font-bold tracking-tight"
          >
            PARVEZ<span className="lime">.</span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group relative font-mono text-[11px] tracking-[0.18em] text-white/70 transition hover:text-white"
              >
                {label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#c7ff35] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-[#080808] px-7 md:hidden"
          >
            <div className="space-y-5">
              {links.map(([label, id], index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  onClick={() => scrollToSection(id)}
                  className="block font-display text-5xl font-semibold"
                >
                  {label}
                </motion.button>
              ))}
            </div>

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