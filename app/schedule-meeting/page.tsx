import information from "@/information.json";
import { Metadata } from "next";
import FilloutEmbed from "@/components/fillout";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Schedule a Meeting with UseEfficiently";
  const description = "Book a free 30-minute discovery call with our team.";

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
  return <FilloutEmbed mode="fullscreen" show />;
}
