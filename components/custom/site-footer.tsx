import Link from "next/link";
import information from "@/information.json";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-medium tracking-tight">UseEfficiently</p>
            <p className="text-sm text-muted-foreground mt-1">
              Accredited Airtable Services Partner
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link
              href={information.linkedin}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={information.upwork}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              Upwork
            </Link>
            <Link
              href={information.instagram}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
            <Link
              href={information.x}
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              X
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} UseEfficiently</p>
        </div>
      </div>
    </footer>
  );
}
