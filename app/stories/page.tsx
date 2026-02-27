import Image from "next/image";
import Link from "next/link";
import information from "@/information.json";
import { Metadata } from "next";
import { customers } from "@/use";
import FadeIn from "@/components/custom/fade-in";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Stories";
  const description =
    "Real projects from real organizations in Turkey, Australia, Canada, and beyond.";

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

const metrics: Record<string, string> = {
  publicsquare: "200+ automations",
  girvak: "130,000+ applications / year",
  yetgen: "10,000+ applicants / cohort",
  oua: "50,000+ applications / year",
};

export default function StoriesPage() {
  const withContent = customers.filter(
    (c) => c.detail && c.detail.trim().length > 0
  );
  const withoutContent = customers.filter(
    (c) => !c.detail || c.detail.trim().length === 0
  );

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            Stories
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            These are organizations we&rsquo;ve worked with. Real projects, real
            numbers.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 space-y-0">
            {withContent.map((customer) => (
              <Link
                key={customer.slug}
                href={`/${customer.slug}`}
                className="group block"
              >
                <div className="border-t border-border py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="w-24 shrink-0 flex items-center">
                    <Image
                      src={customer.logo}
                      width={96}
                      height={32}
                      alt={customer.name}
                      className="w-auto h-7 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-medium text-lg group-hover:underline underline-offset-4 decoration-1">
                      {customer.name}
                    </h2>
                    {customer.description && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-xl">
                        {customer.description}
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right shrink-0">
                    {metrics[customer.slug] && (
                      <p className="text-sm text-muted-foreground">
                        {metrics[customer.slug]}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}

            {withoutContent.length > 0 && (
              <>
                {withoutContent.map((customer) => (
                  <div key={customer.slug} className="border-t border-border py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="w-24 shrink-0 flex items-center">
                      <Image
                        src={customer.logo}
                        width={96}
                        height={32}
                        alt={customer.name}
                        className="w-auto h-7 object-contain opacity-30"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-medium text-lg text-muted-foreground">
                        {customer.name}
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground">Story coming soon</p>
                  </div>
                ))}
              </>
            )}
            <div className="border-t border-border" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
