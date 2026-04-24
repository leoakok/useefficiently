import Image from "next/image";
import Link from "next/link";
import { customers, testimonials } from "@/use";
import { FilloutButton } from "@/components/fillout";
import FadeIn from "@/components/custom/fade-in";
import ImpactCard from "@/components/custom/impact-card";
import StoryCard from "@/components/custom/story-card";

export default function Page() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.12]">
            We build Airtable systems
            <br />
            for organizations that need
            <br />
            things to actually work.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We&rsquo;re a small team. We&rsquo;ve worked with clients in Turkey,
            Australia, Canada, the UK, and the USA. Some needed to automate 200
            workflows. Others needed to process 130,000 applications a year. We
            helped, and we stuck around to make sure it kept working.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <FilloutButton className="bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors">
              Book a free call
            </FilloutButton>
            <Link
              href="#work"
              className="border border-border px-6 py-3 rounded-md font-medium text-foreground hover:bg-secondary transition-colors"
            >
              See what we&rsquo;ve done&ensp;&darr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section id="work" className="py-24 px-6">
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
                customer="YetGen · Turkey"
                variant="bars"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Featured story ─── */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-3">
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
                  Türkiye Entrepreneurship Foundation
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Turkey&rsquo;s largest entrepreneurship foundation runs three
                  national programs, including the Young Talent Program — 130,000+
                  applications a year, a five-stage evaluation with 100+ jury
                  members, and thousands of automated emails. They needed a system
                  that could handle all of it.
                </p>
                <p className="mt-4 text-foreground">
                  We built the whole thing on Airtable. It&rsquo;s been running
                  since.
                </p>
                <Link
                  href="/girvak"
                  className="inline-block mt-6 text-sm font-medium hover:underline underline-offset-4"
                >
                  Read the full story &rarr;
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

      {/* ─── More stories ─── */}
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
                description="200+ automations processing 40,000+ tasks monthly for a fintech company in Australia."
                href="/publicsquare"
                variant="nodes"
              />
              <StoryCard
                title="Yetkin Gençler"
                description="Managing 10,000+ applicants and 2,000 participants per cohort for a tech education program in Turkey."
                href="/yetgen"
                variant="waves"
              />
              <StoryCard
                title="Google Game & App Academy"
                description="A four-stage application process for 50,000+ annual applicants, built in collaboration with Google."
                href="/oua"
                variant="blocks"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10">
              <Link
                href="/stories"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                View all stories &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why Airtable ─── */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4">
              Why Airtable?
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              We picked one tool and learned it deeply. Airtable is flexible
              enough to replace a dozen scattered apps, and powerful enough to
              handle real scale. That&rsquo;s why we built our whole practice
              around it.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium">One place for everything</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Most of our clients came to us with data in five different
                  tools. We moved it all into Airtable — automations, interfaces,
                  dashboards, and the data itself.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium">Much cheaper at scale</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  One client was spending a lot on Zapier. We migrated their
                  workflows to native Airtable automations — same results, 96%
                  less cost.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="font-medium">It actually scales</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  We&rsquo;ve seen Airtable handle 100 applicants and 130,000
                  applicants in the same system. It grows with you — we make sure
                  the architecture supports it.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-16">
              What people say about working with us
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

      {/* ─── CTA ─── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Want to talk?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              We do a free 30-minute call. No pitch, no pressure. We&rsquo;ll
              listen to what you need and tell you honestly whether Airtable is
              the right fit.
            </p>
            <div className="mt-8">
              <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                Book a call
              </FilloutButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
