import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.06, 0.4),
      }}
      className={`group relative cursor-pointer ${
        project.size === "large"
          ? "md:col-span-2"
          : project.size === "small"
            ? "md:col-span-1"
            : "md:col-span-1"
      }`}
      onClick={() => onClick(project)}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-[#101010] ${
          project.size === "portrait"
            ? "aspect-[4/5]"
            : project.size === "landscape"
              ? "aspect-[16/10]"
              : project.size === "small"
                ? "aspect-[4/3]"
                : "aspect-[16/10]"
        }`}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          loading={index < 4 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark hover layer */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/55" />

        {/* Top metadata */}
        <div className="absolute left-5 top-5 flex w-[calc(100%-40px)] items-start justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/70">
            {String(project.id).padStart(2, "0")}
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/0 transition-colors duration-300 group-hover:text-[#c7ff35]">
            {project.categoryLabel}
          </span>
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-[#c7ff35] text-[#080808]"
          >
            <div className="text-center">
              <ArrowUpRight className="mx-auto mb-1 h-5 w-5" />
              <span className="font-mono text-[9px] font-bold tracking-[0.15em]">
                VIEW
                <br />
                PROJECT
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom title */}
        <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7ff35]">
            {project.categoryLabel}
          </p>

          <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[-0.03em] text-white md:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Mobile metadata */}
      <div className="mt-4 md:hidden">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7ff35]">
          {project.categoryLabel}
        </p>

        <h3 className="mt-1 font-display text-xl uppercase text-white">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}