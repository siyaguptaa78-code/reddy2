import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FloatingWhatsApp from "../../../components/FloatingWhatsApp";

interface GameDetails {
  title: string;
  emoji: string;
  image: string;
  description: string;
  rulesTitle: string;
  rules: string[];
}

const casinoGamesData: Record<string, GameDetails> = {
  slots: {
    title: "Slots Lobbies",
    emoji: "🎰",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Spin and win real money on thousands of top video slot machines with classic fruits, ancient mythology, adventurous treasure hunts, and progressive jackpots. Get free spins and boosted odds using provably fair algorithms.",
    rulesTitle: "Slot Machines Guidelines",
    rules: [
      "Browse our active slot lobby categories and pick your favorite theme (e.g. Book of Dead, Gates of Olympus)",
      "Use easy-to-use sliders to set your preferred bet lines and cost per spin",
      "Hit Spin! and collect Scatter payouts as free spins or use Wilds as substitutes for any symbols",
      "Score direct cash bonuses with sets of rare high-value icons"
    ]
  },
  roulette: {
    title: "Live Roulette",
    emoji: "🎡",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Follow the dealer spin the wheel in real-time. Place inside bets on single digits or splits, or place high-volume outside bets like red/black, odds/evens, or dozens with immediat[...]",
    rulesTitle: "Roulette Odds & Betting Arrays",
    rules: [
      "Choose European (single zero) or American (double zero) live streams.",
      "Inside Bets (Straight Up, Split, Corner) offer maximum payouts up to 35:1.",
      "Outside Bets (Red/Black, Odd/Even, Dozens) offer lower risks and 1:1 or 2:1 returns.",
      "Lock in your predictions before the dealer announces 'No More Bets' and drops the white ball."
    ]
  },
  poker: {
    title: "Premium Poker",
    emoji: "🃏",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Show your skill on active Texas Hold'em and Omaha tables. Play live multiplayer tournaments, bluffs, cash tables, or VIP games with players across the country.",
    rulesTitle: "Official Hand Hierarchies & Play Rules",
    rules: [
      "Texas Hold'em gives players two private cards and five face-up community cards.",
      "Rounds: Pre-flop, Flop, Turn, River. Bets: Check, Fold, Call, or Raise.",
      "Form the best possible 5-card combination using community and private cards.",
      "High Hands: Royal Flush is absolute king, followed by Straight Flush, Four of a Kind, and Full House."
    ]
  },
  "teen-patti": {
    title: "Teen Patti Live",
    emoji: "👑",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: "Enjoy India's ultimate 3-card poker. Teen Patti is highly social and fast-paced. Place blind or seen bets, activate high-limits side cards, and beat the live dealer.",
    rulesTitle: "Teen Patti Rank Rules & Payouts",
    rules: [
      "Each player and dealer gets three cards face down.",
      "Ranks: Trio (Three of a Kind) is the ultimate hand, followed by Pure Sequence, Sequence, Color, Pair, and High Card.",
      "Players choose to play 'Blind' (without checking cards) or 'Chaals' (with cards verified).",
      "Compete directly to beat the dealer's card sequence and secure instant payouts."
    ]
  }
};

export default async function CasinoGamePage({ params }: { params: Promise<{ game: string }> }) {
  const resolvedParams = await params;
  const gameKey = resolvedParams.game;

  // Fallback
  const fallbackTitle = gameKey
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const currentGame = casinoGamesData[gameKey] || {
    title: fallbackTitle,
    emoji: "🃏",
    image: "https://reddysports.co/wp-content/uploads/2026/04/Casino-Games-on-Reddy-Anna.jpg",
    description: `Experience the thrill of live ${fallbackTitle} lobbies on Reddy Anna Book. HD streams, certified dealers, and same-day withdrawal guarantees.`,
    rulesTitle: `How to Play ${fallbackTitle} on Reddy Book`,
    rules: [
      `Secure your verified Live Casino ID through our official WhatsApp support channel.`,
      `Login to your dashboard, navigate to the Casino lobbies, and tap the ${fallbackTitle} table launcher.`,
      `Configure your table chip amounts and interact directly with professional dealers.`,
      `Withdraw your winnings safely in under 30 minutes via instant UPI transfer options.`
    ]
  };

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#0f0f10] py-8 flex flex-col gap-10 font-sans text-white">
        
        {/* Custom Game Hero */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#191919] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-ra-crimson/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-10 md:p-6">
              <div className="flex flex-col gap-5 items-start relative z-10">
                <span className="bg-[#ffcc00] text-black text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                  Casino Game Guide
                </span>
                <h1 className="text-[#ffcc00] font-poppins font-black text-[38px] md:text-[28px] leading-[1.2] uppercase flex items-center gap-2">
                  <span>{currentGame.emoji}</span>
                  <span>{currentGame.title}</span>
                </h1>
                <p className="text-gray-300 text-[15.5px] leading-relaxed">
                  {currentGame.description}
                </p>
                <div className="flex flex-wrap gap-4 text-[13.5px] font-bold uppercase tracking-wider mt-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20play%20Live%20${encodeURIComponent(currentGame.title)}%20now.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-[#ffcc00] hover:bg-white text-black font-extrabold rounded-lg shadow-lg hover:shadow-none transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    Play {currentGame.title} Now
                  </a>
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20free%20demo%20credits%20for%20casino."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-extrabold rounded-lg transition-all flex-grow sm:flex-grow-0 text-center"
                  >
                    🔑 Get Demo Credits
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex justify-center">
                <img
                  src={currentGame.image}
                  alt={currentGame.title}
                  className="w-full max-w-[500px] h-[180px] sm:h-auto object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rule Sheet */}
        <section className="px-4 max-w-[1240px] w-full mx-auto">
          <div className="bg-[#191919] border border-white/10 p-8 md:p-6 rounded-3xl shadow-xl flex flex-col gap-6 text-left">
            <h2 className="text-[#ffcc00] font-poppins font-black text-[24px] uppercase tracking-[0.5px]">
              {currentGame.rulesTitle}
            </h2>
            <ol className="list-decimal pl-5 flex flex-col gap-3 text-gray-300 text-[14.5px] leading-relaxed font-semibold">
              {currentGame.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ol>
            <p className="text-gray-500 text-[13px] border-t border-white/5 pt-4 mt-2">
              ♣️ <b>VIP Lounge Limits:</b> Tables have bespoke minimum ₹100 and maximum ₹1,00,000 per hand limits. Ask your personal manager to customise your account limits.
            </p>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
