'use client';

import React from "react";
import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  scale?: boolean;
  transition?: {
    delay?: number;
    duration?: number;
    ease?: string | number[];
  };
}

// Универсальная функция — принимает transition-объект
const fadeInUp = (transition = {}) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.7,
      ease: "easeOut",
      ...transition,
    },
  },
});

const fadeInScale = (transition = {}) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      duration: 0.7,
      ease: "easeOut",
      ...transition,
    },
  },
});

export default function AnimatedDiv({
  children,
  className,
  scale = false,
  transition = {},
}: AnimatedDivProps) {
  return (
    <motion.div
      // className={`overflow-hidden ${className}`}
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={scale ? fadeInScale(transition) : fadeInUp(transition)}
    >
      {children}
    </motion.div>
  );
}
