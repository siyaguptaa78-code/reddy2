import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddy Anna Blogs | Latest Cricket Articles & Sports Updates",
  description:
    "Read the latest sports blogs, cricket tournament reviews, and betting insights from Reddy Anna, India's most trusted online sports platform.",
  alternates: {
    canonical: "https://reddyofficial.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
