import Image from "next/image";
import Link from "next/link";
import { team } from "@/use";
import information from "@/information.json";
import FadeIn from "@/components/custom/fade-in";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "About";
  const description = "Meet the team behind UseEfficiently.";

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
          url: `${information.website}/api/og?title=${title} | UseEfficiently`,
          alt: `${information.company} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: `@${information.slug}`,
      title,
      description,
      images: `${information.website}/api/og?title=${title}`,
    },
  };
}

export default function Page() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight">
            Our Team
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed">
            A small team of specialists helping businesses work smarter with
            Airtable.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Image
                  src={member.pic}
                  width={120}
                  height={120}
                  alt={member.name}
                  className="rounded-full shrink-0"
                />
                <div>
                  <h2 className="text-2xl font-medium">{member.name}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {member.title} &middot; {member.address}
                  </p>
                  {member.quote && (
                    <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
                      {member.quote}
                    </p>
                  )}
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    className="text-sm font-medium mt-4 inline-block hover:underline underline-offset-4"
                  >
                    LinkedIn &rarr;
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
