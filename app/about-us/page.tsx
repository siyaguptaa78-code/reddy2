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
            India's biggest and most trustworthy supplier of online gaming IDs and live sports betting exchanges. Accredited in 2015 and with more than 1,000,000 happy users.
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
                Sports Bet Experience for a Decade
              </h2>
              <p className="text-gray-600 text-[14.5px] leading-[1.8] font-sans">
                Reddy Anna Book was created to provide an alternative source of sports betting without any dishonest agents in the chain and give Indian punters the best opportunity to participate in live betting and casinos. During the last decade, we have invented unique interfaces for the most popular sportsbooks (Cricbet99, Laser247, Lotus365) and an extended automated banking panel for fast money withdrawal. Now our brand is known as the most trustworthy source in sports betting with high odds and excellent customer care.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[13px] tracking-wide transition-all mt-1"
              >
                Join the Best Online Gaming Club
              </a>
            </div>
          </div>
        </section>

        {/* Pillars of Excellence */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-4">
          <div className="flex flex-col gap-4 text-center mb-8">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[30px] uppercase">
              Our Corporate Principles
            </h2>
            <p className="text-gray-500 text-[15px] max-w-[650px] mx-auto">
              Our corporate principles guarantee that punters can enjoy the most liquid exchange, fastest money withdrawal, and customer support 24/7. Below are some of our main advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "100% Safe Ledgers", desc: "All the money on your account, open positions, and total deposits are saved with an additional layer of security as all the data is protected by SSL coding, and there are no theft cases from the system." },
              { title: "Fast-withdraw Policy", desc: "You will not wait for the confirmation that your application for withdrawal has been accepted. Our UPI/IMPS instant money withdrawal system transfers the money to your account within 30 minutes." },
              { title: "High Liquidity Exchanges", desc: "For popular events, we provide the highest betting limits. For example, our liquidity allows our VIP punters to make deposits without the fear of clogging." },
              { title: "24/7 Customer Support", desc: "Our managers are always available to answer your questions via WhatsApp, Telegram, and calls." }
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
