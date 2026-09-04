
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { clientLogos, testimonials } from "../data/testimonials";

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;
  const hasClientLogos = clientLogos.length > 0;

  return (
    <section
      id="testimonials"
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
                11 — TESTIMONIALS
              </p>

              <h2 className="font-display text-5xl font-bold uppercase leading-[0.82] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                WORDS
                <br />
                <span className="text-white/20">FROM CLIENTS.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40 md:pb-2">
              Real feedback from real collaborations. Every testimonial is
              added directly from the client.
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        {hasTestimonials ? (
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group relative bg-[#080808] p-7 sm:p-10 md:p-12 lg:p-14"
              >
                {/* Quote Icon */}
                <div className="mb-12 flex items-start justify-between">
                  <Quote className="h-8 w-8 text-[#c7ff35]" />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="max-w-3xl font-display text-2xl font-medium leading-[1.15] tracking-[-0.025em] text-white/80 sm:text-3xl md:text-4xl">
                  “{testimonial.quote}”
                </blockquote>

                {/* Client */}
                <div className="mt-12 border-t border-white/10 pt-6">
                  <p className="font-display text-lg font-semibold uppercase tracking-[-0.02em]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    {testimonial.role}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                      {testimonial.company}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#c7ff35]">
                      {testimonial.project}
                    </span>
                  </div>
                </div>

                {/* Decorative Arrow */}
                <ArrowUpRight className="absolute right-7 top-7 h-5 w-5 text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c7ff35] sm:right-10 sm:top-10" />
              </motion.article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-white/10 p-8 sm:p-12 md:p-20"
          >
            <div className="absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              TESTIMONIALS / 01
            </div>

            <Quote className="mb-10 h-10 w-10 text-[#c7ff35]" />

            <h3 className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
              REAL WORK.
              <br />
              <span className="text-white/20">REAL FEEDBACK.</span>
            </h3>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Client testimonials will appear here as real project feedback
              becomes available.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 border border-white/10 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              TESTIMONIALS COMING SOON
            </div>
          </motion.div>
        )}

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 md:mt-28"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              SELECTED CLIENTS
            </p>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              COLLABORATIONS
            </span>
          </div>

          {hasClientLogos ? (
            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-5">
              {clientLogos.map((client) => (
                <div
                  key={client.id}
                  className="flex min-h-[120px] items-center justify-center border-b border-r border-white/10 p-8"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 max-w-[140px] object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-white/10 px-6 py-10 text-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/20">
                CLIENT LOGOS WILL APPEAR HERE
              </p>
            </div>
          )}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-8 md:mt-28"
        >
          <p className="max-w-5xl font-display text-2xl uppercase leading-tight tracking-[-0.03em] text-white/20 sm:text-3xl md:text-5xl">
            GOOD DESIGN GETS ATTENTION.
            <span className="text-white">
              {" "}
              GREAT COLLABORATION BUILDS TRUST.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
