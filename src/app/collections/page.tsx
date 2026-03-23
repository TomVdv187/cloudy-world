"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import MarqueeBar from "@/components/MarqueeBar";
import { collections } from "@/lib/data";

export default function CollectionsPage() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-dusty/60 mb-4"
          >
            Explore Our World
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cloud-100 mb-6"
          >
            Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-cloud-300/60 max-w-2xl leading-relaxed"
          >
            Three atmospheric chapters — each inspired by a different cloud
            formation, each telling its own story of texture, volume, and light.
          </motion.p>
        </div>
      </section>

      <MarqueeBar />

      {/* ─── Collection Sections ────────────────────── */}
      {collections.map((col, idx) => (
        <section
          key={col.slug}
          id={col.slug}
          className="py-24 md:py-32 px-6 relative"
        >
          {idx > 0 && <div className="line-divider mb-24" />}

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: Info */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <FadeIn>
                  <p
                    className="font-sans text-xs tracking-[0.3em] uppercase mb-3"
                    style={{ color: col.accent }}
                  >
                    {col.season} {col.year}
                  </p>
                  <h2 className="font-serif text-5xl md:text-6xl font-light text-cloud-100 mb-4">
                    {col.name}
                  </h2>
                  <p className="font-serif text-xl text-cloud-300/70 italic mb-8">
                    {col.tagline}
                  </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <p className="font-sans text-sm text-cloud-300/60 leading-relaxed mb-6">
                    {col.description}
                  </p>
                  <p className="font-sans text-sm text-cloud-300/50 leading-relaxed mb-10">
                    {col.longDescription}
                  </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-cloud-300/40 mb-4">
                    Key Pieces
                  </p>
                  <div className="space-y-3">
                    {col.pieces.map((piece) => (
                      <div
                        key={piece.name}
                        className="group flex items-center justify-between py-3 border-b border-dusty/10 hover:border-dusty/25 transition-colors duration-300"
                      >
                        <div>
                          <p className="font-sans text-sm text-cloud-100 group-hover:text-dusty transition-colors duration-300">
                            {piece.name}
                          </p>
                          <p className="font-sans text-xs text-cloud-300/40 mt-0.5">
                            {piece.type}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-sm text-cloud-300/60">
                            &euro;{piece.price}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-dusty/0 group-hover:text-dusty/60 transition-all duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right: Visual */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <FadeIn direction={idx % 2 === 0 ? "left" : "right"}>
                  <div
                    className={`aspect-[3/4] rounded-sm bg-gradient-to-br ${col.gradient} relative overflow-hidden`}
                  >
                    {/* Atmospheric elements */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            radial-gradient(ellipse at 30% 20%, ${col.accent}18 0%, transparent 50%),
                            radial-gradient(ellipse at 70% 70%, ${col.accent}12 0%, transparent 40%),
                            radial-gradient(ellipse at 50% 50%, ${col.accent}08 0%, transparent 60%)
                          `,
                        }}
                      />
                    </div>

                    {/* Large letter watermark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-serif text-[16rem] md:text-[20rem] font-light opacity-[0.05] select-none"
                        style={{ color: col.accent }}
                      >
                        {col.name[0]}
                      </span>
                    </div>

                    {/* Collection name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p
                        className="font-serif text-7xl md:text-8xl font-light opacity-10"
                        style={{ color: col.accent }}
                      >
                        {col.name}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
