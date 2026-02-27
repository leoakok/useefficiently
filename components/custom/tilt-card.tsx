"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltDegree?: number;
}

export default function TiltCard({
  children,
  className,
  tiltDegree = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setRotateX(-y * tiltDegree);
    setRotateY(x * tiltDegree);
  }

  function handleMouseLeave() {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300",
        isHovered && "shadow-xl",
        className
      )}
    >
      <div style={{ transformStyle: "preserve-3d" }}>{children}</div>
    </motion.div>
  );
}
