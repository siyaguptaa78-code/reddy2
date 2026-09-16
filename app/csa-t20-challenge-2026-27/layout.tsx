import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSA T20 Challenge 2026–27: Complete Guide to South Africa's New Domestic T20 Era",
  description:
    "Cricket South Africa has merged the T20 Challenge and T20 Knockout into a new 16-team Pro20 Cup. Get the teams, format, opening fixtures, and full schedule for South Africa's new domestic T20 competition.",
  alternates: {
    canonical: "https://reddyofficial.com/csa-t20-challenge-2026-27",
  },
  openGraph: {
    title: "CSA T20 Challenge 2026–27: Complete Guide to South Africa's New Domestic T20 Era",
    description:
      "Cricket South Africa has merged the T20 Challenge and T20 Knockout into a new 16-team Pro20 Cup. Get the teams, format, opening fixtures, and full schedule for South Africa's new domestic T20 competition.",
    url: "https://reddyofficial.com/csa-t20-challenge-2026-27",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "CSA T20 Challenge 2026–27: Complete Guide to South Africa's New Domestic T20 Era",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSA T20 Challenge 2026–27: Complete Guide to South Africa's New Domestic T20 Era",
    description:
      "Cricket South Africa has merged the T20 Challenge and T20 Knockout into a new 16-team Pro20 Cup. Get the teams, format, opening fixtures, and full schedule for South Africa's new domestic T20 competition.",
    images: [
      "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-1024x683.jpg",
    ],
  },
};

export default function CsaT20Challenge2026Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
