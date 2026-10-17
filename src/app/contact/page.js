'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    /* Container width max-w-xl -> max-w-3xl kora hoyeche jeno form-ti boro dekkay */
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Get in Touch</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3">Contact Us</h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Have a question or feedback? We’d love to hear from you.
        </p>
      </div>

      {/* Box padding p-8 -> p-10/p-12 kora hoyeche */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
        {submitted ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-2xl font-bold text-cyan-400">Message Received!</p>
            <p className="text-slate-300 text-base">Thank you for contacting us. We will reply shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-sm font-medium transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email ke side-by-side (2 Columns) kora hoyeche large screen-e */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2.5">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 text-base focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Alex due"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-400 mb-2.5">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 text-base focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="alex@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-2.5">Message</label>
              <textarea
                rows="6"
                required
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-4 text-slate-200 text-base focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}