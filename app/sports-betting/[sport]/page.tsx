import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FloatingWhatsApp from "../../../components/FloatingWhatsApp";
import CricketOdds from "../../../components/CricketOdds";
import FootballOdds from "../../../components/FootballOdds";

interface SportDetails {
  title: string;
  emoji: string;
  image: string;
  description: string;
  guideTitle: string;
  guidePoints: string[];
}

const sportsData: Record<string, SportDetails> = {
  "cricket-betting": {
    title: "Cricket Betting",
    emoji: "🏏",
    image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Cricket-Betting-1024x683.jpg",
    description: "Welcome to the finest Cricket Betting arena on Reddy Anna Book. Bet ball-by-ball, predict total wickets, session scores, runs over-by-over, and match winners on major tournaments like IPL, ICC World Cups, Big Bash, and T20 International Series.",
    guideTitle: "How to Place Cricket Bets on Reddy Anna Book",
    guidePoints: [
      "Secure your Reddy Anna Cricket ID from the WhatsApp support team",
      "Choose cricket lobbies to find out all ongoing and upcoming matches",
      "Use the up-to-date odds panel (cells highlight yellow when increasing or red when decreasing)",
      "Click on the odds rate, enter your desired value slip, and confirm the bet",
      "Ask for UPI withdrawal for your winnings settled at the end of the match"
    ]
  },
  "football-betting": {
    title: "Football Betting",
    emoji: "⚽",
    image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Football-Betting-1024x683.jpg",
    description: "Bet on high speed global soccer markets at Reddy Anna. We offer best odds for all national and international leagues including English Premier league, UEFA Champions league, La Liga, Serie A, and many more.",
    guideTitle: "Premium Soccer Betting Guide",
    guidePoints: [
      "Select Football from the main menu/navigation or sport category tab.",
      "Choose your preferred betting markets including Live matches, Virtual leagues, or Premium odds charts.",
      "Place bets on 1x2, Full-Time Winners, Over/Under Goals, Corners, or Handicap markets.",
      "Betting comes with enhanced low latency for premium live football action",
      "Same-day payouts of 100% winning bets to your UPI wallet/accounts."
    ]
  },
  "tennis-betting": {
    title: "Tennis Betting",
    emoji: "🎾",
    image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Tennis-Betting-1024x683.png",
    description: "Tennis matches settle extremely fast compared to other sports. Place live bets on grand slams like Wimbledon, US Open, Roland Garros, and Australian Open, or follow year-round ATP and WTA tournaments.",
    guideTitle: "Astra-tier Tennis Odds Guidelines",
    guidePoints: [
      "Tennis features rapid points fluctuation; make sure to bet using the lightweight Reddy Anna app.",
      "Bet on Live Match winner, set scores, total games over/under, and tiebreaker results.",
      "Watch the drift values live as serve possession alternates between players.",
      "Get exclusive Tennis welcome cashback bonuses up to 10% on your first deposit."
    ]
  },
  "kabaddi-betting": {
    title: "Kabaddi Betting",
    emoji: "🤼",
    image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-1024x683.jpg",
    description: "Kabaddi is India's own indigenous sport which has attracted global attention and betting markets. Keep a track of Pro Kabaddi League (PKL) and bet on raid points, tackle points and match odds",
    guideTitle: "Kabaddi Betting Tips on Reddy Book",
    guidePoints: [
      "Keep track of the defensive set-ups and star raiders to predict margins of victory in matches.",
      "Go for arrays in PKL matches to bet on total raid points or half-time winners",
      "Our exchange also offers secure cashout facilities even if you entered the market during the final minutes of the match",
      "WhatsApp our helpdesk to claim your exclusive Kabaddi season bonuses"
    ]
  },
  "horse-betting": {
    title: "Horse Racing Betting",
    emoji: "🏇",
    image: "https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg",
    description: "Get the thrill of the track with us. We offer live betting on premium national and international horse racing events. Win, Place, Each-Way, or forecast betting cards with enhanced odds.",
    guideTitle: "Official Guide to Derby & Race Betting",
    guidePoints: [
      "Pick your favorite horse race events from the dashboard categories.",
      "Scrutinize the horse names, jockey stats, track conditions, and odds.",
      "Register your unique betting ID configured for high-limits VIP racing pools.",
      "Furthermore, withdraw your winning proceeds at the same hour after the racing judges announce the results."
    ]
  },
  "basketball-betting": {
    title: "Basketball Betting",
    emoji: "🏀",
    image: "https://reddysports.co/wp-content/uploads/2026/03/Reddy-Anna-Book-Basketball-Betting-1024x683.jpg",
    description: "Follow NBA, Euroleague, and other basketball competitions. Basketball betting involves highly liquid point-spread possibilities, total points over/under, and session-by-session betting.",
    guideTitle: "Sleek Basketball spreads & options",
    guidePoints: [
      "Basketball league involves intense scoring runs, so keep an eye on rapid input options to lock your desired slip before the line moves.",
      "Make spreads bets or guess the game's overall points (e.g., over/under 210.5).",
      "Activate a legitimate Reddy Anna ID to gain free access to the no-delay basketball stream arrays"
    ]
  }
};

export default async function SportPage({ params }: { params: Promise<{ sport: string }> }) {
  const resolvedParams = await params;
  const sportKey = resolvedParams.sport;

  // Fallback if sport is not in our dictionary
  const fallbackTitle = sportKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const currentSport = sportsData[sportKey] || {
    title: fallbackTitle,
    emoji: "🏆",
    image: "https://reddysports.co/wp-content/uploads/2026/05/Reddy-Anna-Book-–-Indias-Most-Trusted-Online-Betting-Platform-1024x597.jpg",
    description: `Access premium sports betting options for ${fallbackTitle} on the Reddy Anna Book exchange. Live odds, instant slips, and fully secure transactions guaranteed.`,
    guideTitle: `Getting Started with ${fallbackTitle} on Reddy Book`,
    guidePoints: [
      "Create a verified Reddy Anna ID via our official WhatsApp connection thread.",
      "Check active match arrays and live-updating odds tables on the dashboard.",
      "Select your preferred odds, configure your mock slip, and confirm within seconds.",
      "Get guaranteed same-day withdrawals processed instantly to your local UPI account."
    ]
  };

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-8 flex flex-col gap-10 font-sans">
        
        {/* Custom Hero Banner */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#0f1923] text-white rounded-3xl overflow-hidden border border-ra-gold/20 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-5 items-start relative z-10">
                <span className="bg-[#c40000] text-white text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Active Betting Market
                </span>
                <h1 className="text-ra-gold font-poppins font-black text-[38px] md:text-[28px] leading-[1.2] uppercase flex items-center gap-2">
                  <span>{currentSport.emoji}</span>
                  <span>{currentSport.title}</span>
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed">
                  {currentSport.description}
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20a%20${encodeURIComponent(currentSport.title)}%20ID%20now.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-ra-gold to-ra-gold-dark hover:from-white hover:to-white hover:text-ra-crimson text-black font-extrabold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Get {currentSport.title} ID
                  </a>
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20need%20help%20with%20sports%20betting."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    💬 Chat support
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center">
                <img
                  src={currentSport.image}
                  alt={currentSport.title}
                  className="w-full max-w-[500px] h-[180px] sm:h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Odds Board Rendering */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          {sportKey === "cricket-betting" ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px] flex items-center gap-2">
                🏏 Live Matches Odds Board
              </h2>
              <CricketOdds />
            </div>
          ) : sportKey === "football-betting" ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[28px] uppercase tracking-[1px] flex items-center gap-2">
                ⚽ Live Matches Odds Board
              </h2>
              <FootballOdds />
            </div>
          ) : (
            /* Render a beautiful general dynamic odds mockup sheet for other sports */
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-5">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <h3 className="font-rajdhani font-bold text-[22px] text-gray-900 uppercase">
                  🏆 Live {currentSport.title} Match Odds
                </h3>
                <span className="bg-[#25D366]/10 text-[#25D366] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping" />
                  Live Stream Active
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 font-rajdhani font-bold text-[13.5px] uppercase tracking-wider border-b border-gray-150">
                      <th className="py-3 px-4">Match Fixture / Time</th>
                      <th className="py-3 px-4 text-center w-[120px]">Back (1)</th>
                      <th className="py-3 px-4 text-center w-[120px]">Lay (1)</th>
                      <th className="py-3 px-4 text-center w-[120px]">Back (2)</th>
                      <th className="py-3 px-4 text-center w-[120px]">Lay (2)</th>
                      <th className="py-3 px-4 text-center w-[140px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14.5px] font-semibold text-gray-700">
                    {[
                      { team1: "Roger Federer", team2: "Rafael Nadal", tournament: "Wimbledon Men's Singles Finals", o1: 1.88, o2: 1.89, o3: 2.02, o4: 2.04 },
                      { team1: "Haryana Steelers", team2: "Patna Pirates", tournament: "Pro Kabaddi League Series", o1: 1.72, o2: 1.74, o3: 2.15, o4: 2.18 },
                      { team1: "Boston Celtics", team2: "LA Lakers", tournament: "NBA Championship Playoffs", o1: 1.95, o2: 1.97, o3: 1.95, o4: 1.97 }
                    ].map((match, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 flex flex-col gap-0.5">
                          <span className="font-bold text-[15px] text-gray-900">{match.team1} vs {match.team2}</span>
                          <span className="text-gray-400 text-[12px] font-semibold uppercase tracking-wider">{match.tournament}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="w-full py-2 bg-ra-back-blue text-black rounded font-bold hover:bg-ra-back-blue-hover transition-colors">{match.o1}</button>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="w-full py-2 bg-ra-lay-pink text-black rounded font-bold hover:bg-ra-lay-pink-hover transition-colors">{match.o2}</button>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="w-full py-2 bg-ra-back-blue text-black rounded font-bold hover:bg-ra-back-blue-hover transition-colors">{match.o3}</button>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="w-full py-2 bg-ra-lay-pink text-black rounded font-bold hover:bg-ra-lay-pink-hover transition-colors">{match.o4}</button>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <a
                            href={`https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20bet%20on%20${encodeURIComponent(match.team1)}%20vs%20${encodeURIComponent(match.team2)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black hover:bg-[#c40000] text-white text-[12px] uppercase font-bold py-2 px-3 rounded shadow transition-all block text-center"
                          >
                            Bet Now
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* Step-by-Step Sport Betting Guide */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-150 flex flex-col gap-6 text-left">
            <h2 className="text-[#c40000] font-rajdhani font-bold text-[26px] uppercase tracking-[0.5px]">
              {currentSport.guideTitle}
            </h2>
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-gray-600 text-[14.5px] leading-relaxed font-semibold">
              {currentSport.guidePoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
            <p className="text-gray-500 text-[13.5px] border-t border-gray-100 pt-4 mt-2">
              ⚠️ Gambling can be addictive and carries inherent risks. It is crucial to only bet with money you are prepared to lose and never risk more than you can afford to. Reddy Book is intended for individuals who are 18 years of age or older.
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
