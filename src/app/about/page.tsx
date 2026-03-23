"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import MarqueeBar from "@/components/MarqueeBar";
import { brand, story, timeline, values, team } from "@/lib/data";

export default function AboutPage() {
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cloud-100 mb-6"
          >
            {story.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-cloud-300/60 max-w-3xl leading-relaxed"
          >
            {story.intro}
          </motion.p>
        </div>
      </section>

      <MarqueeBar />

      {/* ─── Story ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          {story.body.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="font-sans text-base text-cloud-300/60 leading-[1.8] mb-8 last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <div className="mt-12 flex items-center gap-6 text-cloud-300/40">
              <div className="h-px flex-1 bg-dusty/10" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase">
                Est. {brand.founded} &mdash; {brand.headquarters}
              </span>
              <div className="h-px flex-1 bg-dusty/10" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Timeline ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-slate-800/20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                Our Journey
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Timeline
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dusty/15 md:-translate-x-px" />

            {timeline.map((event, i) => (
              <FadeIn
                key={event.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1.5 mt-1.5 rounded-full bg-midnight border-2 border-dusty/40 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <p className="font-serif text-3xl text-dusty/60 mb-1">
                      {event.year}
                    </p>
                    <h3 className="font-serif text-xl text-cloud-100 mb-2">
                      {event.title}
                    </h3>
                    <p className="font-sans text-sm text-cloud-300/50 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values ─────────────────────────────────── */}
      <section id="values" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                What We Stand For
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Our Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="p-8 md:p-10 border border-dusty/10 hover:border-dusty/20 transition-colors duration-500 rounded-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-serif text-3xl text-dusty/30">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-2xl text-cloud-100 pt-1">
                      {value.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-cloud-300/50 leading-relaxed pl-12">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                The People
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Our Team
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group">
                  {/* Avatar placeholder */}
                  <div className="aspect-square rounded-sm bg-gradient-to-br from-slate-800 to-slate-700 mb-5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-6xl text-dusty/10 group-hover:text-dusty/20 transition-colors duration-500">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(139,167,199,0.1) 0%, transparent 70%)",
                      }}
                    />
                  </div>
                  <h3 className="font-serif text-lg text-cloud-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-dusty/60 mb-3">
                    {member.role}
                  </p>
                  <p className="font-sans text-xs text-cloud-300/50 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
