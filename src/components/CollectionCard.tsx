"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Collection } from "@/lib/data";

interface CollectionCardProps {
  collection: Collection;
  index: number;
}

export default function CollectionCard({
  collection,
  index,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/collections#${collection.slug}`} className="group block">
        <div
          className={`relative overflow-hidden rounded-sm aspect-[3/4] bg-gradient-to-br ${collection.gradient}`}
        >
          {/* Atmospheric overlay pattern */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 20%, ${collection.accent}22 0%, transparent 50%),
                                  radial-gradient(circle at 70% 60%, ${collection.accent}15 0%, transparent 40%),
                                  radial-gradient(circle at 50% 80%, ${collection.accent}10 0%, transparent 60%)`,
              }}
            />
          </div>

          {/* Collection name watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-serif text-[8rem] md:text-[10rem] font-light opacity-[0.06] select-none tracking-wider"
              style={{ color: collection.accent }}
            >
              {collection.name[0]}
            </span>
          </div>

          {/* Hover reveal line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${collection.accent}, transparent)`,
            }}
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 card-gradient flex flex-col justify-end p-6 md:p-8">
            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
              <p
                className="text-xs tracking-[0.25em] uppercase font-sans mb-2"
                style={{ color: collection.accent }}
              >
                {collection.season} {collection.year}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-cloud-100 mb-2">
                {collection.name}
              </h3>
              <p className="text-sm text-cloud-300/70 font-sans leading-relaxed max-w-xs">
                {collection.tagline}
              </p>
            </div>

            {/* Arrow icon on hover */}
            <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
              <div className="flex items-center gap-2 text-dusty text-sm font-sans">
                <span>Explore</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
