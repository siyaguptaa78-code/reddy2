import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Betting on the Coin Flip: Inside Cricket's Weirdest, Most Overlooked Market",
  description:
    "Bookmakers offer odds on cricket's coin toss — and most bettors ignore it completely. Here's what the toss market actually tells you, who makes money from it, and why sharp bettors watch it closely.",
  alternates: {
    canonical: "https://reddyofficial.com/cricket-toss-betting-market",
  },
  openGraph: {
    title: "Betting on the Coin Flip: Inside Cricket's Weirdest, Most Overlooked Market",
    description:
      "Bookmakers offer odds on cricket's coin toss — and most bettors ignore it completely. Here's what the toss market actually tells you, who makes money from it, and why sharp bettors watch it closely.",
    url: "https://reddyofficial.com/cricket-toss-betting-market",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "Betting on the Coin Flip: Inside Cricket's Weirdest, Most Overlooked Market",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Betting on the Coin Flip: Inside Cricket's Weirdest, Most Overlooked Market",
    description:
      "Bookmakers offer odds on cricket's coin toss — and most bettors ignore it completely. Here's what the toss market actually tells you, who makes money from it, and why sharp bettors watch it closely.",
    images: [
      "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
    ],
  },
};

export default function CricketTossBettingMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
