"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = [
    {
      id: "the-hundred-2026",
      tag: "Tournament Guide",
      title: "The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets",
      excerpt:
        "The Hundred runs from 21 July to 16 August 2026, marking a brand-new era for British cricket under new ownership with IPL investments over £975 million, rebranding of major franchises, and the first-ever player auction in British sporting history.",
      date: "9 July 2026",
      image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
      slug: "/the-hundred-2026-schedule",
      active: true,
    },
    {
      id: "tnpl-2026",
      tag: "Tournament Guide",
      title: "TNPL 2026: Schedule, Teams, Points Table & All About Tamil Nadu Premier League Season 10",
      excerpt:
        "TNPL 2026 marks ten seasons of the Tamil Nadu Premier League. Season dates, all 8 teams, defending champions Tiruppur Tamizhans, venues, live streaming and FAQs.",
      date: "8 July 2026",
      image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
      slug: "/tnpl-2026-tamil-nadu-premier-league",
      active: true,
    },
    {
      id: "ipl-betting-guide",
      tag: "Betting Tips",
      title: "IPL 2026 Betting Guide: Strategy, Drift Odds & Winning Systems",
      excerpt:
        "Master the art of IPL cricket betting. Read our in-depth strategy guide explaining live odds fluctuations, drift analysis, bankroll management, and how to use Reddy Anna exchange to maximize returns.",
      date: "5 July 2026",
      image: "https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg",
      slug: "#",
      active: false,
    },
    {
      id: "casino-tactics",
      tag: "Live Casino",
      title: "Teen Patti & Roulette: Premium Live Casino Winning Hacks",
      excerpt:
        "Explore professional casino tactics for Teen Patti, Poker, and Roulette on Reddy Anna. Learn standard betting structures, side-bet strategies, and the best times to lock in profits.",
      date: "28 June 2026",
      image: "https://reddysports.co/wp-content/uploads/2025/11/Reddy-Anna-App-–-Betting-on-the-Go.webp",
      slug: "#",
      active: false,
    },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 flex flex-col gap-10 font-sans">
        {/* Page Header */}
        <section className="px-4 max-w-[900px] w-full mx-auto text-center flex flex-col gap-4">
          <span className="bg-[#c40000]/10 text-[#c40000] text-[11px] uppercase tracking-[2px] font-extrabold px-3.5 py-1.5 rounded-full mx-auto">
            📰 Articles & News
          </span>
          <h1 className="text-[#c40000] font-rajdhani font-black text-[42px] md:text-[32px] tracking-[1.5px] uppercase">
            Reddy Anna Official Blogs
          </h1>
          <div className="w-[100px] h-[4px] bg-[#c40000] mx-auto rounded" />
          <p className="text-gray-600 text-[16px] leading-[1.8] mt-2 font-medium">
            Stay ahead with the latest tournament previews, cricket match analyses, player auction summaries, and expert sports betting insights.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="px-4 max-w-[1240px] w-full mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="h-[210px] w-full overflow-hidden relative bg-[#0f1923]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-[#c40000] text-white text-[11px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-md shadow-md">
                    {blog.tag}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <span className="text-[12px] text-gray-400 font-semibold">{blog.date}</span>
                    <h2 className="text-gray-900 font-rajdhani font-bold text-[22px] leading-[1.3] uppercase group-hover:text-[#c40000] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    {blog.active ? (
                      <Link
                        href={blog.slug}
                        className="inline-block text-center w-full bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold text-[13px] uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-md hover:border hover:border-ra-crimson/20 transition-all duration-200"
                      >
                        Read Full Article &rarr;
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="inline-block text-center w-full bg-gray-100 text-gray-400 font-bold text-[13px] uppercase tracking-wider py-3.5 px-6 rounded-xl cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
