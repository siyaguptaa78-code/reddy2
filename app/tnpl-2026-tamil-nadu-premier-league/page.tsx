"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import AccordionItem from "../../components/Accordion";

export default function TNPL2026Page() {
  const basics = [
    { detail: "Season", information: "10th edition" },
    { detail: "Reported dates", information: "4 – 28 August 2026 (2 phases)" },
    { detail: "Phase 1", information: "NPR College Ground, Natham (4–15 August)" },
    { detail: "Phase 2", information: "MA Chidambaram Stadium, Chennai (18–28 August)" },
    { detail: "Teams", information: "8" },
    { detail: "Format", information: "T20, single round-robin + playoffs" },
    { detail: "Defending champions", information: "iDream Tiruppur Tamizhans (first title, 2025)" },
    { detail: "Match timings", information: "Evening starts around 7:15 pm IST, double-headers on weekends" },
  ];

  const teams = [
    { team: "iDream Tiruppur Tamizhans", association: "Defending champions; Sai Kishore's team" },
    { team: "Dindigul Dragons", association: "2025 finalists; Ravichandran Ashwin's team" },
    { team: "Chepauk Super Gillies", association: "League's most successful franchise" },
    { team: "Lyca Kovai Kings", association: "Perennial playoff team from Coimbatore" },
    { team: "Nellai Royal Kings", association: "2023 champions" },
    { team: "Siechem Madurai Panthers", association: "Former champions from Madurai" },
    { team: "SKM Salem Spartans", association: "Salem's franchise" },
    { team: "Trichy Grand Cholas", association: "Trichy's rebranded team" },
  ];

  const pointsTable = [
    { pos: 1, team: "Chepauk Super Gillies", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 2, team: "Dindigul Dragons", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 3, team: "iDream Tiruppur Tamizhans", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 4, team: "Lyca Kovai Kings", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 5, team: "Nellai Royal Kings", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 6, team: "Siechem Madurai Panthers", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 7, team: "SKM Salem Spartans", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 8, team: "Trichy Grand Cholas", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 font-sans">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white p-8 md:p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-6 text-[#1a1a2e] text-[15.5px] leading-relaxed">

            {/* Header Section */}
            <div className="border-b border-gray-100 pb-6">
              <span className="bg-[#c40000]/10 text-[#c40000] text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full inline-block mb-4">
                Tournament Guide
              </span>
              <h1 className="text-[#c40000] font-rajdhani font-black text-[38px] md:text-[30px] leading-[1.2] uppercase">
                TNPL 2026: Schedule, Teams, Points Table & All About Tamil Nadu Premier League Season 10
              </h1>
            </div>

            {/* Intro Section */}
            <div className="flex flex-col gap-4">
              <p>
                Ten seasons. That&apos;s not shabby for a state league that was an experiment when it launched in 2016. Tamil Nadu Premier League (TNPL) regularly eclipses international bilateral series in Tamil Nadu. TNPL returns to the cricket-crazy state in August 2026 for the tenth season with iDream Tiruppur Tamizhans defending the title they won with emphatic ease in the final against Ravichandran Ashwin&apos;s Dindigul Dragons in July 2025. A 118-run win over their arch-rivals.
              </p>
              <p>
                A note on dates: you will see conflicting reports. TNCA&apos;s own proposed TNPL 2026 schedule is a season split between two venues, with the first phase at NPR College Ground, Natham (Dindigul district) between 4–15 August followed by a three-day break and the second phase at the MA Chidambaram Stadium in Chennai between 18–28 August. Some sites have TNPL 2026 starting in late July; take it with a pinch of salt until the TNCA releases the official schedule.
              </p>
            </div>

            {/* Basics Table */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                TNPL 2026: The Basics
              </h2>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3.5 px-5">Detail</th>
                      <th className="py-3.5 px-5">Information</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {basics.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3.5 px-5 font-bold text-gray-900">{row.detail}</td>
                        <td className="py-3.5 px-5 text-gray-700">{row.information}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Teams Section */}
            <div className="flex flex-col gap-4" id="teams">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                TNPL Teams 2026: All 8 Franchises
              </h2>
              <p>
                The eight district-based franchises that competed in the 2025 season are expected to be back. What makes TNPL interesting is not the star overseas names (there aren&apos;t any, it&apos;s a Tamil Nadu-only league) but the mix of international stars and the next big thing. This is the breeding ground for the IPL, having produced Natarajan, Sai Kishore, Shahrukh Khan, and Varun Chakravarthy.
              </p>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3.5 px-5">Team</th>
                      <th className="py-3.5 px-5">Notable Association</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {teams.map((t, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3.5 px-5 font-bold text-gray-900">{t.team}</td>
                        <td className="py-3.5 px-5 text-gray-700">{t.association}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Confirm the squads once the TNCA releases the player draft, usually in the weeks preceding the season.
              </p>
            </div>

            {/* Schedule Section */}
            <div className="flex flex-col gap-4" id="schedule">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                TNPL 2026 Schedule
              </h2>
              <p>
                The TNPL match schedule will follow the TNCA&apos;s official release. This section will have the complete list of TNPL 2026 matches with dates and venues as soon as they become available. TNPL is a round-robin group stage followed by a four-team playoff with the top two finishing sides from the group stage facing off in the final. Evening matches start at 7:15 pm IST with double-headers on weekends.
              </p>
              <p>
                The two-phase TNPL 2026 is significant in that the first phase will be in Natham, a small town in Dindigul district, not a big city. TNPL has a history of being a &quot;caravan&quot; league that travels from one district to another. The smaller venues have consistently drawn bigger crowds than the matches in bigger cities.
              </p>
            </div>

            {/* Points Table */}
            <div className="flex flex-col gap-4" id="standings">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                TNPL Points Table 2026
              </h2>
              <p>
                Live scores from the opening match of TNPL 2026 will be here. Two points for a win, one point for a no-result, and net run rate decides the top four teams from the league stage, with the top two teams from the group stage meeting in the final.
              </p>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3 px-4 text-center w-12">Pos</th>
                      <th className="py-3 px-4">Team</th>
                      <th className="py-3 px-4 text-center">Pld</th>
                      <th className="py-3 px-4 text-center">W</th>
                      <th className="py-3 px-4 text-center">L</th>
                      <th className="py-3 px-4 text-center">NR</th>
                      <th className="py-3 px-4 text-center">Pts</th>
                      <th className="py-3 px-4 text-center">NRR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {pointsTable.map((p) => (
                      <tr key={p.pos} className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 text-center font-bold text-gray-900">{p.pos}</td>
                        <td className="py-3 px-4 font-semibold text-gray-900">{p.team}</td>
                        <td className="py-3 px-4 text-center">{p.pld}</td>
                        <td className="py-3 px-4 text-center">{p.w}</td>
                        <td className="py-3 px-4 text-center">{p.l}</td>
                        <td className="py-3 px-4 text-center">{p.nr}</td>
                        <td className="py-3 px-4 text-center font-bold text-[#c40000]">{p.pts}</td>
                        <td className="py-3 px-4 text-center font-medium text-gray-400">{p.nrr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* How to Watch */}
            <div className="flex flex-col gap-4" id="streaming">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                How to Watch TNPL 2026: Live Streaming & TNPL Live Score
              </h2>
              <p>
                TNPL has traditionally been telecasted on the Star Sports network with live streaming on FanCode. Confirm the 2026 TNPL telecast details on the league&apos;s social media handles closer to the season. Scores will be available on the usual cricket sites (Cricbuzz, ESPNcricinfo) and the TNPL website. Streaming has been the most accessible option for international fans.
              </p>
            </div>

            {/* Last Season */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                Last Season: What Happened in TNPL 2025
              </h2>
              <p>
                A brief recap of the final as iDream Tiruppur Tamizhans defeated Dindigul Dragons by 118 runs to win their maiden TNPL title. Sai Kishore and his teammates delivered when it mattered most, beating the strong Ravichandran Ashwin-led Dindigul Dragons. Tushar Raheja was the league&apos;s leading run-scorer with 488 balls at a strike rate of 186, catching the eye of IPL scouts. That&apos;s TNPL for you.
              </p>
            </div>

            {/* FAQs */}
            <div className="flex flex-col gap-4" id="faqs">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                TNPL 2026: FAQs
              </h2>
              <div className="flex flex-col">
                <AccordionItem
                  question="When does TNPL 2026 start?"
                  answer="The proposed TNPL 2026 start date is 4 August 2026. The season is expected to run until 28 August, with the first phase in Natham followed by the second phase in Chennai. Confirm the TNPL 2026 start date with the TNCA."
                />
                <AccordionItem
                  question="How many teams play in the TNPL?"
                  answer="There are eight teams that compete in the TNPL."
                />
                <AccordionItem
                  question="Who won TNPL 2025?"
                  answer="iDream Tiruppur Tamizhans won TNPL 2025 after defeating Dindigul Dragons by 118 runs in the final."
                />
                <AccordionItem
                  question="Can overseas players play in the TNPL?"
                  answer="No, the TNPL only has players from Tamil Nadu, making it an important tournament for IPL scouts."
                />
                <AccordionItem
                  question="Where can I watch TNPL 2026?"
                  answer="TNPL has been telecasted on Star Sports in the past with live streaming on FanCode. Check the league's social media channels for the TNPL 2026 telecast details."
                />
                <AccordionItem
                  question="Which team has won the most TNPL titles?"
                  answer="The Chepauk Super Gillies have won the most TNPL titles."
                />
              </div>
            </div>

            {/* Footer Tag */}
            <div className="border-t border-gray-100 pt-4 text-[12px] text-gray-400 mt-2">
              Last updated: 8 July 2026. Dates as per Tamil Nadu media reports; fixture table to be updated on TNCA&apos;s announcement. Points table will be updated during the season.
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-[95px] flex flex-col gap-6">
            <div className="bg-[#0f1923] text-white p-6 rounded-3xl border border-ra-gold/20 shadow-xl flex flex-col gap-4 text-left">
              <span className="bg-ra-gold text-black font-black uppercase text-[10px] tracking-[1.5px] px-2.5 py-1 rounded max-w-max">
                Table of Contents
              </span>
              <nav className="flex flex-col gap-2.5 text-[14.5px] font-rajdhani font-bold uppercase tracking-wide">
                <a href="#teams" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🏏 The 8 Teams
                </a>
                <a href="#schedule" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🗓️ TNPL Schedule
                </a>
                <a href="#standings" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  📊 Points Table
                </a>
                <a href="#streaming" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  📺 Live Streaming & TV
                </a>
                <a href="#faqs" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  ❓ FAQs
                </a>
              </nav>
            </div>

            {/* CTA Sidebar Banner */}
            <div className="bg-[#c40000] text-white p-6 rounded-3xl shadow-xl border border-white/10 flex flex-col gap-4">
              <h3 className="font-poppins font-black text-[20px] uppercase leading-tight">
                Want to Bet on TNPL Matches?
              </h3>
              <p className="text-[13.5px] leading-relaxed opacity-90 font-medium">
                Register on Reddy Anna Book for instant IDs, high odds liquidity, and direct payouts inside 30 minutes.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20place%20bets%20on%20TNPL%202026%20Matches."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-block bg-white hover:bg-black text-[#c40000] hover:text-white font-extrabold text-[13px] uppercase tracking-wider py-3 rounded-xl transition-all duration-200"
              >
                💬 Open ID on WhatsApp
              </a>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
