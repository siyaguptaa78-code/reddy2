"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import AccordionItem from "../../components/Accordion";
import { BlogCtaCard } from "../../components/BlogCtaCard";

export default function ReddyOfficialGuidePage() {
  const sportsCategories = [
    { name: "Cricket", icon: "🏏", desc: "IPL, ICC World Cup, Test matches, bilateral series, pre-match & live in-play markets" },
    { name: "Football", icon: "⚽", desc: "UEFA Champions League, English Premier League, FIFA tournaments, major international fixtures" },
    { name: "Kabaddi", icon: "🤼", desc: "Pro Kabaddi League (PKL), national championships, comprehensive raid & tackle markets" },
    { name: "Tennis", icon: "🎾", desc: "Grand Slams (Wimbledon, US Open, Australian Open, Roland Garros), ATP & WTA tour events" },
    { name: "Basketball", icon: "🏀", desc: "NBA, FIBA tournaments, European basketball leagues, quarter-by-quarter scoring lines" },
    { name: "Esports", icon: "🎮", desc: "Counter-Strike 2, Dota 2, Valorant, BGMI, live competitive tournament markets" },
  ];

  const casinoGames = [
    { title: "Teen Patti", type: "Card Game", desc: "Classic Indian 3-card game with real-time live dealers and side bets." },
    { title: "Andar Bahar", type: "Card Game", desc: "Popular traditional card guessing game offering swift 50/50 outcomes." },
    { title: "Poker", type: "Table Game", desc: "Texas Hold'em, Omaha, and multi-player live poker tables." },
    { title: "Roulette", type: "Wheel Game", desc: "European, American, and lightning speed roulette wheels." },
    { title: "Blackjack", type: "Card Game", desc: "Beat the dealer to 21 with multi-hand and VIP high-roller tables." },
    { title: "Baccarat", type: "Card Game", desc: "Player vs Banker classic casino card game with low house edge." },
    { title: "Slot Games", type: "RNG Slots", desc: "Vibrant video slots, megaways, and progressive jackpot titles." },
    { title: "Live Casino Games", type: "Live Dealer", desc: "HD interactive live streaming dealers for an authentic casino experience." },
  ];

  const securityChecklist = [
    { item: "Use the Correct Website Address", tip: "Always double-check you are visiting official and verified URLs." },
    { item: "Check Connection Security", tip: "Look for HTTPS and the secure padlock icon in your browser address bar." },
    { item: "Never Share Passwords", tip: "Your password is confidential and should never be disclosed to anyone." },
    { item: "Never Share OTPs with Anyone", tip: "Genuine representatives will never request your OTP, PIN, or verification code." },
    { item: "Avoid Saving Credentials on Shared Devices", tip: "Always log out after use and use private/incognito browsing if on shared PCs." },
    { item: "Update Password If Compromised", tip: "Immediately change your credentials if you suspect unauthorized access." },
  ];

  const depositChecks = [
    "Available payment methods (UPI, IMPS, Net Banking)",
    "Minimum and maximum transaction limits",
    "Withdrawal requirements & settlement speed",
    "Mandatory account verification (KYC/OTP)",
    "Applicable platform or transaction fees",
    "Account limits and rollover conditions",
    "Current operational terms and conditions",
  ];

  const evaluationChecklist = [
    { check: "Correct website", why: "Reduces the risk of impersonation and phishing scams" },
    { check: "Terms and conditions", why: "Explains platform rules, dispute policies, and gameplay guidelines" },
    { check: "Privacy policy", why: "Explains data handling, privacy security, and user protection" },
    { check: "Account verification", why: "Helps protect account access and guarantees legitimate owner withdrawals" },
    { check: "Payment terms", why: "Explains supported deposit channels, processing timelines, and payout rules" },
    { check: "Customer support", why: "Provides prompt assistance for account, login, and balance issues" },
    { check: "Legal requirements", why: "Rules and gaming restrictions differ significantly by geographic jurisdiction" },
    { check: "Responsible gaming info", why: "Helps users understand potential risks and maintain financial discipline" },
  ];

  const warningSigns = [
    "Spending more money or time than initially planned",
    "Trying to recover past losses immediately (chasing losses)",
    "Borrowing money or using credit to continue playing",
    "Hiding gaming participation from family or friends",
    "Spending excessive time gaming at the expense of work or family",
    "Continuing to gamble despite mounting financial difficulties",
  ];

  const faqs = [
    {
      q: "What is ReddyOfficial?",
      a: "ReddyOfficial is the website associated with the Reddy Anna brand and provides information concerning sports, gaming, account access, verification, and related services.",
    },
    {
      q: "What is Reddy Anna?",
      a: "Reddy Anna is the primary brand presented on ReddyOfficial. The website associates the brand with sports including cricket, football, tennis, kabaddi, basketball, and esports, along with casino and gaming categories.",
    },
    {
      q: "What is a Reddy Anna ID?",
      a: "A Reddy Anna ID is an account identifier used to access the platform's available services. ReddyOfficial also describes OTP and KYC-related account verification to ensure secure account access.",
    },
    {
      q: "How do I access Reddy Anna login?",
      a: "Existing users can use the login process provided through the current ReddyOfficial website. Always verify the domain before entering account credentials and never share your OTP.",
    },
    {
      q: "Does ReddyOfficial cover cricket?",
      a: "Yes. Cricket is one of the main sports discussed on ReddyOfficial, with comprehensive information covering major domestic leagues such as IPL, TNPL, and international competitions.",
    },
    {
      q: "What other sports are discussed by ReddyOfficial?",
      a: "The website currently discusses football, tennis, kabaddi, basketball, and esports in addition to extensive cricket coverage.",
    },
    {
      q: "What should I check before using ReddyOfficial?",
      a: "Review the current terms, privacy policy, account requirements, payment rules, verification requirements, and the laws applicable to your geographic location.",
    },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ReddyOfficial: Complete Guide to Reddy Anna, Sports, Features, Login and Online Gaming",
            "description": "Comprehensive guide to ReddyOfficial and Reddy Anna: sports coverage, cricket markets, account ID creation, login security, casino games, and responsible gaming best practices.",
            "author": {
              "@type": "Organization",
              "name": "ReddyOfficial Editorial Team",
            },
            "publisher": {
              "@type": "Organization",
              "name": "ReddyOfficial",
              "logo": {
                "@type": "ImageObject",
                "url": "https://reddyofficial.com/logo.jpeg",
              },
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://reddyofficial.com/reddyofficial-guide",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 font-sans">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-150 flex flex-col gap-8 text-[#1a1a2e] text-[15.5px] leading-relaxed">
            
            {/* Header Section */}
            <div className="border-b border-gray-100 pb-6 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#c40000]/10 text-[#c40000] text-[11px] uppercase tracking-[2px] font-extrabold px-3.5 py-1.5 rounded-full">
                  📘 Official Platform Guide
                </span>
                <span className="text-gray-400 text-xs font-semibold">
                  Updated Today • 8 Min Read
                </span>
              </div>
              <h1 className="text-[#c40000] font-rajdhani font-black text-[34px] md:text-[40px] leading-[1.2] uppercase">
                ReddyOfficial: Complete Guide to Reddy Anna, Sports, Features, Login and Online Gaming
              </h1>
              <p className="text-gray-600 text-[16px] leading-relaxed font-normal">
                Everything you need to know about the ReddyOfficial platform, Reddy Anna sports exchange, account ID setup, login security protocols, casino categories, and responsible play.
              </p>
            </div>

            {/* Intro Content */}
            <div className="flex flex-col gap-4">
              <p>
                <strong>ReddyOfficial</strong> is an online platform associated with the <strong>Reddy Anna</strong> brand and provides information and access related to sports betting, live sports, and casino-style gaming. The website covers popular categories including cricket, football, tennis, kabaddi, basketball, and esports, along with games such as poker, roulette, Teen Patti, blackjack, and other casino formats.
              </p>
              <p>
                For people searching for <em>ReddyOfficial</em>, <em>Reddy Anna</em>, or a <em>Reddy Anna ID</em>, it is useful to understand how the platform is structured, what categories it offers, and what users should consider before using an online gaming service.
              </p>

              {/* Legal Alert Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 md:p-5 rounded-2xl text-amber-950 text-sm leading-relaxed flex items-start gap-3 my-2">
                <span className="text-xl">⚠️</span>
                <div>
                  <strong className="block text-amber-900 font-bold mb-1 uppercase tracking-wide text-xs">
                    Important Legal Notice:
                  </strong>
                  Online gaming and money-based gaming are subject to laws and restrictions that can vary by location and change over time. Always verify the current legal requirements applicable to your location before participating in any activity involving money.
                </div>
              </div>
            </div>

            {/* Section 1: What Is ReddyOfficial? */}
            <div className="flex flex-col gap-4" id="what-is-reddyofficial">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                What Is ReddyOfficial?
              </h2>
              <p>
                ReddyOfficial is the website associated with the Reddy Anna brand. The site presents Reddy Anna as a platform covering sports markets, live gaming, and casino categories, with particular emphasis on cricket and other popular sports.
              </p>
              <p>
                The website also provides information about account creation, Reddy Anna ID verification, login, payment methods, customer support, and different sports and gaming categories.
              </p>
              <p>
                For someone researching ReddyOfficial online, the key point is that the website functions as an information and access point for services associated with the Reddy Anna brand.
              </p>
            </div>

            {/* Section 2: What Is Reddy Anna? */}
            <div className="flex flex-col gap-4" id="what-is-reddy-anna">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                What Is Reddy Anna?
              </h2>
              <p>
                Reddy Anna is the primary brand presented throughout ReddyOfficial. The website describes Reddy Anna as a sports betting and online gaming platform with coverage extending across multiple sports and casino categories.
              </p>
              <p>
                The brand places particular emphasis on cricket, while also presenting football, kabaddi, tennis, basketball, and esports. ReddyOfficial also describes an account system based around the Reddy Anna ID, which users can use to access the available services.
              </p>
            </div>

            {/* Section 3: Sports Coverage */}
            <div className="flex flex-col gap-4" id="sports-coverage">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Reddy Anna Sports Coverage
              </h2>
              <p>
                Sports are one of the most prominent parts of the ReddyOfficial website. The platform currently discusses several major sports categories:
              </p>

              {/* Sports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                {sportsCategories.map((sport, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-150 hover:border-[#c40000]/30 transition-all">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-2xl">{sport.icon}</span>
                      <h3 className="font-rajdhani font-bold text-lg text-gray-900 uppercase">
                        {sport.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {sport.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Cricket receives significant attention, with the site discussing competitions such as the IPL and international cricket tournaments. Football coverage includes major international competitions, while tennis content refers to events such as Wimbledon and the US Open.
              </p>
              <p className="text-sm text-gray-500 italic">
                Note: Sports schedules and available markets naturally change, so users should check the current platform information rather than relying on old articles or screenshots.
              </p>
            </div>

            {/* Section 4: ReddyOfficial and Cricket */}
            <div className="flex flex-col gap-4" id="cricket-focus">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                ReddyOfficial and Cricket
              </h2>
              <p>
                Cricket is particularly important to the Reddy Anna brand. The ReddyOfficial website discusses cricket markets covering major tournaments and leagues and describes both pre-match and live opportunities.
              </p>
              <p>
                For people searching for <strong>Reddy Anna cricket ID</strong>, it is important to understand that an account ID is primarily an access mechanism. Before creating or using an account, users should review the applicable terms, eligibility requirements, and legal restrictions.
              </p>
              <p>
                Cricket fans should also separate their interest in following matches from financial participation. Live sporting events can change rapidly, and decisions involving money should never be based solely on emotions or changing match conditions.
              </p>
            </div>

            {/* Section 5: What Is a Reddy Anna ID? */}
            <div className="flex flex-col gap-4" id="what-is-reddy-id">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                What Is a Reddy Anna ID?
              </h2>
              <p>
                A <strong>Reddy Anna ID</strong> is the account identifier described by ReddyOfficial for accessing the platform&apos;s sports and gaming services.
              </p>
              <p>
                According to the website, an account can provide access to sports markets, casino games, account information, and transaction-related features. ReddyOfficial also describes OTP and KYC-related verification processes for accounts.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 md:p-5 text-red-950 text-sm leading-relaxed">
                <strong className="block text-[#c40000] font-bold uppercase tracking-wide mb-1">
                  🔒 Security Reminder:
                </strong>
                Users should keep their login credentials private and should never provide passwords, OTPs, or authentication information to unknown individuals. If someone claims to be a Reddy Anna representative and asks for sensitive login information, the request should be independently verified before any information is shared.
              </div>
            </div>

            {/* Section 6: Login & Account Security */}
            <div className="flex flex-col gap-4" id="login-security">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Reddy Anna Login: What Users Should Know
              </h2>
              <p>
                People searching for <strong>Reddy Anna login</strong> are generally looking for information about accessing an existing account. The ReddyOfficial website describes login using an account or mobile number together with password and OTP verification.
              </p>

              <div className="overflow-hidden border border-gray-150 rounded-2xl">
                <div className="bg-gray-100 px-5 py-3 border-b border-gray-150 font-rajdhani font-bold text-gray-800 uppercase text-sm">
                  Basic Account Security Checklist
                </div>
                <div className="divide-y divide-gray-100">
                  {securityChecklist.map((item, idx) => (
                    <div key={idx} className="p-4 hover:bg-gray-50/60 flex items-start gap-3 text-sm">
                      <span className="text-[#c40000] font-bold">✓</span>
                      <div>
                        <strong className="text-gray-900">{item.item}:</strong>{" "}
                        <span className="text-gray-600">{item.tip}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Users should also be cautious of search advertisements, social-media messages, or unofficial links that imitate the ReddyOfficial or Reddy Anna brand.
              </p>
            </div>

            {/* Section 7: Casino & Live Gaming */}
            <div className="flex flex-col gap-4" id="casino-gaming">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Casino and Live Gaming on ReddyOfficial
              </h2>
              <p>
                Alongside sports, ReddyOfficial presents a variety of casino and gaming categories:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                {casinoGames.map((game, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-150 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900 text-sm">{game.title}</span>
                      <span className="text-[10px] font-bold uppercase bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                        {game.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{game.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                The exact games and availability can change over time. Every game has its own rules and risk characteristics. Users should understand those rules before participating and should never assume that previous results influence future outcomes in games based on chance.
              </p>
            </div>

            {/* Section 8: Payment Information */}
            <div className="flex flex-col gap-4" id="payment-info">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                ReddyOfficial Payment Information
              </h2>
              <p>
                Payment and account transactions are another area frequently searched by users researching ReddyOfficial. The website discusses payment methods including <strong>UPI</strong> and <strong>IMPS</strong> and describes account deposits and withdrawals.
              </p>
              <p>
                However, users should always check the current payment terms before making a transaction because payment methods, limits, verification procedures, and processing conditions can change.
              </p>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150 flex flex-col gap-3">
                <h3 className="font-rajdhani font-bold text-gray-900 uppercase text-base">
                  What to Check Before Depositing Funds:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  {depositChecks.map((check, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#c40000] font-bold">•</span>
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-red-600 font-semibold">
                ⚠️ Never transfer money to an unknown personal account simply because someone claims to be an agent for Reddy Anna on social channels.
              </p>
            </div>

            {/* Section 9: Is ReddyOfficial Safe? */}
            <div className="flex flex-col gap-4" id="safety-security">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Is ReddyOfficial Safe?
              </h2>
              <p>
                A website&apos;s own statement that it is &ldquo;safe&rdquo; or &ldquo;secure&rdquo; should not be treated as independent verification.
              </p>
              <p>
                When evaluating ReddyOfficial, users should look at practical security factors such as account protection, privacy information, payment procedures, customer support, and identity verification.
              </p>
              <p>
                The website states that it uses SSL-related security measures and describes OTP and KYC verification. Users should nevertheless protect their own information by using strong credentials and avoiding unofficial links or unknown intermediaries.
              </p>
            </div>

            {/* Section 10: Responsible Gaming */}
            <div className="flex flex-col gap-4" id="responsible-gaming">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Responsible Use of Online Gaming Platforms
              </h2>
              <p>
                Responsible participation should be considered whenever an online activity involves money. Users should establish a spending limit before participating and should never use money intended for essential expenses.
              </p>
              <p>
                It is also important not to chase losses. Increasing the amount of money being used simply to recover an earlier loss can quickly increase financial risk.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h3 className="font-rajdhani font-bold text-amber-900 uppercase text-base mb-3">
                  Potential Warning Signs to Watch For:
                </h3>
                <ul className="space-y-2 text-sm text-amber-950">
                  {warningSigns.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">⚠️</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-gray-600">
                Taking a break or seeking appropriate support is sensible if participation is becoming difficult to control.
              </p>
            </div>

            {/* Section 11: Checklist Table */}
            <div className="flex flex-col gap-4" id="evaluation-checklist">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                ReddyOfficial: What Should New Users Check?
              </h2>
              <p>
                Anyone searching for ReddyOfficial or Reddy Anna ID can use a simple checklist before deciding whether to interact with an online gaming service:
              </p>

              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-600 uppercase font-bold">
                      <th className="py-3.5 px-5">Check Area</th>
                      <th className="py-3.5 px-5">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {evaluationChecklist.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3.5 px-5 font-bold text-gray-900">{row.check}</td>
                        <td className="py-3.5 px-5 text-gray-700">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-gray-500">
                This checklist is useful not only for ReddyOfficial but for evaluating online gaming platforms generally.
              </p>
            </div>

            {/* Section 12: FAQs */}
            <div className="flex flex-col gap-4" id="faqs">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px] border-b border-gray-100 pb-2">
                Frequently Asked Questions About ReddyOfficial
              </h2>
              <div className="flex flex-col">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>

            {/* Conclusion & Summary */}
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-150 flex flex-col gap-3 text-sm text-gray-700">
              <h3 className="font-rajdhani font-bold text-gray-900 uppercase text-lg">
                Conclusion & Final Takeaway
              </h3>
              <p>
                ReddyOfficial provides information and access associated with the Reddy Anna brand, covering sports such as cricket, football, tennis, kabaddi, basketball, and esports as well as a range of casino and gaming categories.
              </p>
              <p>
                For people searching for ReddyOfficial, the most useful approach is to look beyond promotional claims. Understand the account and verification process, check payment conditions, protect personal credentials, and verify the legal requirements that apply to your location.
              </p>
              <p>
                Online gaming platforms and regulations can change quickly. Therefore, current information from the platform and relevant official authorities should always take priority over old articles, social-media posts, or unofficial claims. The best way to approach any online gaming service is with awareness, security, and responsible decision-making.
              </p>
            </div>

            {/* Bottom CTA Card */}
            <BlogCtaCard />

          </article>

          {/* Sidebar Navigation Widget */}
          <aside className="lg:col-span-4 sticky top-[95px] flex flex-col gap-6">
            <div className="bg-[#0f1923] text-white p-6 rounded-3xl border border-ra-gold/20 shadow-xl flex flex-col gap-4 text-left">
              <span className="bg-ra-gold text-black font-black uppercase text-[10px] tracking-[1.5px] px-2.5 py-1 rounded max-w-max">
                Table of Contents
              </span>
              <nav className="flex flex-col gap-2.5 text-[14px] font-rajdhani font-bold uppercase tracking-wide">
                <a href="#what-is-reddyofficial" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🌐 What Is ReddyOfficial?
                </a>
                <a href="#what-is-reddy-anna" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  👑 What Is Reddy Anna?
                </a>
                <a href="#sports-coverage" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🏏 Sports Coverage
                </a>
                <a href="#cricket-focus" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🎯 Cricket & Match ID
                </a>
                <a href="#what-is-reddy-id" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🆔 What Is a Reddy Anna ID?
                </a>
                <a href="#login-security" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🔐 Login & Account Security
                </a>
                <a href="#casino-gaming" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🎰 Casino & Live Gaming
                </a>
                <a href="#payment-info" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  💳 Payment Information
                </a>
                <a href="#safety-security" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🛡️ Is ReddyOfficial Safe?
                </a>
                <a href="#responsible-gaming" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  ⚖️ Responsible Gaming
                </a>
                <a href="#evaluation-checklist" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  📋 User Evaluation Checklist
                </a>
                <a href="#faqs" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  ❓ Frequently Asked Questions
                </a>
              </nav>
            </div>

            {/* Sidebar CTA */}
            <BlogCtaCard />
          </aside>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
