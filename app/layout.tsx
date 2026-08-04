import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reddyofficial.com"),
  applicationName: "Reddy Anna Book",
  title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
  description:
    "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
  keywords: [
    "Reddy Anna",
    "Reddy Anna Book",
    "Reddy Anna ID",
    "Cricket Betting ID",
    "IPL Betting ID",
    "Online Betting ID",
    "Best Betting Id Provider"
  ],
  authors: [{ name: "Reddy Anna Book" }],
  creator: "Reddy Anna Book",
  publisher: "Reddy Anna Book",
  alternates: {
    canonical: "https://reddyofficial.com",
  },
  verification: {
    google: "T1-ON7dk5r2Cxnsu9SkgTCnjtqzbr1EfhDd8tjS0Xeg",
  },
  openGraph: {
    title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
    url: "https://reddyofficial.com",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
        width: 800,
        height: 600,
        alt: "Reddy Anna Book Cricket Background"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna | Reddy Anna Book | Best Betting Id Provider",
    description:
      "Get your Reddy Anna Book ID instantly. Enjoy cricket IPL betting, casino games, & secure platform. Join India's trusted betting hub today",
    images: [
      "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
    ]
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/favicon-192x192.png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB3N3699');`
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB3N3699" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {children}
        <GoogleAnalytics gaId="G-0Y24744Y3S" />
      </body>
    </html>
  );
}
