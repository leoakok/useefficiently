"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FocusCardItem {
  title: string;
  description: string;
  image: string;
  href: string;
  metric?: string;
  metricLabel?: string;
}

interface FocusCardsProps {
  items: FocusCardItem[];
  className?: string;
}

export default function FocusCards({ items, className }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          onMouseEnter={() => setHovered(i)}
          className={cn(
            "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300",
            hovered !== null && hovered !== i && "blur-[2px] opacity-40 scale-[0.98]",
            hovered === i && "shadow-xl scale-[1.02]"
          )}
        >
          <div className="h-36 flex items-center justify-center p-8 bg-secondary/30">
            <Image
              src={item.image}
              width={140}
              height={50}
              alt={item.title}
              className="w-auto h-10 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="font-medium text-lg">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-3">
                {item.description}
              </p>
            )}
            {item.metric && (
              <div className="mt-4 pt-3 border-t border-border flex items-baseline gap-2">
                <span className="text-xl font-medium">{item.metric}</span>
                <span className="text-xs text-muted-foreground">
                  {item.metricLabel}
                </span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
