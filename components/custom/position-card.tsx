import { cn } from "@/lib/utils";

interface PositionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function PositionCard({
  icon,
  title,
  description,
  className,
}: PositionCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground mb-5">
        {icon}
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
