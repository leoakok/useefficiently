import Link from "next/link";
import information from "@/information.json";
import { Metadata } from "next";
import FadeIn from "@/components/custom/fade-in";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Tools";
  const description =
    "The tools we use and build to deliver Airtable solutions. From core platforms to custom apps.";

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

export default function ToolsPage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              Tools we use
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We pick our tools carefully. These are the platforms at the core of
              what we build for clients, and the products we have created when
              off-the-shelf was not enough.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-medium tracking-tight mt-20 mb-8">
              Core platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/tools/airtable" className="group">
                <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FCBF49] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                        <path d="M11.52 1.28a1.04 1.04 0 0 1 .96 0l9.14 4.87c.28.15.28.56 0 .7L12.48 11.73a1.04 1.04 0 0 1-.96 0L2.38 6.86a.39.39 0 0 1 0-.7L11.52 1.28Z" />
                        <path d="M12.75 13.42v8.94c0 .37.39.6.72.44l9.14-4.87c.24-.13.39-.38.39-.65v-8.94c0-.37-.39-.6-.72-.44l-9.14 4.87a.72.72 0 0 0-.39.65Z" opacity=".7" />
                        <path d="M11.25 13.42v8.94c0 .37-.39.6-.72.44L1.39 17.93A.72.72 0 0 1 1 17.28V8.34c0-.37.39-.6.72-.44l9.14 4.87c.24.13.39.38.39.65Z" opacity=".5" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-xl group-hover:underline underline-offset-4 decoration-1">
                      Airtable
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our primary platform. We build databases, automations,
                    interfaces, and dashboards on Airtable for every client.
                  </p>
                  <span className="text-sm font-medium mt-4 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more&ensp;&rarr;
                  </span>
                </div>
              </Link>
              <Link href="/tools/fillout" className="group">
                <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0D0D0D] flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">F</span>
                    </div>
                    <h3 className="font-medium text-xl group-hover:underline underline-offset-4 decoration-1">
                      Fillout
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our form platform of choice. We use Fillout to collect data
                    from users, embed scheduling forms, and connect directly to
                    Airtable.
                  </p>
                  <span className="text-sm font-medium mt-4 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more&ensp;&rarr;
                  </span>
                </div>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-2xl font-medium tracking-tight mt-20 mb-4">
              When Airtable is not enough
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Airtable covers a lot of ground, but some problems need custom
              solutions. We build standalone tools and integrations to fill
              those gaps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://batch-attachments.useefficiently.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-medium text-lg group-hover:underline underline-offset-4 decoration-1">
                    Batch Attachments
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    A tool we built for batch downloading and uploading
                    attachments in Airtable. Handles bulk file operations that
                    Airtable does not support natively.
                  </p>
                  <span className="text-sm font-medium mt-4 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
                    batch-attachments.useefficiently.com&ensp;&rarr;
                  </span>
                </div>
              </a>
              <a
                href="https://mcptable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-medium text-lg group-hover:underline underline-offset-4 decoration-1">
                    MCPTable
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    A no-code service we created that connects Airtable bases to
                    AI tools through the Model Context Protocol (MCP). Lets you
                    choose exactly which tables and actions your AI can access.
                    Works with Cursor, Claude, and any MCP-compatible app.
                  </p>
                  <span className="text-sm font-medium mt-4 inline-block text-muted-foreground group-hover:text-foreground transition-colors">
                    mcptable.app&ensp;&rarr;
                  </span>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
