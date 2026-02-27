import { Metadata } from "next";
import information from "@/information.json";
import Link from "next/link";
import { customers } from "@/use";
import { redirect } from "next/navigation";
import { FilloutButton } from "@/components/fillout";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const customer = customers.find((c) => c.slug === params.slug);
  const metaTitle = customer?.metaTitle ?? "";
  const description = customer?.description ?? "";

  return {
    title: metaTitle,
    description,
    openGraph: {
      title: metaTitle,
      description,
      url: information.website,
      type: "website",
      images: [
        {
          url: `${information.website}/api/og?title=${metaTitle}`,
          alt: `${information.company} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: `@${information.slug}`,
      title: metaTitle,
      description,
      images: `${information.website}/api/og?title=${metaTitle}`,
    },
  };
};

export default function CustomerStory({ params }: Props) {
  const customer = customers.find((c) => c.slug === params.slug);
  if (!customer) redirect("/");

  const hasContent = customer.detail && customer.detail.trim().length > 0;

  if (!hasContent) {
    return (
      <div className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/stories"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to stories
          </Link>

          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mt-8">
            {customer.name}
          </h1>

          <p className="text-muted-foreground mt-6 leading-relaxed">
            We worked with {customer.name} on their Airtable system. Full story
            coming soon.
          </p>

          <div className="mt-10 p-8 rounded-xl border border-border bg-secondary/30">
            <p className="font-medium">Want to hear more about this project?</p>
            <p className="text-sm text-muted-foreground mt-2">
              We&rsquo;re happy to walk you through it on a call.
            </p>
            <div className="mt-4">
              <FilloutButton className="bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors">
                Book a call
              </FilloutButton>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/stories"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              &larr; Back to all stories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/stories"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to stories
        </Link>

        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mt-8">
          {customer.name}
        </h1>

        <article
          className="mt-12 prose prose-stone prose-lg max-w-none
            prose-headings:font-medium prose-headings:tracking-tight
            prose-a:text-foreground prose-a:underline-offset-4
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: customer.detail }}
        />

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/stories"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            &larr; Back to all stories
          </Link>
        </div>
      </div>
    </div>
  );
}
