import Image from "next/image";
import Link from "next/link";
import { customers, testimonials } from "@/use";
import { FilloutButton } from "@/components/fillout";
import FadeIn from "@/components/custom/fade-in";
import ImpactCard from "@/components/custom/impact-card";
import StoryCard from "@/components/custom/story-card";
import PositionCard from "@/components/custom/position-card";
import { SiAirtable } from "react-icons/si";

function IconGrid() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm9 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm9 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" />
    </svg>
  );
}

function IconTrendDown() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconScale() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L5.414 15H7a1 1 0 110 2H3a1 1 0 01-1-1v-4zm13.657-1.707a1 1 0 010 1.414L14.414 15H16a1 1 0 110 2h-4a1 1 0 01-1-1v-4a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Page() {
  const girvak = customers.find((c) => c.slug === "girvak");

  return (
    <>
      {/* ─── Hero: Customer-first opening ─── */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-sm text-muted-foreground tracking-wide uppercase mb-6">
            Airtable Services Partner&ensp;·&ensp;Istanbul
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
            130,000&nbsp;applications.
            <br />
            Zero manual steps.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            We built the automation system behind Turkey&rsquo;s largest young
            talent program. Now it runs itself.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <FilloutButton className="bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors">
              Book a Free Call
            </FilloutButton>
            <Link
              href="#impact"
              className="border border-border px-6 py-3 rounded-md font-medium text-foreground hover:bg-secondary transition-colors"
            >
              See the stories&ensp;&darr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Impact: Real numbers from real clients ─── */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ImpactCard
                number="200+"
                label="automations built and running daily"
                customer="PublicSquare · Australia"
                variant="circles"
              />
              <ImpactCard
                number="130,000+"
                label="applications processed every year"
                customer="Türkiye Entrepreneurship Foundation"
                variant="grid"
              />
              <ImpactCard
                number="500+"
                label="hours saved through workflow automation"
                customer="YetGen · Education"
                variant="bars"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Featured Story: GIRVAK deep dive ─── */}
      <section id="stories" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
              Case Study
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
                  Türkiye Entrepreneurship
                  <br />
                  Foundation
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Turkey&rsquo;s largest entrepreneurship foundation manages
                  three national programs&nbsp;&mdash; including the Young Talent
                  Program, which receives 130,000+ applications annually. They
                  needed a system that could handle a five-stage evaluation
                  process, coordinate 100+ jury members, and automate thousands
                  of emails.
                </p>
                <p className="mt-4 text-foreground font-medium">
                  We built the entire IT system on Airtable.
                </p>
                <Link
                  href="/girvak"
                  className="inline-block mt-6 text-sm font-medium hover:underline underline-offset-4"
                >
                  Read the full story&ensp;&rarr;
                </Link>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { number: "130,000+", label: "applications / year" },
                    { number: "100+", label: "jury evaluators" },
                    { number: "5", label: "evaluation stages" },
                    { number: "3", label: "national programs" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="p-5 rounded-lg bg-background border border-border"
                    >
                      <p className="text-2xl font-medium tracking-tight">
                        {metric.number}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── More Stories: Visual story cards ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-12">
              More stories
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StoryCard
                title="PublicSquare"
                description="200+ automations processing 40,000+ tasks monthly for an Australian fintech company."
                href="/publicsquare"
                variant="nodes"
              />
              <StoryCard
                title="Yetkin Gençler"
                description="Managing 10,000+ applicants and 2,000 participants per cohort for Turkey's leading tech education program."
                href="/yetgen"
                variant="waves"
              />
              <StoryCard
                title="Google Game & App Academy"
                description="Four-stage application process for 50,000+ annual applicants in collaboration with Google."
                href="/oua"
                variant="blocks"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-8 items-center mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">Trusted by</p>
              {customers.map((customer) => (
                <Image
                  key={customer.slug}
                  width={100}
                  height={32}
                  src={customer.logo}
                  alt={customer.name}
                  className="opacity-30 hover:opacity-70 transition-opacity h-6 w-auto object-contain"
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why Airtable: Real positioning ─── */}
      <section id="why-airtable" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Why Airtable?
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              We chose to specialize in one platform and know it deeply. Here&rsquo;s
              why our clients choose it too.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <PositionCard
                icon={<IconGrid />}
                title="One platform, not ten"
                description="Our clients used to scatter data across Zapier, Google Sheets, and email. Now everything — automations, interfaces, dashboards — lives in Airtable."
              />
              <PositionCard
                icon={<IconTrendDown />}
                title="96% cheaper at scale"
                description="We migrated a client's Zapier workflows to native Airtable automations. Same results, a fraction of the cost."
              />
              <PositionCard
                icon={<IconScale />}
                title="Scales with your organization"
                description="From 100 applicants to 130,000. Airtable grows with you — we make sure the system does too."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Testimonials: Real words from real people ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-16">
              What our clients say
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.1}>
                <div className="space-y-6">
                  <div
                    className="text-foreground/80 leading-relaxed [&_p]:m-0"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  <Link
                    href={testimonial.linkedin}
                    target="_blank"
                    className="flex items-center gap-3 group"
                  >
                    <Image
                      src={testimonial.pic}
                      width={44}
                      height={44}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium group-hover:underline underline-offset-2">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: Specific, real, no-pressure ─── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Every automation starts
              <br />
              with a conversation.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              30 minutes. Free. No commitment.
            </p>
            <div className="mt-8">
              <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                Book a Call
              </FilloutButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
