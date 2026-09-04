
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section
      id="process"
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
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#c7ff35]">
                • PROCESS
              </p>

              <h2 className="font-display text-5xl font-bold uppercase leading-[0.82] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                HOW I
                <br />
                <span className="text-white/20">WORK.</span>
              </h2>
            </div>

            <div className="max-w-sm md:pb-2">
              <p className="text-sm leading-7 text-white/40">
                A structured creative process keeps the work focused while
                leaving enough space for ideas to evolve.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-[78px] hidden h-px bg-white/10 lg:block" />

          <div className="grid lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-white/10 lg:border-b-0 lg:border-r lg:border-white/10 lg:first:border-l"
              >
                <div className="relative flex min-h-[430px] flex-col p-6 sm:p-8 lg:min-h-[520px] lg:p-8 xl:p-10">

                  {/* Number */}
                  <div className="relative z-10 mb-14 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#c7ff35]">
                      {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#080808] transition-all duration-500 group-hover:border-[#c7ff35] group-hover:bg-[#c7ff35] group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Large Step Number */}
                  <div className="pointer-events-none absolute right-5 top-24 font-display text-[7rem] font-bold leading-none tracking-[-0.08em] text-white/[0.035] transition-colors duration-500 group-hover:text-[#c7ff35]/[0.08]">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 mt-auto font-display text-4xl font-semibold uppercase leading-none tracking-[-0.05em] transition-colors duration-500 group-hover:text-[#c7ff35] sm:text-5xl lg:text-4xl xl:text-5xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-5 max-w-sm text-sm leading-7 text-white/40 transition-colors duration-500 group-hover:text-white/60">
                    {step.description}
                  </p>

                  {/* Keywords */}
                  <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                    {step.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="border border-white/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/25 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/50"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-8 border-t border-white/10 pt-8 md:mt-28 md:grid-cols-2 md:items-end"
        >
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
              <ArrowDownRight className="h-4 w-4 text-[#c7ff35]" />
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              FROM IDEA TO FINAL OUTPUT
            </p>
          </div>

          <p className="max-w-2xl font-display text-2xl uppercase leading-tight tracking-[-0.03em] text-white/30 md:ml-auto md:text-right md:text-4xl">
            EVERY DETAIL HAS A PURPOSE.
            <span className="text-white"> EVERY FRAME TELLS A STORY.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

