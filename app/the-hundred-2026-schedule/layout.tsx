import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
  description:
    "The Hundred 2026 runs 21 July–16 August. Full schedule with UK & India times, all 8 teams after the first-ever auction, squads, tickets, live streaming and final details.",
  alternates: {
    canonical: "https://reddyofficial.com/the-hundred-2026-schedule",
  },
  openGraph: {
    title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
    description:
      "The Hundred 2026 runs 21 July–16 August. Full schedule with UK & India times, all 8 teams after the first-ever auction, squads, tickets, live streaming and final details.",
    url: "https://reddyofficial.com/the-hundred-2026-schedule",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "The Hundred 2026 Schedule"
      }
    ],
    locale: "en_IN",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
    description:
      "The Hundred 2026 runs 21 July–16 August. Full schedule with UK & India times, all 8 teams after the first-ever auction, squads, tickets, live streaming and final details.",
    images: [
      "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg"
    ]
  }
};

export default function TheHundredScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
