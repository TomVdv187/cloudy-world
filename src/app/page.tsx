"use client";

import { motion } from "framer-motion";
import { ArrowDown, Lightbulb, Leaf, Scissors, Users } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CollectionCard from "@/components/CollectionCard";
import MarqueeBar from "@/components/MarqueeBar";
import {
  brand,
  collections,
  dnaPillars,
  sustainabilityStats,
} from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Leaf: <Leaf className="w-6 h-6" />,
  Scissors: <Scissors className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
};

export default function Home() {
  return (
    <>
      {/* ─── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Subtle animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle, #8BA7C7 0%, transparent 70%)",
              top: "10%",
              left: "60%",
            }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{
              background:
                "radial-gradient(circle, #8BA7C7 0%, transparent 70%)",
              bottom: "20%",
              left: "10%",
            }}
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-dusty/70 mb-6"
          >
            Copenhagen &mdash; Est. {brand.founded}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide mb-6"
          >
            <span className="text-gradient">{brand.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-cloud-300/60 font-light tracking-wide mb-12"
          >
            {brand.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              href="/collections"
              className="px-8 py-3 border border-dusty/30 text-cloud-100 font-sans text-sm tracking-[0.2em] uppercase hover:bg-dusty/10 hover:border-dusty/50 transition-all duration-300"
            >
              Explore Collections
            </Link>
            <Link
              href="/about"
              className="font-sans text-sm tracking-[0.15em] uppercase text-cloud-300/60 hover:text-dusty transition-colors duration-300"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-dusty/40" />
        </motion.div>
      </section>

      {/* ─── Marquee ────────────────────────────────────── */}
      <MarqueeBar />

      {/* ─── Collections Preview ────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                  Current Season
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                  Collections
                </h2>
              </div>
              <Link
                href="/collections"
                className="mt-4 md:mt-0 font-sans text-sm tracking-[0.15em] uppercase text-dusty/60 hover:text-dusty transition-colors duration-300"
              >
                View All &rarr;
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {collections.map((col, i) => (
              <CollectionCard key={col.slug} collection={col} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Manifesto ──────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="line-divider mb-24" />
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-8">
              Our Manifesto
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-cloud-200 leading-relaxed">
              &ldquo;{brand.manifesto}&rdquo;
            </blockquote>
          </FadeIn>
        </div>
        <div className="line-divider mt-24" />
      </section>

      {/* ─── DNA Pillars ────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                What Drives Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Our DNA
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dnaPillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div className="group p-8 border border-dusty/10 hover:border-dusty/25 transition-colors duration-500 rounded-sm">
                  <div className="text-dusty/50 mb-6 group-hover:text-dusty transition-colors duration-500">
                    {iconMap[pillar.icon]}
                  </div>
                  <h3 className="font-serif text-xl text-cloud-100 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-cloud-300/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sustainability Stats ───────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                Our Impact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Sustainability in Numbers
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <motion.p
                    className="font-serif text-5xl md:text-6xl font-light text-dusty mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="font-sans text-sm tracking-[0.15em] uppercase text-cloud-100 mb-1">
                    {stat.label}
                  </p>
                  <p className="font-sans text-xs text-cloud-300/50">
                    {stat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-6">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cloud-100 mb-6">
              Dress Like the Sky
            </h2>
            <p className="font-sans text-base text-cloud-300/60 mb-10 max-w-lg mx-auto leading-relaxed">
              Discover garments born from atmosphere — crafted with care,
              designed to endure, and made for those who move through the world
              with quiet intention.
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Link
                href="/collections"
                className="px-10 py-4 bg-dusty/15 border border-dusty/30 text-cloud-100 font-sans text-sm tracking-[0.2em] uppercase hover:bg-dusty/25 transition-all duration-300"
              >
                Shop Collections
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-dusty/15 text-cloud-300/60 font-sans text-sm tracking-[0.2em] uppercase hover:text-cloud-100 hover:border-dusty/30 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
