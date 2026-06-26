"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 flex flex-col gap-10 font-sans">
        
        {/* About Section Header */}
        <section className="px-4 max-w-[900px] w-full mx-auto text-center flex flex-col gap-4">
          <h1 className="text-[#c40000] font-rajdhani font-black text-[42px] md:text-[32px] tracking-[1.5px] uppercase">
            About Reddy Anna Book
          </h1>
          <div className="w-[100px] h-[4px] bg-[#c40000] mx-auto rounded" />
          <p className="text-gray-600 text-[16px] leading-[1.8] mt-2 font-medium">
            India&apos;s oldest and most reliable provider of online gaming IDs and live sports betting exchanges. Established in 2015, we have served over 1 million happy clients.
          </p>
        </section>

        {/* Brand Story with Image */}
        <section className="px-4 max-w-[1100px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg"
                alt="About Reddy Anna Team Story"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] md:text-[24px] uppercase">
                A Decade of Sports Betting Trust
              </h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.8] font-sans">
                Reddy Anna Book was created with a simple vision: to eliminate fake agents and provides Indian gaming enthusiasts a safe, fast, and completely transparent platform to place their sports and casino wagers.
              </p>
              <p className="text-gray-600 text-[14.5px] leading-[1.8] font-sans">
                Over the past ten years, we have built custom digital integrations with leading global sportsbooks (Cricbet99, Laser247, Lotus365) and developed a highly refined automated banking panel to support instant cash transactions. Today, our brand represents reliability, high-rate live odds, and professional client support.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[13px] tracking-wide transition-all mt-1"
              >
                Join Our Elite Community
              </a>
            </div>
          </div>
        </section>

        {/* Pillars of Excellence */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-4">
          <div className="flex flex-col gap-4 text-center mb-8">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[30px] uppercase">
              Our Pillars of Excellence
            </h2>
            <p className="text-gray-500 text-[15px] max-w-[650px] mx-auto">
              Our platform success is anchored on four core corporate commitments to our client base:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "100% Secure Ledgers", desc: "Your deposits, active bets, and overall ledger sheets are secured under SSL codes. Zero risk of lost credits." },
              { title: "Lightning Withdrawals", desc: "No more long wait times. Request withdrawals through UPI or IMPS and receive your funds within 30 minutes." },
              { title: "High Liquid Exchange", desc: "Bet with maximum limits on peak matches. We boast deep betting pools to handle VIP-level volumes easily." },
              { title: "24/7 Dedicated Support", desc: "Reach our verified managers instantly via WhatsApp, Telegram, or live phone channels for immediate support." }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-md text-left flex flex-col gap-2">
                <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
