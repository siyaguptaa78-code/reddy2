"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import AccordionItem from "../../components/Accordion";

export default function TheHundredSchedulePage() {
  const matches = [
    { date: "Tue 21 Jul", match: "MI London vs SunRisers Leeds", venue: "Kia Oval, London", women: "2:45pm", men: "6:30pm / 11:00pm" },
    { date: "Wed 22 Jul", match: "Southern Brave vs Welsh Fire", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Thu 23 Jul", match: "London Spirit vs Manchester Super Giants", venue: "Lord's, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Fri 24 Jul", match: "Birmingham Phoenix vs Trent Rockets", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Sat 25 Jul", match: "SunRisers Leeds vs Southern Brave", venue: "Headingley, Leeds", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sat 25 Jul", match: "Welsh Fire vs MI London", venue: "Sophia Gardens, Cardiff", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Sun 26 Jul", match: "Manchester Super Giants vs Birmingham Phoenix", venue: "Emirates Old Trafford", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sun 26 Jul", match: "Trent Rockets vs London Spirit", venue: "Trent Bridge, Nottingham", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Mon 27 Jul", match: "Southern Brave vs MI London", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Tue 28 Jul", match: "SunRisers Leeds vs Manchester Super Giants", venue: "Headingley, Leeds", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Wed 29 Jul", match: "Welsh Fire vs Trent Rockets", venue: "Sophia Gardens, Cardiff", women: "11:30am", men: "3:00pm / 7:30pm" },
    { date: "Wed 29 Jul", match: "MI London vs London Spirit", venue: "Kia Oval, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Thu 30 Jul", match: "Southern Brave vs Birmingham Phoenix", venue: "Utilita Bowl, Southampton", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Fri 31 Jul", match: "Manchester Super Giants vs Trent Rockets", venue: "Emirates Old Trafford", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Sat 1 Aug", match: "Birmingham Phoenix vs Welsh Fire", venue: "Edgbaston, Birmingham", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sat 1 Aug", match: "London Spirit vs Southern Brave", venue: "Lord's, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Sun 2 Aug", match: "Trent Rockets vs SunRisers Leeds", venue: "Trent Bridge, Nottingham", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sun 2 Aug", match: "MI London vs Manchester Super Giants", venue: "Kia Oval, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Mon 3 Aug", match: "Welsh Fire vs Southern Brave", venue: "Sophia Gardens, Cardiff", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Tue 4 Aug", match: "SunRisers Leeds vs London Spirit", venue: "Headingley, Leeds", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Wed 5 Aug", match: "Manchester Super Giants vs Welsh Fire", venue: "Emirates Old Trafford", women: "11:30am", men: "3:00pm / 7:30pm" },
    { date: "Wed 5 Aug", match: "Trent Rockets vs Birmingham Phoenix", venue: "Trent Bridge, Nottingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Thu 6 Aug", match: "London Spirit vs MI London", venue: "Lord's, London", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Fri 7 Aug", match: "Birmingham Phoenix vs SunRisers Leeds", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Sat 8 Aug", match: "MI London vs Trent Rockets", venue: "Kia Oval, London", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sat 8 Aug", match: "Southern Brave vs Manchester Super Giants", venue: "Utilita Bowl, Southampton", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Sun 9 Aug", match: "SunRisers Leeds vs Welsh Fire", venue: "Headingley, Leeds", women: "11:00am", men: "2:30pm / 7:00pm" },
    { date: "Sun 9 Aug", match: "London Spirit vs Birmingham Phoenix", venue: "Lord's, London", women: "2:30pm", men: "6:00pm / 10:30pm" },
    { date: "Mon 10 Aug", match: "Trent Rockets vs Southern Brave", venue: "Trent Bridge, Nottingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Tue 11 Aug", match: "Manchester Super Giants vs SunRisers Leeds", venue: "Emirates Old Trafford", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Wed 12 Aug", match: "Welsh Fire vs London Spirit", venue: "Sophia Gardens, Cardiff", women: "11:30am", men: "3:00pm / 7:30pm" },
    { date: "Wed 12 Aug", match: "Birmingham Phoenix vs MI London", venue: "Edgbaston, Birmingham", women: "3:00pm", men: "6:30pm / 11:00pm" },
    { date: "Fri 14 Aug", match: "Eliminator (2nd vs 3rd)", venue: "TBC", women: "2:15pm", men: "6:00pm / 10:30pm" },
    { date: "Sun 16 Aug", match: "The Hundred Final", venue: "Lord's", women: "2:15pm", men: "6:00pm / 10:30pm" }
  ];

  const franchises = [
    { team: "MI London (Oval Invincibles)", venue: "Kia Oval, London", owner: "Reliance Industries (Mumbai Indians)", coach: "Kieron Pollard" },
    { team: "SunRisers Leeds (Northern Superchargers)", venue: "Headingley, Leeds", owner: "Sun TV Network (Sunrisers Hyderabad)", coach: "Daniel Vettori" },
    { team: "Manchester Super Giants (Manchester Originals)", venue: "Emirates Old Trafford", owner: "RPSG Group (Lucknow Super Giants)", coach: "Justin Langer" },
    { team: "London Spirit", venue: "Lord's, London", owner: "Silicon Valley tech consortium", coach: "Andy Flower" },
    { team: "Birmingham Phoenix", venue: "Edgbaston, Birmingham", owner: "Knighthead Capital (Birmingham City FC)", coach: "Shane Bond" },
    { team: "Southern Brave", venue: "Utilita Bowl, Southampton", owner: "GMR Group (Delhi Capitals)", coach: "—" },
    { team: "Trent Rockets", venue: "Trent Bridge, Nottingham", owner: "Cain International & Ares Management", coach: "Peter Moores" },
    { team: "Welsh Fire", venue: "Sophia Gardens, Cardiff", owner: "Sanjay Govil (Washington Freedom)", coach: "Mike Hussey" }
  ];

  const biggestBuys = [
    { player: "James Coles", team: "London Spirit", amount: "£390,000" },
    { player: "Jordan Cox (2025 MVP)", team: "Welsh Fire", amount: "£300,000" },
    { player: "Adil Rashid", team: "Southern Brave", amount: "£250,000" },
    { player: "Aiden Markram", team: "Manchester Super Giants", amount: "£200,000" },
    { player: "James Vince", team: "MI London", amount: "£190,000" },
    { player: "Abrar Ahmed", team: "SunRisers Leeds", amount: "£190,000" },
    { player: "David Miller", team: "Southern Brave", amount: "£110,000" }
  ];

  const pointsTable = [
    { pos: 1, team: "Birmingham Phoenix", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 2, team: "London Spirit", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 3, team: "Manchester Super Giants", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 4, team: "MI London", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 5, team: "Southern Brave", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 6, team: "SunRisers Leeds", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 7, team: "Trent Rockets", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" },
    { pos: 8, team: "Welsh Fire", pld: 0, w: 0, l: 0, nr: 0, pts: 0, nrr: "—" }
  ];

  const winnersHistory = [
    { year: 2021, winner: "Southern Brave" },
    { year: 2022, winner: "Trent Rockets" },
    { year: 2023, winner: "Oval Invincibles" },
    { year: 2024, winner: "Oval Invincibles" },
    { year: 2025, winner: "Oval Invincibles" }
  ];

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 font-sans">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white p-8 md:p-6 rounded-3xl shadow-lg border border-gray-150 flex flex-col gap-6 text-[#1a1a2e] text-[15.5px] leading-relaxed">
            
            {/* Header Section */}
            <div className="border-b border-gray-100 pb-6">
              <span className="bg-[#c40000]/10 text-[#c40000] text-[11px] uppercase tracking-[2px] font-extrabold px-3 py-1.5 rounded-full inline-block mb-4">
                Tournament Preview
              </span>
              <h1 className="text-[#c40000] font-rajdhani font-black text-[38px] md:text-[30px] leading-[1.2] uppercase">
                The Hundred 2026: Full Schedule, Fixtures, Teams, Squads & Tickets
              </h1>
            </div>

            {/* Section 1 */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                The Hundred Scheduled 2026: Dates First (As It Should Be)
              </h2>
              <p>
                The Hundred will take place from 21 July to 16 August 2026, with the opening match at the Kia Oval between MI London and SunRisers Leeds. Chances are, you haven't heard of either team by that name, as until recently they were known as Oval Invincibles and Northern Superchargers. Then they got bought.
              </p>
              <p>
                And not just bought, but lavishly invested in. The ECB sold a stake in every franchise for a combined sum of over £975 million. Three teams had their names changed by their IPL owners. A player auction took place in March, the first proper auction in British sporting history.
              </p>
              <p>
                Will all this herald a new era for British cricket? Perhaps. It has certainly made for an enticing buildup, but we'll save the verdict for later.
              </p>
              <p>
                All the information you need before the first ball is run is below: the 2026 schedule with UK and IST timings, teams, squads, auction sales, TV coverage, and tickets.
              </p>
            </div>

            {/* Key Dates Table */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                The Hundred 2026: Key Dates at a Glance
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
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Tournament dates</td>
                      <td className="py-3.5 px-5">21 July – 16 August 2026</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Opening match</td>
                      <td className="py-3.5 px-5">MI London vs SunRisers Leeds, Kia Oval, 21 July</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Total matches</td>
                      <td className="py-3.5 px-5">68 (34 men's, 34 women's)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Format</td>
                      <td className="py-3.5 px-5">100-ball-a-side, double-headers (women's + men's)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Eliminator</td>
                      <td className="py-3.5 px-5">14 August 2026 (reserve day added in 2026)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Final</td>
                      <td className="py-3.5 px-5">16 August 2026, Lord's</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">Defending champions</td>
                      <td className="py-3.5 px-5">MI London (men), SunRisers Leeds (women)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 font-bold">TV coverage</td>
                      <td className="py-3.5 px-5">Sky Sports (all 68 matches), BBC (16 matches live)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="schedule">
                The Hundred 2026 Schedule & Fixtures (Full Match List)
              </h2>
              <p>
                A word on reading the following table: every day contains a double-header, women's game first followed by the men's. The two matches take place at the same venue, with the same two teams, and with one ticket. Unless otherwise stated, times are in BST. For those watching from India, the IST column conveniently marks the timings of the men's matches, which tend to fall in prime time.
              </p>
              
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Match</th>
                      <th className="py-3 px-4">Venue</th>
                      <th className="py-3 px-4 text-center">Women (BST)</th>
                      <th className="py-3 px-4 text-center">Men (BST / IST)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[13.5px] text-gray-700">
                    {matches.map((m, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-bold text-gray-900 whitespace-nowrap">{m.date}</td>
                        <td className="py-3 px-4 font-semibold text-gray-900">{m.match}</td>
                        <td className="py-3 px-4 text-gray-500">{m.venue}</td>
                        <td className="py-3 px-4 text-center">{m.women}</td>
                        <td className="py-3 px-4 text-center font-bold text-gray-900">{m.men}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Eight group fixtures for each side: four home games, four away, with each team playing against each other once, plus a derby against their nearest rivals. The top three qualify through to the final, with the second and third place fixtures in the Eliminator on 14 August. The latter also has a reserve day for the first time, after two rain-affected finals in 2023 (women) and 2025 (men).
              </p>
            </div>

            {/* Franchise Table */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="franchises">
                The Hundred Auction 2026: All 8 Franchises
              </h2>
              <p>
                It is the first season of The Hundred under the new ownership, and the franchises have undergone a significant overhaul. New names, new coaches for half of the teams, and the new crest for each franchise to denote their parent IPL ownership. The eight teams, venues, and owners:
              </p>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3.5 px-5">Team</th>
                      <th className="py-3.5 px-5">Home Venue</th>
                      <th className="py-3.5 px-5">Owner/Investor</th>
                      <th className="py-3.5 px-5">Men's Coach</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {franchises.map((f, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3.5 px-5 font-bold text-gray-900">{f.team}</td>
                        <td className="py-3.5 px-5">{f.venue}</td>
                        <td className="py-3.5 px-5 font-medium">{f.owner}</td>
                        <td className="py-3.5 px-5">{f.coach}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The figures on the sales of these franchises have smashed the ECB's expectations, totaling over £975 million for the eight teams that did not exist before 2021. London Spirit set the standard in the auctions, selling for 49% for a sum of £145 million, which would make little sense to most outside the club's boardroom. According to the ECB, £500 million will be funneled back into the development of English and Welsh cricket, with £50 million earmarked for grassroots. It remains to be seen how much of that money will trickle down to your local cricket club.
              </p>
            </div>

            {/* Auction and Squads */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="auction">
                The Hundred 2026 Auction & Squads
              </h2>
              <p>
                The UK has seen its fair share of drafts in the history of sports, but never an auction. There were two in the women's and men's competitions, both of which had a very compelling viewing experience. The auction rules are quite simple, with every franchise bringing up to four players they have signed or retained, with the rest of the squad being purchased at the auction for a total of £2.05 million (men) or £880,000 (women). There was one significant change to the auction rules: overseas players. Previously, a team could only buy three overseas players in their 11-a-side squad, but now that number has risen to four. You can see how it has affected the rosters further below.
              </p>

              <h3 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase mt-2">
                The biggest buys by the men's teams
              </h3>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3.5 px-5">Player</th>
                      <th className="py-3.5 px-5">Team</th>
                      <th className="py-3.5 px-5">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {biggestBuys.map((b, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="py-3.5 px-5 font-bold text-gray-900">{b.player}</td>
                        <td className="py-3.5 px-5">{b.team}</td>
                        <td className="py-3.5 px-5 font-extrabold text-[#c40000]">{b.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-2">
                The women's auction saw equally impressive individual performances by Sophie Devine and Beth Mooney, who went to Welsh Fire and Trent Rockets respectively for £210,000 each. However, the biggest sum of all barely came to the auction room in England because of one particular pre-signing deal. Harry Brook and SunRisers Leeds signed a deal that could fetch up to £500,000, which would have broken the auction record had it been at the auction.
              </p>

              <h3 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase mt-2">
                Marquee players from direct signings (men's teams)
              </h3>
              <ul className="list-disc pl-5 flex flex-col gap-2 font-medium text-[14.5px]">
                <li><strong>MI London:</strong> Sam Curran, Rashid Khan, Will Jacks, Nicholas Pooran</li>
                <li><strong>SunRisers Leeds:</strong> Harry Brook, Mitchell Marsh, Brydon Carse, Nathan Ellis</li>
                <li><strong>Manchester Super Giants:</strong> Jos Buttler, Heinrich Klaasen, Noor Ahmad, Liam Dawson</li>
                <li><strong>London Spirit:</strong> Liam Livingstone, Dewald Brevis, Adam Zampa, Jamie Overton</li>
                <li><strong>Southern Brave:</strong> Jofra Archer, Jamie Smith, Marcus Stoinis, Tristan Stubbs</li>
                <li><strong>Trent Rockets:</strong> Ben Duckett, Tim David, Tom Banton, Mitchell Santner</li>
                <li><strong>Welsh Fire:</strong> Phil Salt, Chris Woakes, Marco Jansen, Rachin Ravindra</li>
                <li><strong>Birmingham Phoenix:</strong> Jacob Bethell, Rehan Ahmed, Mitchell Owen, Donovan Ferreira</li>
              </ul>

              <p className="mt-2">
                The women's rosters are as star-studded as one could hope to see in a competition of this size. It seems that the World XI has been split with a coin toss to create the rosters of the English teams. Manchester Super Giants somehow got Smriti Mandhana, Meg Lanning, and Sophie Ecclestone in their ranks, while Ellyse Perry plays for Birmingham Phoenix. Nat Sciver-Brunt and Ashleigh Gardner are teammates at Trent Rockets, while Hayley Matthews and Amelia Kerr are with MI London. Laura Wolvaardt and Jemimah Rodrigues play for Southern Brave, and Marizanne Kapp turned up at London Spirit.
              </p>
            </div>

            {/* Points Table */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="standings">
                The Hundred Points Table 2026
              </h2>
              <p>
                There are no points to report yet, as all eight teams have played zero matches. The table gets updated after every matchday on this page, starting from 21 July.
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
              <p>
                Scoring rules are rather straightforward: two points for a win, one point for a tie/no-result, and net run rate decides everything else, with the top three teams progressing to the final.
              </p>
            </div>

            {/* How to watch */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="streaming">
                How to Watch The Hundred 2026: TV & Live Streaming
              </h2>
              <p>
                Sky Sports has the rights to all 68 matches in the UK, as has been the case since the tournament's inaugural season. If you do not have Sky, you are not completely out of luck, as the BBC will show 16 matches on free-to-air channels. Additionally, all matches will be available on BBC Sounds, with highlights shown on iPlayer and the Sport website. Sky Go will be available for those on the move, while NOW will provide an ad-supported streaming service with no long-term contract.
              </p>

              <h3 className="text-[#c40000] font-rajdhani font-bold text-[20px] uppercase mt-2">
                Live Streaming in India: Men's Match Timings
              </h3>
              <p>
                The men's matches will be shown from 7 pm IST onwards, with most matches starting at 11 pm IST. As Sunrisers Hyderabad, Mumbai Indians, and Lucknow Super Giants have all bought English franchises, there is no doubt that the rivalries within The Hundred will be of interest to Indian fans as well. The official broadcaster for India tends to be revealed in the first few months of the year, so keep an eye out on 21 July, when the first match of the tournament will take place.
              </p>
            </div>

            {/* Tickets */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="tickets">
                The Hundred 2026 Tickets
              </h2>
              <p>
                Tickets are available at <a href="https://thehundred.com/tickets" target="_blank" rel="noopener noreferrer" className="text-[#c40000] hover:underline font-semibold">thehundred.com/tickets</a>, with the The Hundred app being needed to access them. The move away from paper tickets has disappointed some fans, and it is difficult to disagree. The prices are reasonable, with one ticket covering both the women's and men's match, which means getting two games for the price of one. A free registration on the website gives you early access to the best matches ahead of the general release. Tickets are limited for kids, which is a fantastic way to see the game without spending much. On the other hand, Finals Day tickets sell out well before the big match, so it is best to register in advance or watch from home.
              </p>
            </div>

            {/* Final */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                The Hundred Final 2026
              </h2>
              <p>
                Finals Day will take place on Sunday, 16 August 2026, with the women's final at 2:15 pm and the men's final at 6:00 pm BST. The first-place team will have two days' rest before the final, with the second and third-placed teams having to contest the Eliminator on 14 August. There is no route to victory that is easy, but neither team will complain about this scenario, as all four finalists in 2025 and 2023 have come from either the group stage or the Eliminator.
              </p>
            </div>

            {/* Winners */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]" id="winners">
                The Hundred Past Winners (Men's)
              </h2>
              <div className="overflow-x-auto border border-gray-150 rounded-2xl max-w-md">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-150 text-[13px] text-gray-500 uppercase font-bold">
                      <th className="py-3 px-5">Year</th>
                      <th className="py-3 px-5">Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-[14px]">
                    {winnersHistory.map((w, idx) => (
                      <tr key={idx}>
                        <td className="py-3.5 px-5 font-bold text-gray-900">{w.year}</td>
                        <td className="py-3.5 px-5 font-semibold text-[#c40000]">{w.winner}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2">
                This makes MI London hot favorites to complete a three-peat in 2026, and with good reason, as no other team has managed to defend their title in the competition's short history. On the other hand, the women's side of the competition does not have a clear favorite, with Oval Invincibles (2021), Southern Brave (2023), London Spirit (2024), and Northern Superchargers (2025) all having a claim. SunRisers Leeds is the defending champion as well, and the new name has yet to resonate with the supporters.
              </p>
            </div>

            {/* FAQs */}
            <div className="flex flex-col gap-4" id="faqs">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                The Hundred 2026: FAQs
              </h2>
              <div className="flex flex-col">
                <AccordionItem
                  question="When does The Hundred 2026 start?"
                  answer="The Hundred 2026 starts on Tuesday, 21 July 2026. MI London hosts SunRisers Leeds in the opening match at the Kia Oval. The women's match starts at 2:45 pm BST, followed by the men's match at 6:30 pm BST."
                />
                <AccordionItem
                  question="How many teams participate in The Hundred?"
                  answer="There are eight men's and eight women's teams that compete in The Hundred. Each team is based in a host city in England and Wales."
                />
                <AccordionItem
                  question="Is there any reserve day in The Hundred 2026?"
                  answer="Yes, for the first time in the tournament's history, an additional day (14 August) has been added as a reserve day for the men's and women's Eliminator."
                />
                <AccordionItem
                  question="What is the format of The Hundred?"
                  answer="Each team faces exactly 100 balls in The Hundred. Bowlers bowl at a restricted pace (a captain can call for one set of ten consecutive deliveries), but they do not face more than 20 balls. The first 25 deliveries are a powerplay, with each innings containing a strategic time-out."
                />
                <AccordionItem
                  question="What teams have changed their names?"
                  answer="Three teams have changed their names in the 2026 season. Oval Invincibles are now known as MI London, Northern Superchargers have been rebranded as SunRisers Leeds, and Manchester Originals are now Manchester Super Giants. This was a result of a £975m investment in the eight franchises sold by the ECB."
                />
                <AccordionItem
                  question="Where will the The Hundred 2026 final be held?"
                  answer="Lord's will host the final on Sunday, 16 August 2026."
                />
                <AccordionItem
                  question="Who won The Hundred 2025?"
                  answer="Oval Invincibles won the men's competition for the third consecutive year, while Northern Superchargers won the women's tournament."
                />
                <AccordionItem
                  question="How many overseas players can a team sign?"
                  answer="Starting from the 2026 season, every team can sign a maximum of four overseas players."
                />
              </div>
            </div>

            {/* Footer Tag */}
            <div className="border-t border-gray-100 pt-4 text-[12px] text-gray-400 mt-2">
              Last updated: 9 July 2026. Fixtures and squads as per ECB announcements. Points table updated during the tournament.
            </div>

          </article>

          {/* Sidebar Navigation Widget */}
          <aside className="lg:col-span-4 sticky top-[95px] flex flex-col gap-6">
            <div className="bg-[#0f1923] text-white p-6 rounded-3xl border border-ra-gold/20 shadow-xl flex flex-col gap-4 text-left">
              <span className="bg-ra-gold text-black font-black uppercase text-[10px] tracking-[1.5px] px-2.5 py-1 rounded max-w-max">
                Table of Contents
              </span>
              <nav className="flex flex-col gap-2.5 text-[14.5px] font-rajdhani font-bold uppercase tracking-wide">
                <a href="#schedule" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🗓️ Full Match Schedule
                </a>
                <a href="#franchises" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🏏 The 8 Franchises
                </a>
                <a href="#auction" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  💰 Auction & Roster Info
                </a>
                <a href="#standings" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  📊 Points Table
                </a>
                <a href="#streaming" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  📺 Live Streaming & TV
                </a>
                <a href="#tickets" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🎟️ Booking Tickets
                </a>
                <a href="#winners" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  🏆 Past Champions
                </a>
                <a href="#faqs" className="hover:text-ra-gold transition-colors flex items-center gap-2">
                  ❓ FAQs Accordion
                </a>
              </nav>
            </div>

            {/* CTA Sidebar Banner */}
            <div className="bg-[#c40000] text-white p-6 rounded-3xl shadow-xl border border-white/10 flex flex-col gap-4">
              <h3 className="font-poppins font-black text-[20px] uppercase leading-tight">
                Want to Bet on The Hundred Matches?
              </h3>
              <p className="text-[13.5px] leading-relaxed opacity-90 font-medium">
                Register on Reddy Anna Book for instant IDs, high odds liquidity, and direct payouts inside 30 minutes.
              </p>
              <a
                href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20place%20bets%20on%20The%20Hundred%202026%20Matches."
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
