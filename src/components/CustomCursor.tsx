"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 20, stiffness: 150 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      >
        <div className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-cloud-100" />
      </motion.div>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ scale: { duration: 0.3 }, opacity: { duration: 0.2 } }}
      >
        <div className="w-8 h-8 -ml-4 -mt-4 rounded-full border border-dusty/50" />
      </motion.div>
    </>
  );
}
