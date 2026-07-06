"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BannerCarousel from "../components/BannerCarousel";
import LobbyCarousel from "../components/LobbyCarousel";
import SportsCategories from "../components/SportsCategories";
import QuickWhatsAppGrid from "../components/QuickWhatsAppGrid";
import CricketOdds from "../components/CricketOdds";
import FootballOdds from "../components/FootballOdds";
import AccordionItem from "../components/Accordion";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-6 flex flex-col gap-8 font-sans">
        {/* Banner Carousels */}
        <section className="px-4">
          <BannerCarousel />
        </section>

        {/* Lobby Carousels */}
        <section className="px-4">
          <LobbyCarousel />
        </section>

        {/* Sports Categories Carousels */}
        <section className="px-4">
          <SportsCategories />
        </section>

        {/* Quick WhatsApp Grid */}
        <section className="px-4">
          <QuickWhatsAppGrid />
        </section>

        {/* Cricket Live Odds widget */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <CricketOdds />
        </section>

        {/* Football Live Odds widget */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <FootballOdds />
        </section>

        {/* Updated Content (full replacement from provided copy) */}
        <section className="px-4 py-16 bg-white border-y border-gray-200">
          <div className="max-w-[1100px] mx-auto text-center flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[28px] tracking-[1.5px] uppercase">
              CRICKET LIVE VIRTUAL PREMIUM
            </h2>

            <p className="text-gray-600 text-[16px] leading-[1.9] max-w-[850px] mx-auto font-sans">
              Reddy Anna Book – India online sports betting platform where you
              can trust a reliable source to get your ID created for fast
              withdrawals and hassle-free betting as you play any sports
              including IPL etc.
            </p>

            <p className="text-gray-600 text-[16px] leading-[1.9] max-w-[850px] mx-auto font-sans">
              Reddy Anna Book offers you quick creation of your ID, log into
              your dashboard and start enjoying sports betting and playing live
              cricket matches globally. Just Chat with our support team on
              WhatsApp to know latest sports match odds to place bets on any
              sports events with ease! With Reddy Anna Book you can have best
              online services as you can download their official application,
              get your ID created instantly and chat with customer care
              executives.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-[14px] font-bold">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c40000] text-white hover:bg-black px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Download Reddy Anna App
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-black px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Get ID on WhatsApp
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white hover:bg-[#c40000] px-6 py-3.5 rounded-md shadow-md transition-all duration-200 uppercase tracking-wide"
              >
                Contact Reddy Anna Support
              </a>
            </div>

            <div className="mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-[#c40000] text-white px-8 py-4 text-[18px] font-bold rounded-md shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:brightness-110 active:scale-98 transition-all uppercase tracking-wide"
              >
                💬 Chat Support on WhatsApp
              </a>
            </div>

            {/* Additional text blocks */}
            <div className="text-left w-full mt-2">
              <h3 className="text-[#c40000] font-rajdhani font-bold text-[22px] uppercase tracking-[0.6px]">
                Reddy Anna Book : India Most Trusted Website For Betting
              </h3>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                Welcome to Reddy anna book India, betting portal where you can
                place bets on cricket matches, football, teen patti and other
                sports with ease. With Reddy book, over decade old experience of
                betting in India, Reddy anna brings you the best offers with
                sports betting along with the fastest UPI withdrawal and 24×7
                customer support.
              </p>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                Whether you are a cricket, football, kabaddi, tennis lover or
                looking for casino games, with Reddy anna book you will have the
                best experience of betting.
              </p>

              <p className="text-gray-800 font-bold text-[16px] mt-4">
                Get Your Reddy Anna ID Now
              </p>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-4">
                Why Choose Reddy Anna Book?
              </h4>

              <ul className="text-gray-600 mt-3 flex flex-col gap-2.5 font-semibold text-[14.5px]">
                <li>✅ Established booking company with more than 10 years experience</li>
                <li>⚡ Fast account opening within less than 2 mins</li>
                <li>💸 Fastest Withdrawals on UPI same day processing, no extra charges</li>
                <li>🎯 Wide range of betting options on sports like cricket, football, kabaddi, tennis, esport and live casino</li>
                <li>🔐 100% secure online platform for hassle free betting</li>
                <li>📱 Betting services available through mobile</li>
                <li>🎁 Get exciting bonuses and offers on bets</li>
                <li>🕒 24×7 customer care services on WhatsApp</li>
                <li>♻️ Responsible and safe betting encouraged</li>
              </ul>

              <p className="text-gray-700 font-semibold mt-4">
                👉 Join India's most trusted website for sports betting where each bet is made with trust.
              </p>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-6">
                What Is Reddy Anna ID?
              </h4>

              <p className="text-gray-600 text-[15px] leading-relaxed mt-3 font-sans">
                Your Reddy Anna Online ID grants you access to all games and
                betting sports markets available on this portal. With one
                verified Reddy Anna ID you can:
              </p>

              <ul className="text-gray-600 mt-3 flex flex-col gap-2 font-semibold text-[14.5px] list-disc pl-5">
                <li>Make bets on cricket matches and football.</li>
                <li>Play live casino including teen patti, poker, roulette etc.</li>
                <li>View betting transactions, wallet balance and available offers.</li>
                <li>Make deposits and withdrawals through UPI and net banking instantly.</li>
                <li>Claim special gifts and bonuses for all registered users.</li>
              </ul>

              <p className="text-gray-600 text-[15px] leading-relaxed mt-3 font-sans">
                Every Reddy Anna ID comes with unique OTP and KYC verification
                to ensure that your deposits and personal information is secured
                at all times.
              </p>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-6">
                How to Verify Reddy Anna ID for Betting Access
              </h4>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                As a user it is important that you verify your Reddy Anna ID in
                order to enjoy seamless betting experience. All verified Reddy
                Anna users have access to all sports betting, live casino and
                special bonuses available on this portal.
              </p>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                In addition to this, it enables you to make deposits and
                withdrawals without hassle. That is why it is important that you
                verify your Reddy Anna account as soon as possible.
              </p>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-5">
                Here Is a Step-by-step Guide to Verify Your Reddy Anna ID
              </h4>

              <ol className="text-gray-600 mt-3 flex flex-col gap-2 font-semibold text-[14.5px] list-decimal pl-5">
                <li>Log into your account using your registered Reddy Anna ID and password</li>
                <li>Go to the user profile or account dashboard</li>
                <li>Fill in the personal details if any</li>
                <li>Send a request to verify your Reddy Anna account either through WhatsApp or by contacting the support</li>
                <li>Wait for a confirmation message from the support team after verification.</li>
              </ol>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-6">
                Benefits of Verifying Your Reddy Anna ID
              </h4>

              <ul className="text-gray-600 mt-3 flex flex-col gap-2 font-semibold text-[14.5px] list-disc pl-5">
                <li>Access your account with secure and hassle free online betting experience</li>
                <li>Make withdrawals and deposits on a daily basis with ease</li>
                <li>Enjoy all the features and benefits of sports betting and live casino</li>
                <li>Claim special bonuses and cashbacks applicable for verified users only</li>
                <li>Get complete assistance for all your account related queries</li>
              </ul>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-6">
                Important Tips for Verifying Your Reddy Anna ID
              </h4>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                It is important that you always verify your Reddy Anna ID using
                the official sources only. In case of any queries it is better
                that you contact the customer care executives rather than
                sharing your personal information with anyone.
              </p>

              <p className="text-gray-600 text-[15.5px] leading-relaxed mt-3 font-sans">
                Keeping your account verified will ensure that you do not face
                any inconvenience and enjoy hassle free betting experience at
                all times.
              </p>

              <h4 className="text-[#c40000] font-rajdhani font-bold text-[18px] uppercase tracking-[0.6px] mt-6">
                Verify Reddy Anna ID on WhatsApp
              </h4>
            </div>
          </div>
        </section>

        {/* Core Trusted Banner card */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg"
                alt="Reddy Anna Book – India's Most Trusted Online Betting Platform"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start">
              <h1 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna Book – India’s Most Trusted Online Betting Platform
              </h1>
              <h3 className="text-gray-800 font-rajdhani font-bold text-[20px] md:text-[18px] tracking-[1.5px] uppercase">
                Create Your Reddy Anna ID & Start Betting Instantly
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Welcome to <b>Reddy Anna Book</b>, India’s most reliable
                destination for{" "}
                <b>
                  sports betting, live casino gaming, and cricket entertainment
                </b>
                . With Reddy Book over a decade of trust, Reddy Anna has
                redefined online betting for Indian players — offering{" "}
                <b>instant ID creation</b>, <b>fast UPI withdrawals</b>, and{" "}
                <b>24/7 customer support</b>.
              </p>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Whether you’re here for{" "}
                <b>cricket, football, Teen Patti, or roulette</b>, Reddy Anna
                gives you the safest, fastest, and most rewarding experience in
                online betting.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Get Your Reddy Anna ID Today
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Reddy Anna Book */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Why Choose Reddy Anna Book?
            </h2>
            <p className="text-gray-600 text-[16px] max-w-[700px] mx-auto leading-relaxed">
              When it comes to online betting in India, <b>Reddy Anna</b> stands
              out for its legacy, security, and seamless experience. Here’s why
              thousands of players trust us daily:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
              {[
                {
                  title: "Established Reputation",
                  desc: "Backed by over 10 years of excellence in the betting industry.",
                },
                {
                  title: "Instant Reddy Anna ID",
                  desc: "Register and start betting in under 2 minutes.",
                },
                {
                  title: "Fast Withdrawals",
                  desc: "Same-day UPI and wallet transfers with no hidden fees.",
                },
                {
                  title: "Wide Betting Coverage",
                  desc: "Cricket, football, kabaddi, tennis, esports, and live casinos.",
                },
                {
                  title: "100% Secure Platform",
                  desc: "SSL encryption, OTP verification, and full KYC compliance.",
                },
                {
                  title: "Mobile-Friendly Access",
                  desc: "Play on the go with the Reddy Anna App.",
                },
                {
                  title: "Exciting Bonuses",
                  desc: "Welcome offers, cashback rewards, and festival promotions.",
                },
                {
                  title: "24/7 Support",
                  desc: "Reach us anytime via WhatsApp, Telegram, or live chat.",
                },
                {
                  title: "Responsible Gaming",
                  desc: "Tools for setting limits, self-exclusion, and safe betting practices.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:border-ra-gold shadow-md hover:scale-[1.02] transition-all text-left flex flex-col gap-2 relative before:content-['✅'] before:absolute before:right-4 before:top-4 before:text-green-500 before:text-lg"
                >
                  <h3 className="font-rajdhani font-bold text-[18px] text-[#1a1a2e] uppercase tracking-[0.5px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-800 text-[16px] font-bold mt-6 tracking-wide">
              👉 Join India’s most trusted betting community today — where every
              bet is backed by trust and transparency.
            </p>
          </div>
        </section>

        {/* What Is Reddy Anna ID */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start order-2 lg:order-1">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                What Is Reddy Anna ID?
              </h2>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Your <b>Reddy Anna ID</b> is your key to accessing all our games
                and betting services. With just one verified ID, you can:
              </p>
              <ul className="flex flex-col gap-2.5 text-gray-600 text-[15px] font-semibold">
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🏏</span> Go from
                  cricket betting to live casino games like Teen Patti, Poker,
                  and Roulette.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🎰</span> Enjoy
                  the excitement of sports betting and casino entertainment.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">📈</span> Track
                  and manage your deposits, withdrawals, wallet, and bonuses on
                  the betting dashboard.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">💸</span> Fund
                  your account and withdraw winnings with ease through UPI or
                  NetBanking.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c40000] text-[18px]">🎁</span> Unlock
                  special offers and promotions.
                </li>
              </ul>
              <p className="text-gray-600 text-[15px] leading-[1.8] font-sans">
                Every Reddy Anna ID is created with a verified OTP and KYC
                process to protect your account and deposits.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md order-1 lg:order-2">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/What-Is-Reddy-Anna-ID-1024x597.jpg"
                alt="What Is Reddy Anna ID"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* How to Verify Reddy Anna ID */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-xl border border-gray-150 flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] text-center uppercase tracking-[1px]">
              How to Verify Reddy Anna ID to Make Betting Safe: A Step by Step Guide
            </h2>

            <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg flex flex-col gap-3">
              <p className="text-gray-600 text-[15.5px] leading-relaxed">
                Verifying the Reddy Anna ID helps you to get full access to the
                betting services on the Reddy Anna website. The verified Reddy
                Anna ID ensures you that the amount deposited on your account is
                well secured on the betting platform. In addition, it also
                allows you to access all the payment methods on the site, such
                as withdrawal and deposit options
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed">
                It also entitles you to all the features on the board, such as
                sports betting, live casino, and many more other promotions.
                Therefore, as a Reddy Anna user, make sure to verify your
                account at the earliest to enjoy all these benefits.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col gap-3">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                How to Verify Reddy Anna ID: A Step by Step Guide
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed font-semibold">
                Below are the steps that will help you know how to verify Reddy
                Anna ID:
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] leading-relaxed font-semibold pl-5">
                <span>• Log in to your account by typing in your Reddy Anna ID and the set password.</span>
                <span>• Go to your account or profile page and fill in the required information if any.</span>
                <span>• Upload the verification documents to the customer support service via WhatsApp</span>
                <span>• Wait for a confirmation message from the customer support team that your Reddy Anna ID has been verified.</span>
              </div>
            </div>

            <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg flex flex-col gap-3">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                Why Should You Verify Your Reddy Anna ID?
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed font-semibold">
                Below are some reasons why you should verify your Reddy Anna ID:
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] leading-relaxed font-semibold pl-5">
                <span>• It grants you full access to your account and protects it from being tampered with</span>
                <span>• It allows you to withdraw and deposit your money conveniently and fast</span>
                <span>• It entitles you to all the services available on the Reddy Anna application, such as sports betting, live casino, and other promotions</span>
                <span>• It makes you eligible to claim all the bonuses and rewards that come along with the application</span>
                <span>• It also allows you to get better customer care services</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col gap-2">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                Tips for Verifying Your Reddy Anna ID and Staying Safe
              </h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                You should always ensure that you verify your Reddy Anna ID
                through the official website to avoid scams. Also, avoid sharing
                your account details with unauthorized persons. This way, you
                will have a fantastic time betting on the Reddy Anna application
                without any hindrances.
              </p>
            </div>

            <div className="text-center mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[15px] tracking-wider transition-all inline-flex items-center gap-2"
              >
                Verify Reddy Anna ID on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Get Cricket ID now with image */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Get Your Official Reddy Anna Book Cricket ID Now
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-[1.8] font-sans">
                Are you looking for a hassle-free way to stay up-to-date with
                all the latest happenings in cricket? Look no further than the{" "}
                <b>Official Reddy Anna Book Cricket ID Provider</b>, where you
                can be ensured of a smooth and quick registration process, as
                well as a seamless experience when using the platform.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-[1.8] font-sans">
                By registering with an official cricket ID, you can be
                confident that your experience will be optimized for speed and
                performance, ensuring that you don't miss out on any of the
                action, especially during high-profile events such as the IPL
                2026.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#ffcc00] hover:bg-black text-black hover:text-white font-bold uppercase rounded-full shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Get Online Cricket ID
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/03/Get-Your-Official-Reddy-Anna-Book-IPL-2026-Now-1024x683.jpg"
                alt="Get Your Official Reddy Anna Book Cricket ID Now"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Top Platforms Grid */}
        <section className="px-4 py-16 bg-[#050505] border-t border-[#ffcc00]/25 rounded-2xl max-w-[1240px] w-full mx-auto">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[38px] md:text-[28px] uppercase tracking-wide leading-tight">
              Top Websites of Cricket ID And Also Betting Id On Reddy Anna Book
            </h2>
            <p className="text-gray-300 text-[16px] max-w-[850px] mx-auto leading-relaxed">
              Make use of India's leading platforms with a single{" "}
              <strong className="text-[#ffcc00]">Online Cricket ID</strong> and
              bet like a pro with Cricbet99, Gold365, Lotus365, Laser247, and
              more. You get fast logins and access to great bonuses.
            </p>

            <a
              href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4.5 bg-gradient-to-r from-[#ffcc00] to-[#ffaa00] text-black font-extrabold rounded-full shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:bg-none hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-[15px] mt-2 mb-10"
            >
              GET ONLINE CRICKET ID
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {[
                {
                  name: "Cricbet99 ID Cricket Id",
                  bonus: "₹500 - ₹2000",
                  min: "₹100",
                  border: "border-[#ffcc00]",
                  desc: [
                    "Live fast match info",
                    "Best for cricket",
                    "Seamless mobile",
                  ],
                  tagline: "Speed and control",
                },
                {
                  name: "Gold365 ID Cricket Id",
                  bonus: "₹1000 - ₹3000",
                  min: "₹200",
                  border: "border-[#ffcc00]",
                  desc: [
                    "Premium design",
                    "Speed performance",
                    "Multi-sports",
                  ],
                  tagline: "Premium experience with speed",
                },
                {
                  name: "Lotus365 ID Cricket Id",
                  bonus: "₹800 - ₹2500",
                  min: "₹100",
                  border: "border-[#00cc66]",
                  desc: [
                    "Simple beginner-friendly",
                    "Stable and secured",
                    "Easy to navigate",
                  ],
                  tagline: "Perfect for newbie",
                },
                {
                  name: "Reddybook ID Cricket Id",
                  bonus: "₹500 - ₹1500",
                  min: "₹100",
                  border: "border-[#ffcc00]",
                  desc: [
                    "Trusted platform",
                    "Fast Cricket login",
                    "Performance that you can rely on",
                  ],
                  tagline: "Trusted by thousands",
                },
                {
                  name: "Reddy Book Club Cricket Id",
                  bonus: "₹1500 - ₹5000",
                  min: "₹500",
                  border: "border-[#8b0000]",
                  desc: [
                    "VIP experience",
                    "High-end features",
                    "Premium performance",
                  ],
                  tagline: "",
                  vip: true,
                },
                {
                  name: "Laser247 ID Cricket Id",
                  bonus: "₹1000 - ₹4000",
                  min: "₹200",
                  border: "border-[#ff0033]",
                  desc: [
                    "Live fast match updates",
                    "No lag performance",
                    "Mobile optimized",
                  ],
                  tagline: "Speed gives you advantage",
                },
                {
                  name: "Betbhai9 ID Cricket Id",
                  bonus: "₹500 - ₹2000",
                  min: "₹100",
                  border: "border-[#ff3333]",
                  desc: [
                    "Simple interface",
                    "Quick access",
                    "Best for newbie",
                  ],
                  tagline: "Simple and effective",
                },
                {
                  name: "11xplay ID Cricket Id",
                  bonus: "₹800 - ₹3000",
                  min: "₹200",
                  border: "border-[#0066ff]",
                  desc: [
                    "Massive sports selection",
                    "Smooth dashboard",
                    "Stable performance",
                  ],
                  tagline: "All in one sports platform",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-6 rounded-2xl flex flex-col gap-3 relative transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] border-t-[5px] ${card.border}`}
                >
                  <h3 className="font-rajdhani font-bold text-[20px] text-black tracking-[0.5px]">
                    {card.name}
                  </h3>
                  <div className="flex flex-col gap-0.5 font-bold text-[13px]">
                    <span className="text-[#00aa88]">Bonus {card.bonus}</span>
                    <span className="text-[#ff6600]">Min ID {card.min}</span>
                  </div>

                  <ul className="list-disc pl-5 flex flex-col gap-1.5 text-gray-700 text-[13px] leading-relaxed my-2">
                    {card.desc.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>

                  {card.tagline && (
                    <p className="font-bold text-[13px] text-gray-500 italic mt-auto mb-2 border-t border-gray-100 pt-3">
                      {card.tagline}
                    </p>
                  )}

                  <a
                    href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-black hover:bg-[#ffcc00] hover:text-black border-2 border-black hover:border-[#ffcc00] text-white font-bold rounded-full text-[13px] uppercase tracking-wide transition-all duration-300 shadow-sm"
                  >
                    {card.vip ? "Get VIP ID" : "Get ID"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Create Your Reddy Anna Account */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                How to Create Your Reddy Anna Account
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Getting started with Reddy Anna is a breeze!
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                You can create your account by visiting the official website or
                downloading the mobile application.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Once you are on the homepage, click on the &ldquo;Sign up / Get
                ID&rdquo; tab.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Then, enter your personal details like name, phone number, email
                address, and password.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                After that, you will have to verify your phone number by
                entering the OTP sent to your mobile number.
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Finally, you can add money to your account using UPI or
                NetBanking and start betting right away!
              </p>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Sports betting, live casinos, and exclusive markets are just
                some of the thrilling activities that await you on this
                platform.
              </p>
              <p className="text-gray-800 text-[14px] font-bold mt-1">
                Make sure to always create your account through the official
                website or mobile application to avoid any fraudulent agents.
              </p>
              <a
                href="/signup"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Create Your Reddy Anna ID Now
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/How-to-Create-Your-Reddy-Anna-Account-1024x597.jpg"
                alt="How to Create Your Reddy Anna Account"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Reddy Anna Login Quick secure access */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md order-2 lg:order-1">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Login-—-Reddybook-login-securely-1024x597.jpg"
                alt="Reddy Anna Login"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start order-1 lg:order-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna Login &ndash; Login to your Betting Account in Few
                Seconds
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
                Do you have a Reddy Anna account? Log In to your Reddy Anna
                betting account using your mobile number/user ID and password
                and start betting right away.
              </p>

              <div className="flex flex-col gap-2 text-gray-700 text-[14.5px] font-semibold leading-relaxed">
                <span className="font-bold text-gray-900">Login Steps:</span>
                <span>1. Go to the Reddy Anna login website</span>
                <span>2. Fill in your mobile number/user ID</span>
                <span>
                  3. Enter your password and the OTP that you receive on your
                  mobile
                </span>
                <span>4. Click on Reddy Anna Login to start betting</span>
              </div>

              <a
                href="/login"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Reddy Anna Login
              </a>
            </div>
          </div>
        </section>

        {/* Reddy Anna App */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col gap-5 items-start">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Reddy Anna App &ndash; Bet Anytime On The Run
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Reddy Anna is an innovative betting platform which provides you
                an effortless betting experience on the go.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Whether you are betting at home or at a hotel you can download
                the Reddy Anna app on your android and iOS devices and access it
                anytime and anywhere.
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] font-semibold">
                <span className="font-bold text-gray-900 uppercase tracking-wide">
                  Some of its amazing features are:
                </span>
                <li className="list-disc pl-1">
                  Logging in just one click with your Reddy Anna ID
                </li>
                <li className="list-disc pl-1">
                  Getting live scores &amp; notifications
                </li>
                <li className="list-disc pl-1">
                  Making payments via secured UPI &amp; wallets
                </li>
                <li className="list-disc pl-1">
                  Enjoying all sports &amp; casino games
                </li>
                <li className="list-disc pl-1">
                  Withdrawing cash in just a few minutes
                </li>
              </div>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Download the Reddy Anna App
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md flex justify-center">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/Reddy-Anna-App-–-Betting-on-the-Go.webp"
                alt="Reddy Anna App"
                className="w-full max-w-[450px] h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Cricket Betting guide with image */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="rounded-xl overflow-hidden shadow-md flex justify-center order-2 lg:order-1">
              <img
                src="https://reddysports.co/wp-content/uploads/2025/11/Cricket-Betting-with-Reddy-Anna-Book.webp"
                alt="Cricket Betting with Reddy Anna Book"
                className="w-full max-w-[450px] h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 items-start order-1 lg:order-2">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] leading-[1.3] uppercase">
                Cricket Betting With Reddy Anna Book
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our popular sports betting activity with Reddy Anna Book is
                cricket! At Reddy Anna Book, we are offering you betting on
                various types of cricket matches such as
              </p>
              <div className="flex flex-col gap-2.5 text-gray-600 text-[14.5px] font-semibold">
                <li className="list-none flex items-center gap-2">
                  🏆 <b>IPL (Indian Premier League)</b> - T20 and ODI games.
                </li>
                <li className="list-none flex items-center gap-2">
                  🌍 <b>ICC T20 and ODI World Cup</b>
                </li>
                <li className="list-none flex items-center gap-2">
                  🏏 <b>BPL, CPL, Hundred, and other popular leagues</b>
                </li>
                <li className="list-none flex items-center gap-2">
                  🏠 <b>National leagues and test matches</b>
                </li>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mt-2">
                You may place the bets on the live match, and guess the correct
                scores or outcomes including the <b>Man of the Match</b>. All
                the odds are changing every ball!
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-2"
              >
                Start Cricket Betting Now
              </a>
            </div>
          </div>
        </section>

        {/* Popular Sports Guides lists */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Betting On Sports In Reddy Anna: Bet On All Your Favourite Events!
            </h2>
            <p className="text-gray-600 text-[15.5px] max-w-[850px] mx-auto leading-relaxed">
              Sports betting on <b>Reddy Anna</b> gives you a diverse range of
              tournaments, leagues, and live match odds to choose from! Whether
              you are a cricket lover or follow global sports like Football,
              Kabaddi, Badminton, Tennis, etc. the Reddy Anna experience will
              be about offering you the most updated odds for every match along
              with lightning-fast settlement features!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10 text-left">
              {[
                {
                  title: "Betting On Cricket",
                  desc: "Cricket is the most popular sports betting category on Reddy Anna due to its extreme popularity and a packed tournament schedule. Bet live on popular cricket leagues like the IPL and ICC tournaments or session runs and top wicket-takers! Sports betting on Reddy Anna makes betting on the sport a whole lot more exciting!",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
                },
                {
                  title: "Betting On Kabaddi",
                  desc: "The sport of Kabaddi is rising in fame and popularity with the Pro Kabaddi League tournaments taking place year after year. Bet on Kabaddi matches with options to bet on the match winner, total raid points, and much more!",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-1024x683.jpg",
                },
                {
                  title: "Betting On Football",
                  desc: "Football is one of the most played and followed sports globally! With leagues like the Premier League and Champions League, there is always a game to watch or bet on! Bet on live matches, shootouts, corner kicks, and goals during the football season! With Football's thrilling nature, sports betting can be exciting and electrifying!",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Football-Betting-1024x683.jpg",
                },
                {
                  title: "Betting On Tennis",
                  desc: "Tennis matches do not last as long as team sports do. Bet on popular events like Wimbledon, Australia Open, US Open, etc., with odds on total games and live set drifts with HD streaming!",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Tennis-Betting-1024x683.png",
                },
                {
                  title: "Betting On Basketball",
                  desc: "Bet on the NBA or other leagues for points line spreads, runs, and high-paced table-topping action! Many exciting basketball events are available for sports betting on Reddy Anna.",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Basketball-Betting-1024x683.jpg",
                },
                {
                  title: "Betting On Esports",
                  desc: "Sports betting on esports is the latest and most prominent category with games like BGMI, CS:GO, Dota 2, Valorant, and many more!",
                  img: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-book-Esports-Betting-1024x683.jpg",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden border border-gray-150 shadow-md flex flex-col gap-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[180px] object-cover select-none"
                  />
                  <div className="px-5 pb-5 flex flex-col gap-2">
                    <h3 className="font-rajdhani font-bold text-[20px] text-[#c40000] uppercase tracking-[0.5px]">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 border border-gray-100 rounded-xl max-w-[800px] mt-6 flex flex-col gap-2 text-left">
              <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase">
                What Makes Sports Betting On Reddy Anna A Unique Experience?
              </h3>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 flex flex-col gap-1.5 font-semibold">
                <li>Live match odds</li>
                <li>UPI deposits and quick withdrawals</li>
                <li>Sports betting options year-round</li>
                <li>User-friendly mobile betting</li>
                <li>24×7 customer care assistance</li>
              </ul>
            </div>

            <a
              href="/sports-betting"
              className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all mt-4"
            >
              Explore Sports Betting Now
            </a>
          </div>
        </section>

        {/* Casino Games section */}
        <section className="px-4 max-w-[1240px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] tracking-[1.5px] uppercase">
              Casino Games on Reddy Anna
            </h2>
            <p className="text-gray-600 text-[15.5px] max-w-[850px] leading-relaxed">
              Casino lovers who thrive on skill-based card games, fast-paced
              table gambling, and slot machine fun will enjoy the Reddy Anna
              casino platform. With realistic dealer interactions, engaging
              tables, and quick virtual payouts, Reddy Anna recreates a thrilling
              casino ambiance right at your screen.
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 mt-4 max-h-[400px]">
              <img
                src="https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg"
                alt="Casino Games on Reddy Anna"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Casino games features grid cards */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              Reddy Anna Live Casino Games &amp; Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-left">
              {[
                {
                  title: "Teen Patti &ndash; India's Popular Game",
                  desc: "While Teen Patti continues to rule Indian casinos, Reddy Anna's live variant offers added thrill with realistic avatar-based tables where enthusiasts can test their skills against human opponents. The game variant includes side bets with enhanced limits for higher stakes.",
                  bg: "bg-[#fff5f5] border-[#c40000]",
                },
                {
                  title: "Poker &ndash; Strategic Card Battles",
                  desc: "From Texas Hold'em to Omaha, poker fans can engage in competitive multiplayer tables or try their hand at VIP tournaments hosted on Reddy Anna's poker segment. The platform also hosts casual beginner tables for honing bluffing skills.",
                  bg: "bg-gray-50 border-gray-300",
                },
                {
                  title: "Roulette &ndash; Wheel of Fortune Bets",
                  desc: "Place bets on iconic red/black odds or number grids during live roulette spins. The Reddy Anna platform offers high-definition video streaming of the roulette wheel action with real-time settlement of winning bets.",
                  bg: "bg-[#fff5f5] border-[#c40000]",
                },
                {
                  title: "Blackjack &ndash; 21-point Wagering Fun",
                  desc: "Beat the dealer and win big with this popular 21-point game variant. Strategic moves like pair splitting and doubling down enhance winning probabilities during live dealer interactions at Reddy Anna's blackjack tables.",
                  bg: "bg-gray-50 border-gray-300",
                },
                {
                  title: "Slot Games &ndash; Jackpot Pursuits",
                  desc: "From mythical themes to adventurous video slots, Reddy Anna's slot segment offers vibrant gaming amusement with features like free spin bonuses, progressive jackpots, and instant win triggers.",
                  bg: "bg-[#fff5f5] border-[#c40000]",
                },
                {
                  title: "Andar Bahar & Baccarat &ndash; Speedy Table Games",
                  desc: "For quick table game fix, Andar Bahar and Baccarat offer exciting prediction-based betting with easy rules. In Andar Bahar, players guess which open side will reveal a matching card first, while Baccarat lets you bet on banker/player odds.",
                  bg: "bg-gray-50 border-gray-300",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border-l-4 shadow-md flex flex-col gap-2 ${card.bg}`}
                >
                  <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 border-2 border-[#c40000] rounded-xl flex flex-col gap-3 mt-6">
              <h3 className="font-rajdhani font-bold text-[19px] text-[#c40000] uppercase text-center">
                Top Benefits of Casino Games on Reddy Anna
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 text-[14px] text-gray-600 font-semibold mt-2">
                <li>💸 Instant deposits and UPI withdrawals</li>
                <li>🎥 Real dealer interaction in HD quality</li>
                <li>🕒 24×7 live casino availability</li>
                <li>🔐 Secure and trustworthy platform</li>
                <li>🎁 Welcome cashbacks &amp; rewards</li>
              </ul>
            </div>

            <div className="text-center mt-6">
              <a
                href="/casino"
                className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all"
              >
                Play Live Casino Now
              </a>
            </div>
          </div>
        </section>

        {/* How Reddy Anna Book Works complete guide */}
        <section className="px-4 max-w-[1100px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-xl border border-gray-150 flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              How Reddy Anna Book Works &ndash; Easy Guide
            </h2>
            <div className="bg-[#fff5f5] p-6 border-l-4 border-[#c40000] rounded-r-lg">
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Reddy Anna book is an incredible online betting platform where
                you can enjoy sports betting, live casino games, and real-time
                gaming all under one roof. This portal aims to deliver unmatched
                convenience in terms of navigating the site, making deposits,
                and placing bets with ease.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mt-3">
                Let&rsquo;s take a brief tour of how to start betting on the
                Reddy Anna book site.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
              {[
                {
                  step: "1. Get your Reddy Anna ID",
                  desc: "Start by registering or using the existing link provided by our authorized agent.",
                },
                {
                  step: "2. Log in to the portal",
                  desc: "You will get a dashboard with numerous daily sports matching arrays to bet on.",
                },
                {
                  step: "3. Fund your account",
                  desc: "Deposit money using trusted UPI wallets and local net-banking platforms.",
                },
                {
                  step: "4. Place your bets",
                  desc: "Select your desired matches, click on the drift odd, and confirm your slip.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border-t-4 border-[#c40000] p-5 rounded-lg shadow-sm flex flex-col gap-2 hover:-translate-y-1 transition-all"
                >
                  <h3 className="font-rajdhani font-bold text-[17px] text-[#c40000] uppercase">
                    {item.step}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-md shadow-md text-[14px] tracking-wide transition-all"
              >
                Open a Free Account
              </a>
            </div>
          </div>
        </section>

        {/* Reddy Anna Bonuses */}
        <section className="px-4 max-w-[1200px] w-full mx-auto py-8">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-6 text-center">
            <h2 className="text-[#8b0000] font-rajdhani font-extrabold text-[42px] md:text-[32px] uppercase">
              Reddy Anna Bonuses
            </h2>
            <p className="text-gray-500 max-w-[700px] mx-auto text-[15.5px] leading-relaxed">
              Reward your gameplay with exciting deposits and cashback offers.
              Unlock up to 100% welcome match bonus on your first ID deposit
              today!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 font-bold text-[13.5px]">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#c40000] hover:bg-black text-white uppercase rounded-md transition-all duration-200"
              >
                Claim First Deposit Bonus
              </a>
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-black text-white uppercase rounded-md transition-all duration-200"
              >
                Claim WhatsApp Bonus Code
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 max-w-[850px] w-full mx-auto py-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] text-center uppercase tracking-[1px]">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="bg-white p-6 md:p-4 rounded-xl shadow-md border border-gray-150 flex flex-col gap-1">
              {[
                {
                  q: "What is Reddy Anna Book?",
                  a: "Reddy Anna Book is India’s trusted online sports betting and live casino platform where players can bet on cricket, football, kabaddi, casino games and much more with fast UPI withdrawals and 24/7 support.",
                },
                {
                  q: "How do I create my Reddy Anna ID?",
                  a: "Click Sign Up / Get ID, enter your details, verify via OTP and deposit funds. Your account gets activated instantly and you can start betting within minutes.",
                },
                {
                  q: "Is Reddy Anna legal and safe?",
                  a: "Yes. Reddy Anna operates responsibly under international gaming standards and follows SSL security, OTP verification and full KYC compliance to protect users and ensure safe gaming.",
                },
                {
                  q: "Can I bet on IPL and cricket matches?",
                  a: "Absolutely. Reddy Anna provides live cricket odds for IPL, T20 World Cup, ODI World Cup and all major cricket leagues and tournaments.",
                },
                {
                  q: "How do I deposit and withdraw money?",
                  a: "You can deposit and withdraw through UPI, NetBanking, IMPS, e-wallets and debit/credit cards. Verified users enjoy same-day UPI withdrawals with no hidden fees.",
                },
                {
                  q: "Is there a Reddy Anna mobile app?",
                  a: "Yes. The Reddy Anna App for Android and iOS allows for live betting, casino, instant deposits and withdrawals plus push notifications.",
                },
                {
                  q: "What do I do if I experience a problem during login or payment?",
                  a: "You may raise the issue on WhatsApp, through live chat or email at Support@reddysports.co for immediate assistance. We have 24X7 support teams standing by to address any account, payment or betting queries you may have",
                },
                {
                  q: "What is the legal age to use Reddy Anna?",
                  a: "You must be 18 years or older to register, make a deposit or place bets on the Reddy Anna platform.",
                },
              ].map((faq, idx) => (
                <AccordionItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Ready to start Journey call-out */}
        <section className="px-4 py-16 bg-white border-t border-gray-200">
          <div className="max-w-[850px] mx-auto text-center flex flex-col gap-6">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[32px] md:text-[26px] tracking-[1px] uppercase">
              Ready to Start Your Betting Journey with Reddy Anna Today
            </h2>
            <p className="text-gray-600 text-[15.5px] leading-relaxed font-sans">
              Counted among the best Book sites in India,{" "}
              <b>Reddy Anna Book</b> offers its users fast withdrawals, safe
              betting options and round the clock customer support. Be it
              international sports betting on cricket, football, kabaddi or
              trying your hands at the live casino, the excitement begins with
              your Reddy Anna ID. With instant account activation, UPI deposits
              and withdrawals, live scores and a seamless digital experience,
              Reddy Anna promises to deliver a secure and rewarding betting
              experience for all
            </p>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg text-left max-w-[600px] mx-auto flex flex-col gap-2 text-[14.5px] font-semibold text-gray-700 mt-2">
              <h3 className="font-rajdhani font-bold text-[#c40000] text-[18px] uppercase">
                Your Winning Moment Starts Now
              </h3>
              <span>✔ Signup to open your Reddy Anna ID</span>
              <span>✔ Login to your account on desktop or mobile</span>
              <span>
                ✔ Place live bets on cricket, football, kabaddi, casino and more
              </span>
              <span>✔ Withdraw your betting rewards instantly via UPI</span>
            </div>

            <p className="text-gray-800 font-bold text-[16px] italic mt-4">
              Don&rsquo;t Wait! The next big match and big win are waiting for
              you!
            </p>

            <div className="mt-4">
              <a
                href="https://wa.me/916026703858?text=Hello,%20Want%20Online%20ID"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4.5 bg-[#c40000] hover:bg-black text-white font-extrabold uppercase rounded-md shadow-lg text-[15px] tracking-wider transition-all"
              >
                Get Reddy Anna ID Now
              </a>
            </div>

            <p className="text-gray-400 text-[13px] italic mt-4">
              Bet Smart. Bet Safe. Ready Bet with India&rsquo;s most trusted
              sports betting portal, Reddy Anna.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
