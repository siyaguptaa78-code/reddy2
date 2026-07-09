import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TNPL 2026: Schedule, Teams, Points Table & All About Tamil Nadu Premier League Season 10",
  description:
    "TNPL 2026 marks ten seasons of the Tamil Nadu Premier League. Season dates, all 8 teams, defending champions Tiruppur Tamizhans, venues, live streaming and FAQs.",
  alternates: {
    canonical: "https://reddyofficial.com/tnpl-2026-tamil-nadu-premier-league",
  },
  openGraph: {
    title: "TNPL 2026: Schedule, Teams, Points Table & All About Tamil Nadu Premier League Season 10",
    description:
      "TNPL 2026 marks ten seasons of the Tamil Nadu Premier League. Season dates, all 8 teams, defending champions Tiruppur Tamizhans, venues, live streaming and FAQs.",
    url: "https://reddyofficial.com/tnpl-2026-tamil-nadu-premier-league",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "TNPL 2026 Tamil Nadu Premier League Schedule",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "TNPL 2026: Schedule, Teams, Points Table & All About Tamil Nadu Premier League Season 10",
    description:
      "TNPL 2026 marks ten seasons of the Tamil Nadu Premier League. Season dates, all 8 teams, defending champions Tiruppur Tamizhans, venues, live streaming and FAQs.",
    images: [
      "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
    ],
  },
};

export default function TNPL2026Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
