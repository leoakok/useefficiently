import information from "@/information.json";
import { Metadata } from "next";
import { FilloutButton } from "@/components/fillout";
import FadeIn from "@/components/custom/fade-in";
import SpotlightCard from "@/components/custom/spotlight-card";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Services";
  const description =
    "Airtable consulting, automation, data migration, integrations, training, and ongoing support.";

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

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Base Design & Implementation",
    description:
      "We architect your Airtable system from scratch. Tables, views, relationships, and permissions — designed for how your organization actually works, not how a template thinks it should.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Native Airtable automations and scripts that replace manual processes. From email triggers to complex multi-step workflows processing thousands of tasks daily — like the 200+ automations we run for PublicSquare.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Data Migration",
    description:
      "Moving from spreadsheets, Zapier, or legacy tools to Airtable. We've cut client automation costs by 96% migrating from Zapier to native Airtable. Clean data, zero downtime.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Custom Integrations",
    description:
      "Connecting Airtable with Brevo, Slack, Zoom, payment systems, and custom APIs. One system that talks to everything else — like the Brevo email integration we built for GIRVAK handling 130,000+ applications.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Training & Education",
    description:
      "Hands-on sessions for your team. We don't just build — we make sure you understand the system and can manage it yourselves. We also run a free Airtable course on YouTube.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ongoing Support",
    description:
      "We stay. Monitoring, updates, and optimization as your organization grows. Your system evolves with you — not a launch-and-leave engagement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
              What we do
            </p>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              We build Airtable systems
              <br />
              that run themselves.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From architecture to automation to ongoing support. Every service
              is grounded in real projects across three continents.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
              {services.map((service) => (
                <SpotlightCard key={service.title} className="h-full">
                  <div className="p-8">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground mb-5">
                      {service.icon}
                    </div>
                    <h2 className="font-medium text-lg">{service.title}</h2>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Most of our projects begin with a free 30-minute call. We&rsquo;ll
              listen, ask questions, and tell you honestly if Airtable is the
              right fit.
            </p>
            <div className="mt-8">
              <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                Book a Free Call
              </FilloutButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
