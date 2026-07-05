"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Get Online ID");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || name.trim() === "") {
      setError("Please enter your Name.");
      return;
    }

    if (!email || email.trim() === "") {
      setError("Please enter your Email Address.");
      return;
    }

    if (!phone || phone.trim() === "") {
      setError("Please enter your Phone Number.");
      return;
    }

    if (!message || message.trim() === "") {
      setError("Please write your message.");
      return;
    }

    setSuccess(true);

    setTimeout(() => {
      const waMsg = encodeURIComponent(
        `Hello Reddy Anna Book Contact support,\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
      );
      window.open(`https://wa.me/916026703858?text=${waMsg}`, "_blank");
      setSuccess(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  return (
    <>
      <Header />

      <main className="w-full flex-grow bg-[#f4f6f9] py-10 flex flex-col gap-10 font-sans">
        
        {/* Header */}
        <section className="px-4 max-w-[900px] w-full mx-auto text-center flex flex-col gap-4">
          <h1 className="text-[#c40000] font-rajdhani font-black text-[42px] md:text-[32px] tracking-[1.5px] uppercase">
            Contact Reddy Anna Book
          </h1>
          <div className="w-[100px] h-[4px] bg-[#c40000] mx-auto rounded" />
          <p className="text-gray-600 text-[16px] leading-[1.8] mt-2 font-medium">
            Have a query regarding deposits, withdrawals or the creation of your own secured gaming ID? Contact us via our verified channels below:
          </p>
        </section>

        {/* Contact Info Cards + Form */}
        <section className="px-4 max-w-[1100px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Channels Cards (Left Column) */}
            <div className="lg:col-span-5 flex flex-col gap-6 w-full">
              
              {/* WhatsApp Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4 hover:border-ra-gold transition-all duration-300">
                <span className="text-[34px]">💬</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-rajdhani font-bold text-[18px] text-[#c40000] uppercase tracking-[0.5px]">
                    WhatsApp Support
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    Get instant help and support for your ID creation, OTP queries, and payouts processed within 5 minutes.
                  </p>
                  <a
                    href="https://wa.me/916026703858?text=Hello%20Reddy%20Anna,%20I%20want%20to%20get%20started."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-bold text-[14px] hover:underline mt-1"
                  >
                    Chat on +91 98646 92258 &rarr;
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4 hover:border-ra-gold transition-all duration-300">
                <span className="text-[34px]">✉️</span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-rajdhani font-bold text-[18px] text-gray-900 uppercase tracking-[0.5px]">
                    Corporate Email
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    For VIP treatment, sponsorships, and business inquiries, email us and we will get back to you shortly.
                  </p>
                  <a
                    href="mailto:Support@reddysports.co"
                    className="text-gray-800 font-bold text-[14px] hover:underline mt-1"
                  >
                    Support@reddysports.co &rarr;
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start gap-4">
                <span className="text-[34px]">🕒</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-rajdhani font-bold text-[18px] text-gray-900 uppercase tracking-[0.5px]">
                    Operating Hours
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">
                    Our customer support executives are available 24/7, 365 days a year to provide you with the help you need.
                  </p>
                </div>
              </div>

            </div>

            {/* Premium Interactive Contact Form (Right Column) */}
            <div className="lg:col-span-7 bg-white p-8 md:p-6 rounded-2xl shadow-lg border border-gray-150 flex flex-col gap-5 w-full">
              <h2 className="text-[#c40000] font-rajdhani font-bold text-[24px] uppercase tracking-[0.5px]">
                Send Us A Message
              </h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-700 text-[12.5px] font-bold uppercase">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-200 focus:border-[#c40000] focus:bg-white rounded-lg py-2.5 px-4 text-gray-800 text-[13.5px] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-700 text-[12.5px] font-bold uppercase">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-200 focus:border-[#c40000] focus:bg-white rounded-lg py-2.5 px-4 text-gray-800 text-[13.5px] outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-gray-700 text-[12.5px] font-bold uppercase">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-Digit Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-50 border border-gray-200 focus:border-[#c40000] focus:bg-white rounded-lg py-2.5 px-4 text-gray-800 text-[13.5px] outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="text-gray-700 text-[12.5px] font-bold uppercase">Subject</label>
                    <select
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="bg-gray-50 border border-gray-200 focus:border-[#c40000] focus:bg-white rounded-lg py-2.5 px-4 text-gray-800 text-[13.5px] outline-none transition-all cursor-pointer"
                    >
                      <option value="Get Online ID">Get Online ID</option>
                      <option value="Deposit Issue">Deposit Issue</option>
                      <option value="Withdrawal Issue">Withdrawal Issue</option>
                      <option value="VIP Club Inquiry">VIP Club Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-gray-700 text-[12.5px] font-bold uppercase">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-gray-50 border border-gray-200 focus:border-[#c40000] focus:bg-white rounded-lg py-2.5 px-4 text-gray-800 text-[13.5px] outline-none transition-all resize-none"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 text-red-500 border border-red-100 rounded-lg p-2.5 text-[12.5px] font-semibold">
                    ⚠️ {error}
                  </div>
                )}

                {success && (
                  <div className="bg-green-50 text-green-600 border border-green-100 rounded-lg p-3 text-[12.5px] font-semibold text-center flex flex-col gap-0.5">
                    <span>✅ Dispatching Form Details!</span>
                    <span className="text-[11.5px] text-green-500 font-normal">Opening WhatsApp support to secure your ticket ID...</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={success}
                  className="w-full py-3.5 bg-[#c40000] hover:bg-black text-white font-bold uppercase rounded-lg shadow-md hover:shadow-none transition-all duration-300 tracking-wider text-[13.5px]"
                >
                  🚀 Submit and Connect via WhatsApp
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
