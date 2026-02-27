import Link from "next/link";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function StoryCard({
  title,
  description,
  href,
  className,
}: StoryCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6">
        <h3 className="font-medium text-lg group-hover:underline underline-offset-4 decoration-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          {description}
        </p>
        <span className="text-sm font-medium mt-4 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
          Read story&ensp;&rarr;
        </span>
      </div>
    </Link>
  );
}
