import Image from "next/image";
import Link from "next/link";
import { useCases, customers, testimonials } from "@/use";
import partner from "@/public/partner.svg";
import { FilloutButton } from "@/components/fillout";
import FadeIn from "@/components/custom/fade-in";

export default function Page() {
  const featuredCustomers = customers.filter(
    (c) => c.detail && c.detail.length > 0
  );

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.08]">
            We help brands use
            <br />
            technology efficiently
          </h1>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="https://ecosystem.airtable.com/consultants/useefficiently"
              target="_blank"
            >
              <Image
                src={partner}
                width={160}
                height={44}
                alt="Accredited Airtable Services Partner"
                className="opacity-50 hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-muted-foreground">
              Accredited Airtable Services Partner
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <FilloutButton className="bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors">
              Book a Free Call
            </FilloutButton>
            <Link
              href="#philosophy"
              className="border border-border px-6 py-3 rounded-md font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Our Story&ensp;&darr;
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Philosophy ─── */}
      <section id="philosophy" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight leading-tight">
              Good technology is invisible.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We build systems that work in the background so you can focus on
              what matters. As an accredited Airtable Services Partner, we
              transform complex workflows into simple, automated
              processes&nbsp;&mdash; designed to last.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Solutions ─── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-12">
              What we build
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
                {useCases.map((useCase) => (
                  <div key={useCase.title} className="bg-background p-8">
                    <h3 className="font-medium mb-2">{useCase.title}</h3>
                    <div
                      className="text-sm text-muted-foreground leading-relaxed [&_p]:m-0"
                      dangerouslySetInnerHTML={{ __html: useCase.description }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Numbers ─── */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { number: "200+", label: "Automations built" },
                { number: "40,000+", label: "Tasks processed monthly" },
                { number: "150,000+", label: "Applications managed annually" },
                { number: "6+", label: "Organizations transformed" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-medium tracking-tight">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Customer Stories ─── */}
      <section id="stories" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm text-muted-foreground tracking-wide uppercase mb-3">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-16">
              Stories
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center mb-20">
              {customers.map((customer) => (
                <Link
                  key={customer.slug}
                  href={customer.detail ? `/${customer.slug}` : "#"}
                  className="block"
                >
                  <Image
                    width={120}
                    height={40}
                    src={customer.logo}
                    alt={customer.name}
                    className="opacity-40 hover:opacity-100 transition-opacity w-full h-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </FadeIn>

          <div className="space-y-0">
            {featuredCustomers.slice(0, 3).map((customer, i) => (
              <FadeIn key={customer.slug} delay={i * 0.1}>
                <Link href={`/${customer.slug}`} className="block group">
                  <div className="border-t border-border py-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-medium group-hover:underline underline-offset-4 decoration-1">
                        {customer.name}
                      </h3>
                      <span className="text-sm text-muted-foreground shrink-0 group-hover:text-foreground transition-colors">
                        Read story&ensp;&rarr;
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                      {customer.description}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 px-6 bg-secondary/50">
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

      {/* ─── CTA ─── */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Ready to work efficiently?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Let&rsquo;s talk about how we can streamline your workflows.
            </p>
            <div className="mt-8">
              <FilloutButton className="bg-foreground text-background px-8 py-3.5 rounded-md font-medium hover:bg-foreground/90 transition-colors text-lg">
                Book a 30-Minute Call
              </FilloutButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
