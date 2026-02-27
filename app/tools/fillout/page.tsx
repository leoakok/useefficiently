import Link from "next/link";
import information from "@/information.json";
import { Metadata } from "next";
import FadeIn from "@/components/custom/fade-in";
import { FilloutButton } from "@/components/fillout";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Fillout";
  const description =
    "Why we chose Fillout as our form platform and how we use it alongside Airtable.";

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

export default function FilloutPage() {
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
              <div className="w-16 h-16 rounded-xl bg-[#0D0D0D] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-3xl">F</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium tracking-tight">
                Fillout
              </h1>
            </div>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Fillout is the form builder we use for every client project that
              needs data collection or scheduling. It connects directly to
              Airtable, supports complex logic, and lets us embed forms anywhere.
              We use it on this very site for booking calls.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-medium tracking-tight mt-16 mb-8">
              Why we chose Fillout
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Native Airtable integration
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Fillout connects to Airtable out of the box. Form responses go
                  straight into your tables with zero manual steps. It reads your
                  Airtable schema and maps fields automatically, so there is no
                  need for middleware or Zapier.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Advanced logic and conditional flows
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  We build multi-step forms with branching logic, calculated
                  fields, and validation rules. Fillout handles all of that
                  without custom code. For application pipelines with multiple
                  stages, this is essential.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Embeddable anywhere
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Popup, inline, full-screen. We embed Fillout forms directly
                  into client websites and internal tools. The scheduling form on
                  our own site is a Fillout embed. It works on any platform and
                  looks native.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium text-lg">
                  Better than Airtable Forms
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Airtable has its own form feature, but it is limited in
                  design, logic, and embedding options. Fillout gives us full
                  control over the user experience while keeping everything
                  connected to Airtable on the backend.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-2xl font-medium tracking-tight mt-16 mb-8">
              What we build with Fillout
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Application forms",
                "Scheduling and booking",
                "Multi-step surveys",
                "Registration flows",
                "Data collection portals",
                "Feedback forms",
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
                Need a form that connects to Airtable?
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                We can set it up in a day. Book a free call and tell us what you
                need.
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
