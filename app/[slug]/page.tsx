import { Metadata } from "next";
import information from "@/information.json";
import Link from "next/link";
import { customers } from "@/use";
import { redirect } from "next/navigation";

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

  return (
    <div className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#stories"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to stories
        </Link>

        <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mt-8">
          {customer.name}
        </h1>

        {customer.description && (
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed max-w-2xl">
            {customer.description}
          </p>
        )}

        {customer.detail && (
          <article
            className="mt-12 prose prose-stone prose-lg max-w-none
              prose-headings:font-medium prose-headings:tracking-tight
              prose-a:text-foreground prose-a:underline-offset-4
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: customer.detail }}
          />
        )}

        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href="/#stories"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            &larr; Back to all stories
          </Link>
        </div>
      </div>
    </div>
  );
}
