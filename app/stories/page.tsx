import information from "@/information.json";
import { Metadata } from "next";
import { customers } from "@/use";
import FadeIn from "@/components/custom/fade-in";
import FocusCards from "@/components/custom/focus-cards";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Customer Stories";
  const description =
    "Real projects, real numbers. See how organizations across three continents run on Airtable systems we built.";

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

const storyMetrics: Record<string, { metric: string; metricLabel: string }> = {
  publicsquare: { metric: "200+", metricLabel: "automations" },
  girvak: { metric: "130,000+", metricLabel: "applications / year" },
  yetgen: { metric: "10,000+", metricLabel: "applicants / cohort" },
  oua: { metric: "50,000+", metricLabel: "applications / year" },
};

export default function StoriesPage() {
  const items = customers.map((c) => ({
    title: c.name,
    description: c.description,
    image: c.logo,
    href: `/${c.slug}`,
    ...storyMetrics[c.slug],
  }));

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            Customer Stories
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Real projects. Real numbers. Organizations across three continents
            running on the Airtable systems we built.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16">
            <FocusCards items={items} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
