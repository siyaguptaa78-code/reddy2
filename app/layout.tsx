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
  title: "Reddy Anna Book ID Guide | Official reddyofficial.com",
  description:
    "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
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
    title: "Reddy Anna Book ID Guide | Official reddyofficial.com",
    description:
      "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
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
    title: "Reddy Anna Book ID Guide | Official reddyofficial.com",
    description:
      "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://reddyofficial.com/#website",
                  "url": "https://reddyofficial.com/",
                  "name": "Reddy Anna",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://reddyofficial.com/#organization",
                  "name": "Reddy Anna",
                  "url": "https://reddyofficial.com/"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://reddyofficial.com/#webpage",
                  "url": "https://reddyofficial.com/",
                  "name": "Reddy Anna Book ID Guide | Official reddyofficial.com",
                  "description": "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "https://reddyofficial.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://reddyofficial.com/#faq",
                  "url": "https://reddyofficial.com/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a Reddy Anna ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access the Reddy Anna website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Reddy Anna provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my Reddy Anna account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I check Reddy Anna login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have a problem with my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest Reddy Anna updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
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
