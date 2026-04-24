import { cn } from "@/lib/utils";

type Variant = "circles" | "grid" | "bars";

interface ImpactCardProps {
  number: string;
  label: string;
  customer: string;
  variant?: Variant;
  className?: string;
}

function CirclesDecoration() {
  return (
    <div className="absolute -top-8 -right-8 w-40 h-40 text-foreground/[0.05]">
      <div className="absolute inset-0 rounded-full border-[1.5px] border-current" />
      <div className="absolute inset-4 rounded-full border-[1.5px] border-current" />
      <div className="absolute inset-8 rounded-full border-[1.5px] border-current" />
      <div className="absolute inset-12 rounded-full border-[1.5px] border-current" />
      <div className="absolute inset-16 rounded-full border-[1.5px] border-current" />
    </div>
  );
}

function GridDecoration() {
  return (
    <div className="absolute -top-1 -right-1 grid grid-cols-6 gap-[9px] p-4 text-foreground/[0.07]">
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} className="w-[5px] h-[5px] rounded-full bg-current" />
      ))}
    </div>
  );
}

function BarsDecoration() {
  return (
    <div className="absolute top-6 right-6 flex flex-col items-end gap-[6px] text-foreground/[0.06]">
      <div className="h-[3px] w-24 bg-current rounded-full" />
      <div className="h-[3px] w-16 bg-current rounded-full" />
      <div className="h-[3px] w-28 bg-current rounded-full" />
      <div className="h-[3px] w-12 bg-current rounded-full" />
      <div className="h-[3px] w-20 bg-current rounded-full" />
      <div className="h-[3px] w-10 bg-current rounded-full" />
      <div className="h-[3px] w-24 bg-current rounded-full" />
    </div>
  );
}

const decorations: Record<Variant, React.FC> = {
  circles: CirclesDecoration,
  grid: GridDecoration,
  bars: BarsDecoration,
};

export default function ImpactCard({
  number,
  label,
  customer,
  variant = "circles",
  className,
}: ImpactCardProps) {
  const Decoration = decorations[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <Decoration />
      <p className="text-4xl sm:text-5xl font-medium tracking-tight relative">
        {number}
      </p>
      <p className="text-muted-foreground mt-2 leading-relaxed relative">
        {label}
      </p>
      <div className="mt-6 pt-4 border-t border-border relative">
        <p className="text-sm text-muted-foreground">{customer}</p>
      </div>
    </div>
  );
}
