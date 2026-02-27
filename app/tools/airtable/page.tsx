import Link from "next/link";
import information from "@/information.json";
import { Metadata } from "next";
import FadeIn from "@/components/custom/fade-in";
import { FilloutButton } from "@/components/fillout";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Airtable";
  const description =
    "Why we chose Airtable as our core platform and how we use it to build systems for organizations.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: information.website,
      type: "website",
      images: [
        {
          url: `${information.website}/api/og?title=${title}`,
          alt: `${information.company} Logo`,
        },
      ],
    },
  };
}

export default function AirtablePage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              href="/tools"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; Back to tools
            </Link>

            <div className="flex items-center gap-5 mt-8">
              <div className="w-16 h-16 rounded-xl bg-[#FCBF49] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="currentColor">
                  <path d="M11.52 1.28a1.04 1.04 0 0 1 .96 0l9.14 4.87c.28.15.28.56 0 .7L12.48 11.73a1.04 1.04 0 0 1-.96 0L2.38 6.86a.39.39 0 0 1 0-.7L11.52 1.28Z" />
                  <path d="M12.75 13.42v8.94c0 .37.39.6.72.44l9.14-4.87c.24-.13.39-.38.39-.65v-8.94c0-.37-.39-.6-.72-.44l-9.14 4.87a.72.72 0 0 0-.39.65Z" opacity=".7" />
                  <path d="M11.25 13.42v8.94c0 .37-.39.6-.72.44L1.39 17.93A.72.72 0 0 1 1 17.28V8.34c0-.37.39-.6.72-.44l9.14 4.87c.24.13.39.38.39.65Z" opacity=".5" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-tight">
                Airtable
              </h1>
            </div>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Airtable is the platform we built our entire practice around. It
              is not a spreadsheet. It is a relational database with built-in
              automations, scripting, visual interfaces, and dashboards. We
              chose it because it lets us deliver complete systems for
              organizations without writing a traditional backend from scratch.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-medium tracking-tight mt-16 mb-8">
              Why we chose Airtable
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  One platform, everything in one place
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Most of our clients come to us with data scattered across
                  spreadsheets, email threads, Zapier workflows, and separate
                  tools. We consolidate everything into Airtable: the data, the
                  automations, the interfaces, and the dashboards. One platform
                  to manage.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Powerful enough for real scale
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  We have used Airtable to process 130,000+ applications a year
                  for one client, run 200+ automations for another, and manage
                  multi-stage evaluations with 100+ jury members. It handles
                  real workloads, not just prototypes.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Dramatically cheaper at scale
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  One of our clients was spending heavily on Zapier to run their
                  automations. We migrated everything to native Airtable
                  automations and cut their costs by 96%. Same results, a
                  fraction of the price.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Non-technical teams can use it
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  After we build the system, your team can actually use it.
                  Airtable&rsquo;s interfaces and views make complex data
                  accessible to people who have never touched a database before.
                  We design every system with the end user in mind.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-2xl font-medium tracking-tight mt-16 mb-8">
              What we build on Airtable
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Relational databases",
                "Workflow automations",
                "Custom interfaces",
                "Admin dashboards",
                "Application pipelines",
                "Email integrations",
                "Reporting systems",
                "Project management tools",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-card px-5 py-4"
                >
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-16 p-8 rounded-xl border border-border bg-secondary/30 text-center">
              <h2 className="text-2xl font-medium tracking-tight">
                Want to see what we can build for you?
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                We do a free 30-minute call. No pitch, no pressure.
              </p>
              <div className="mt-6">
                <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                  Book a call
                </FilloutButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
