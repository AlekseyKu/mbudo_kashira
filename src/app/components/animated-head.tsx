// src/components/animated-head.tsx
"use client";

import React from "react";
import { motion, Variants, Transition } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  variants?: Variants;
  transition?: Transition;
}

// Default animation: fade in up
const defaultVariants: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function AnimatedTitle({
  text,
  className = "md:text-3xl text-2xl font-semibold text-white mt-10 mb-4",
  variants = defaultVariants,
  transition = { duration: 0.7, ease: "easeOut" },
}: AnimatedTitleProps) {
  return (
    <motion.h1
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      transition={transition}
    >
      {text}
    </motion.h1>
  );
}
