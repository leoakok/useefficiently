import Link from "next/link";
import { cn } from "@/lib/utils";

type IllustrationVariant = "nodes" | "waves" | "blocks";

interface StoryCardProps {
  title: string;
  description: string;
  href: string;
  variant?: IllustrationVariant;
  className?: string;
}

function NodesIllustration() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="60" cy="35" r="10" />
      <circle cx="140" cy="35" r="10" />
      <circle cx="180" cy="85" r="10" />
      <circle cx="100" cy="105" r="10" />
      <circle cx="40" cy="85" r="10" />
      <line x1="70" y1="38" x2="130" y2="35" />
      <line x1="147" y1="43" x2="174" y2="78" />
      <line x1="170" y1="89" x2="110" y2="103" />
      <line x1="90" y1="101" x2="48" y2="90" />
      <line x1="45" y1="76" x2="55" y2="44" />
    </svg>
  );
}

function WavesIllustration() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M 0 35 Q 40 15 80 35 Q 120 55 160 35 Q 200 15 240 35" />
      <path d="M 0 55 Q 40 35 80 55 Q 120 75 160 55 Q 200 35 240 55" />
      <path d="M 0 75 Q 40 55 80 75 Q 120 95 160 75 Q 200 55 240 75" />
      <path d="M 0 95 Q 40 75 80 95 Q 120 115 160 95 Q 200 75 240 95" />
      <path d="M 0 115 Q 40 95 80 115 Q 120 135 160 115 Q 200 95 240 115" />
    </svg>
  );
}

function BlocksIllustration() {
  return (
    <svg
      viewBox="0 0 240 140"
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <rect x="15" y="15" width="60" height="32" rx="4" />
      <rect x="85" y="15" width="60" height="32" rx="4" />
      <rect x="155" y="15" width="60" height="32" rx="4" />
      <rect x="15" y="57" width="60" height="32" rx="4" />
      <rect x="85" y="57" width="60" height="32" rx="4" />
      <rect x="155" y="57" width="60" height="32" rx="4" />
      <rect x="15" y="99" width="60" height="32" rx="4" />
      <rect x="85" y="99" width="60" height="32" rx="4" />
      <rect x="155" y="99" width="60" height="32" rx="4" />
    </svg>
  );
}

const illustrations: Record<IllustrationVariant, React.FC> = {
  nodes: NodesIllustration,
  waves: WavesIllustration,
  blocks: BlocksIllustration,
};

export default function StoryCard({
  title,
  description,
  href,
  variant = "nodes",
  className,
}: StoryCardProps) {
  const Illustration = illustrations[variant];

  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="h-44 bg-secondary/40 flex items-center justify-center p-10 text-foreground/[0.10] group-hover:text-foreground/[0.18] transition-colors duration-300">
          <Illustration />
        </div>
        <div className="p-6">
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
      </div>
    </Link>
  );
}
