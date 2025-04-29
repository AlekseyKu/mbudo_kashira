import React from "react";
import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export default function AnimatedDiv({ children, className, delay = 0, scale = false }: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={scale ? fadeInScale : fadeInUp}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}