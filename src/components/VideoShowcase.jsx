
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import { videos } from "../data/videos";

export default function VideoShowcase() {
  const videoProjects = videos.filter(
    (video) => video.category === "Video Editing"
  );

  return (
    <section
      id="video-editing"
      className="relative overflow-hidden bg-[#080808] py-28 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#c7ff35]" />

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              VIDEO EDITING
            </span>
          </div>

          <h2 className="font-display text-[15vw] font-black uppercase leading-[0.78] tracking-[-0.07em] text-white sm:text-[12vw] md:text-[11vw] lg:text-[10vw]">
            MOVING
            <br />
            <span className="text-white/25">IMAGES.</span>
          </h2>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
            Editing is not just cutting clips. It is rhythm, emotion and
            storytelling.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-24 md:space-y-32">

          {/* VIDEO PROJECT 01 */}
          {videoProjects[0] && (
            <motion.article
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9 }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c7ff35]">
                  {videoProjects[0].label}
                </span>

                <span className="font-mono text-xs text-white/30">
                  01 / 02
                </span>
              </div>

              <VideoCard video={videoProjects[0]} />

              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-white md:text-4xl">
                    {videoProjects[0].title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/40 md:text-base">
                    {videoProjects[0].description}
                  </p>
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/25">
                  {videoProjects[0].category}
                </span>
              </div>
            </motion.article>
          )}

          {/* VIDEO PROJECT 02 */}
          {videoProjects[1] && (
            <motion.article
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9 }}
              className="ml-auto w-full md:w-[78%]"
            >
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#c7ff35]">
                  {videoProjects[1].label}
                </span>

                <span className="font-mono text-xs text-white/30">
                  02 / 02
                </span>
              </div>

              <VideoCard video={videoProjects[1]} />

              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-[-0.03em] text-white md:text-4xl">
                    {videoProjects[1].title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/40 md:text-base">
                    {videoProjects[1].description}
                  </p>
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/25">
                  {videoProjects[1].category}
                </span>
              </div>
            </motion.article>
          )}

        </div>
      </div>
    </section>
  );
}

