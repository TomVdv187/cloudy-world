"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Send } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { locations, brand } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
            Reach Out
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cloud-100 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base md:text-lg text-cloud-300/60 max-w-2xl leading-relaxed"
          >
            Whether you&apos;re a stockist, press, or someone who simply wants
            to know more — we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ─── Contact Form + Info ────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <FadeIn>
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                  Send a Message
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-cloud-100 mb-10">
                  We&apos;re Listening
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-cloud-300/40 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800/30 border border-dusty/15 text-cloud-100 font-sans text-sm placeholder:text-cloud-400/30 focus:outline-none focus:border-dusty/40 transition-colors rounded-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-cloud-300/40 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-800/30 border border-dusty/15 text-cloud-100 font-sans text-sm placeholder:text-cloud-400/30 focus:outline-none focus:border-dusty/40 transition-colors rounded-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-cloud-300/40 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-slate-800/30 border border-dusty/15 text-cloud-100 font-sans text-sm focus:outline-none focus:border-dusty/40 transition-colors rounded-sm appearance-none"
                    >
                      <option value="" className="bg-midnight">
                        Select a topic
                      </option>
                      <option value="stockist" className="bg-midnight">
                        Stockist Inquiry
                      </option>
                      <option value="press" className="bg-midnight">
                        Press &amp; Media
                      </option>
                      <option value="collaboration" className="bg-midnight">
                        Collaboration
                      </option>
                      <option value="careers" className="bg-midnight">
                        Careers
                      </option>
                      <option value="general" className="bg-midnight">
                        General Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs tracking-[0.15em] uppercase text-cloud-300/40 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-800/30 border border-dusty/15 text-cloud-100 font-sans text-sm placeholder:text-cloud-400/30 focus:outline-none focus:border-dusty/40 transition-colors rounded-sm resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-3 px-8 py-3 border border-dusty/30 text-cloud-100 font-sans text-sm tracking-[0.2em] uppercase hover:bg-dusty/10 hover:border-dusty/50 transition-all duration-300"
                  >
                    <span>{submitted ? "Message Sent" : "Send Message"}</span>
                    <Send className="w-4 h-4 text-dusty/60 group-hover:text-dusty transition-colors duration-300" />
                  </button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-sans text-sm text-dusty"
                    >
                      Thank you for reaching out. We&apos;ll respond within 48
                      hours.
                    </motion.p>
                  )}
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} direction="left">
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                  General Inquiries
                </p>
                <a
                  href={`mailto:hello@cloudyworld.com`}
                  className="font-serif text-2xl text-cloud-100 hover:text-dusty transition-colors duration-300 mb-8 block"
                >
                  hello@cloudyworld.com
                </a>

                <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3 mt-10">
                  Press &amp; Media
                </p>
                <a
                  href={`mailto:press@cloudyworld.com`}
                  className="font-serif text-xl text-cloud-300/70 hover:text-dusty transition-colors duration-300 block"
                >
                  press@cloudyworld.com
                </a>

                <div className="mt-12 pt-10 border-t border-dusty/10">
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-2">
                    Headquarters
                  </p>
                  <p className="font-sans text-sm text-cloud-300/60">
                    {brand.headquarters}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Locations ──────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-dusty/60 mb-3">
                Visit Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cloud-100">
                Our Locations
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <FadeIn key={loc.city} delay={i * 0.1}>
                <div className="p-8 border border-dusty/10 hover:border-dusty/20 transition-colors duration-500 rounded-sm h-full">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-dusty/50" />
                    <p className="font-sans text-xs tracking-[0.2em] uppercase text-dusty/50">
                      {loc.type}
                    </p>
                  </div>
                  <h3 className="font-serif text-2xl text-cloud-100 mb-6">
                    {loc.city}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-3.5 h-3.5 text-cloud-300/30 mt-0.5 shrink-0" />
                      <p className="font-sans text-sm text-cloud-300/50 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-3.5 h-3.5 text-cloud-300/30 mt-0.5 shrink-0" />
                      <p className="font-sans text-sm text-cloud-300/50">
                        {loc.hours}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-3.5 h-3.5 text-cloud-300/30 mt-0.5 shrink-0" />
                      <a
                        href={`mailto:${loc.email}`}
                        className="font-sans text-sm text-dusty/60 hover:text-dusty transition-colors duration-300"
                      >
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
