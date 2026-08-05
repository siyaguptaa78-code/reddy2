import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 90-Second Decision: How Captains' Toss Choices Quietly Move Millions in Odds",
  description:
    "Between the coin landing and the captain's bat-or-bowl call, cricket betting markets shift by millions. Here's what drives those 90 seconds of movement — and how sharp bettors position themselves before the announcement.",
  alternates: {
    canonical: "https://reddyofficial.com/cricket-toss-decision-odds-movement",
  },
  openGraph: {
    title: "The 90-Second Decision: How Captains' Toss Choices Quietly Move Millions in Odds",
    description:
      "Between the coin landing and the captain's bat-or-bowl call, cricket betting markets shift by millions. Here's what drives those 90 seconds of movement — and how sharp bettors position themselves before the announcement.",
    url: "https://reddyofficial.com/cricket-toss-decision-odds-movement",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "The 90-Second Decision: How Captains' Toss Choices Quietly Move Millions in Odds",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 90-Second Decision: How Captains' Toss Choices Quietly Move Millions in Odds",
    description:
      "Between the coin landing and the captain's bat-or-bowl call, cricket betting markets shift by millions. Here's what drives those 90 seconds of movement — and how sharp bettors position themselves before the announcement.",
    images: [
      "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
    ],
  },
};

export default function CricketTossDecisionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
