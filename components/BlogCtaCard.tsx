import React from "react";

export const BlogCtaCard: React.FC = () => {
  const whatsappUrl = "https://wa.me/918360750829?text=Hello,%20Want%20Online%20ID";

  return (
    <section className="w-full bg-white border border-gray-100 rounded-3xl p-6 md:p-8 text-center flex flex-col items-center gap-5 shadow-xl my-8 relative overflow-hidden group">
      {/* Background ambient light */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#c40000]/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

      <span className="bg-[#c40000]/10 text-[#c40000] text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
        📢 Premium Live Exchange ID
      </span>

      <h3 className="text-[#0f1923] font-black text-xl md:text-3xl uppercase tracking-wide max-w-2xl leading-tight font-sans">
        Want to Start Betting with <span className="text-[#c40000]">Reddy Book</span>?
      </h3>

      <p className="text-gray-600 text-sm md:text-base max-w-xl font-medium leading-relaxed">
        Register on Reddy Anna Book for instant IDs, high odds liquidity, and direct payouts inside 30 minutes. Get your account setup on WhatsApp instantly!
      </p>

      <div className="pt-2 w-full max-w-md">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-black text-white bg-[#c40000] hover:bg-black rounded-2xl transition-all duration-300 shadow-md hover:scale-[1.03] text-sm md:text-base cursor-pointer"
        >
          💬 Open ID on WhatsApp Now
        </a>
      </div>

      <div className="flex gap-6 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider mt-2 border-t border-gray-100 pt-4 w-full justify-center">
        <span>⚡ 30 Min Payouts</span>
        <span className="text-gray-200">|</span>
        <span>🏏 Live Cricket Exchange</span>
        <span className="text-gray-200">|</span>
        <span>📱 24/7 WhatsApp Support</span>
      </div>
    </section>
  );
};
