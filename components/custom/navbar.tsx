import Link from "next/link";
import Image from "next/image";
import use from "@/public/use.svg";
import { FilloutButton } from "@/components/fillout";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src={use} width={28} height={28} alt="UseEfficiently" />
          <span className="font-medium tracking-tight hidden sm:inline">
            UseEfficiently
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/tools"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/stories"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Stories
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
          >
            About
          </Link>
          <FilloutButton className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-md hover:bg-foreground/90 transition-colors">
            Book a Call
          </FilloutButton>
        </div>
      </nav>
    </header>
  );
}
