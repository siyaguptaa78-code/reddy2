import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "404 - Page Not Found | Reddy Official",
  description: "The page you are looking for does not exist on Reddy Book. Return to home to get your official ID.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="w-full flex-grow bg-[#f4f6f9] py-20 flex flex-col items-center justify-center text-center px-4 font-sans select-none min-h-[60vh]">
        <div className="flex flex-col items-center gap-6 max-w-lg">
          {/* Animated Icon */}
          <div className="relative w-24 h-24 flex items-center justify-center bg-[#c40000]/10 border border-[#c40000]/20 rounded-3xl animate-pulse">
            <span className="text-5xl">⚽</span>
            <span className="absolute -top-2 -right-2 text-2xl">❓</span>
          </div>

          {/* 404 text */}
          <h1 className="text-8xl font-black text-[#c40000] tracking-wider leading-none">
            404
          </h1>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-wide">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            The page you are looking for has been moved, deleted, or did not exist. Let's get you back to safety and back to booking IDs.
          </p>

          {/* Back to Home Button */}
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-black text-white bg-[#c40000] hover:bg-black rounded-2xl transition-all duration-300 shadow-md hover:scale-[1.03] text-sm md:text-base"
            >
              🏠 Go Back to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
