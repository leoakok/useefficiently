import information from "@/information.json";
import { Metadata } from "next";
import { FilloutButton } from "@/components/fillout";
import FadeIn from "@/components/custom/fade-in";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Services";
  const description =
    "Airtable consulting, automation, data migration, integrations, training, and ongoing support for clients in the UK, Canada, Australia, Turkey, and the USA.";

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
    title: "Base design and implementation",
    description:
      "We set up your Airtable from scratch — tables, views, relationships, permissions. Not from a template. Designed around how your organization actually works.",
  },
  {
    title: "Workflow automation",
    description:
      "Airtable automations and scripts that replace the manual stuff. We've built 200+ automations for a single client in Australia that process 40,000 tasks a month.",
  },
  {
    title: "Data migration",
    description:
      "Moving from spreadsheets, Zapier, or whatever you're using now. One client was paying a lot for Zapier — we moved them to native Airtable and cut their costs by 96%.",
  },
  {
    title: "Custom integrations",
    description:
      "Connecting Airtable with tools like Brevo, Slack, Zoom, or your own APIs. For a foundation in Turkey, we built a Brevo integration that sends thousands of automated emails during their application season.",
  },
  {
    title: "Training",
    description:
      "We teach your team how the system works so you're not dependent on us. We also have a free Airtable course on YouTube if you want to learn on your own first.",
  },
  {
    title: "Ongoing support",
    description:
      "We don't disappear after launch. We monitor, update, and improve the system as your needs change. Most of our client relationships are long-term.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
              What we do
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We work with Airtable. That&rsquo;s our focus. We&rsquo;ve been
              building on it for clients in the UK, Canada, Australia, Turkey,
              and the USA — from small startups to national foundations.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <h2 className="font-medium text-lg">{service.title}</h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Most projects start with a 30-minute call. We&rsquo;ll listen, ask
              questions, and tell you honestly if Airtable makes sense for your
              situation.
            </p>
            <div className="mt-8">
              <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                Book a free call
              </FilloutButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
