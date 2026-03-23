"use client";

import Link from "next/link";
import { brand, footerLinks, socialLinks } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="relative bg-midnight border-t border-dusty/10">
      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-dusty/10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-cloud-100 mb-2">
                Join the Forecast
              </h3>
              <p className="font-sans text-sm text-cloud-300/60 max-w-md">
                Be the first to know about new collections, events, and the
                weather of fashion.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-72 px-4 py-3 bg-slate-800/50 border border-dusty/20 text-cloud-100 font-sans text-sm placeholder:text-cloud-400/40 focus:outline-none focus:border-dusty/50 transition-colors"
              />
              <button className="px-6 py-3 bg-dusty/20 border border-dusty/20 border-l-0 text-dusty font-sans text-sm tracking-[0.15em] uppercase hover:bg-dusty/30 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-lg tracking-wide text-cloud-100">
                {brand.name}
              </span>
            </Link>
            <p className="font-sans text-xs text-cloud-300/50 leading-relaxed mb-6 max-w-[200px]">
              {brand.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs text-cloud-300/50 hover:text-dusty transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Brand Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cloud-300/40 mb-4">
              Brand
            </h4>
            <ul className="space-y-3">
              {footerLinks.brand.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cloud-300/60 hover:text-cloud-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cloud-300/40 mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cloud-300/60 hover:text-cloud-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cloud-300/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-cloud-300/60 hover:text-cloud-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dusty/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cloud-300/30">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cloud-300/30">
            Crafted with atmosphere in Edegem, Belgium
          </p>
        </div>
      </div>
    </footer>
  );
}
