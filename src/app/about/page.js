export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Mission Section */}
      <div>
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
          Our Mission
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-2 mb-8">
          About Robi Weather App
        </h1>
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4 text-slate-300 leading-relaxed backdrop-blur-xl">
          <p>
            Robi Weather App is a modern, lightweight weather forecasting platform engineered with Next.js and Tailwind CSS. It pulls direct, reliable data feeds from the Open-Meteo API to present live climate metrics clearly and without clutter.
          </p>
          <p>
            Designed with performance, responsiveness, and a sleek glassmorphism interface in mind, our goal is to deliver an intuitive and powerful weather tracking experience right to your browser.
          </p>
        </div>
      </div>

      {/* Platform Features Section */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 space-y-6 backdrop-blur-xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            What Robi Weather App Offers
          </h2>
          <p className="text-cyan-400 text-sm font-medium mt-1">
            Everything you need to stay weather-aware, built with precision.
          </p>
        </div>

        <hr className="border-slate-800/80" />

        <div className="space-y-6 text-slate-300">
          {/* Live Weather Analytics */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>⚡</span> Real-Time Weather Analytics
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Get instant access to vital weather metrics including live temperature, exact local date & time, relative humidity, and surface-level wind speed (km/h) updated seamlessly.
            </p>
          </div>

          {/* 24-Hour Graph Feature */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>📈</span> 24-Hour Temperature Trend Graph
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Visualize hourly weather progressions effortlessly. Powered by Recharts interactive area charts, users can track temperature fluctuations and trends over a complete 24-hour cycle.
            </p>
          </div>

          {/* Global Coverage & City Selector */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🌍</span> Global Coverage & Dynamic City Selector
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Easily switch between major world locations like Dhaka, London, New York, Tokyo, and Sydney using our interactive dropdown menu to fetch accurate forecast data instantly.
            </p>
          </div>

          {/* 100% Free & No Sign-Up */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>💎</span> 100% Free & Open Access
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Built completely free for everyone. No API keys required, no mandatory sign-ups, and zero hidden costs—backed by reliable data aggregated from over 30 national weather services worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}