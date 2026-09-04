
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080808] py-28 text-white sm:py-36 md:py-44 lg:py-52"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-white/10 pb-8 md:mb-24"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#c7ff35]">
            09 — SKILLS / TOOLKIT
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              SKILLS
              <br />
              <span className="text-white/20">&amp; TOOLS.</span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/40 md:pb-2">
              A combination of design thinking, visual storytelling and
              creative software used to turn ideas into finished work.
            </p>
          </div>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="border border-white/10 p-6 sm:p-8 md:p-10"
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-[#c7ff35]">
                  {group.number}
                </span>

                <ArrowUpRight className="h-5 w-5 text-white/20" />
              </div>

              <h3 className="mb-8 font-display text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl md:text-5xl">
                {group.title}
              </h3>

              <div className="border-t border-white/10">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="group flex items-center justify-between border-b border-white/10 py-4"
                  >
                    <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                      {skill}
                    </span>

                    <span className="font-mono text-[9px] text-white/20">
                      0{skillIndex + 1}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-32"
        >
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
                SOFTWARE
              </p>

              <h3 className="font-display text-3xl font-semibold uppercase tracking-[-0.04em] sm:text-4xl md:text-5xl">
                TOOLKIT
              </h3>
            </div>

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
              {profile.tools.length} TOOLS
            </span>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {profile.tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative min-h-[180px] border-b border-r border-white/10 p-5 transition-colors duration-500 hover:bg-white/[0.04] sm:min-h-[210px] sm:p-6"
              >
                {/* Number */}
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/20">
                  0{index + 1}
                </span>

                {/* Tool Mark */}
                <div className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/15 font-display text-sm font-bold text-white/70 transition-all duration-500 group-hover:border-[#c7ff35] group-hover:bg-[#c7ff35] group-hover:text-black sm:left-6">
                  {tool.shortName}
                </div>

                {/* Tool Name */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-xs uppercase leading-5 tracking-wide text-white/50 transition-colors duration-300 group-hover:text-white">
                    {tool.name}
                  </p>
                </div>

                {/* Hover Arrow */}
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c7ff35] sm:right-6 sm:top-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-white/10 pt-8 md:mt-24"
        >
          <p className="max-w-4xl font-display text-2xl uppercase leading-tight tracking-[-0.03em] text-white/30 sm:text-3xl md:text-5xl">
            TOOLS ARE JUST THE MEDIUM.
            <span className="text-white">
              {" "}
              THE IDEA IS WHAT MATTERS.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
