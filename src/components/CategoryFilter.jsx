import { motion } from "framer-motion";

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="mb-12 overflow-x-auto pb-3 md:mb-16">
      <div className="flex min-w-max gap-2">
        {categories.map((category) => {
          const active = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={`relative overflow-hidden border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 sm:px-6 sm:text-xs ${
                active
                  ? "border-[#c7ff35] text-[#080808]"
                  : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="active-category"
                  className="absolute inset-0 bg-[#c7ff35]"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}