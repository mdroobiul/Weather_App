export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Mission Section */}
      <div>
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
          Our Mission
        </span>
        <h1 className="text-4xl font-extrabold text-white mt-2 mb-8">
          About SkyPulse
        </h1>
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4 text-slate-300 leading-relaxed backdrop-blur-xl">
          <p>
            SkyPulse is a Next.js application built with performance and modern UI
            aesthetics in mind. It pulls direct data feeds from Open-Meteo API to
            present live climate metrics clearly.
          </p>
          <p>
            Engineered using Next.js App Router and Tailwind CSS, this project
            showcases clean code modularity, client-side fetching patterns, and
            responsive glassmorphism interfaces.
          </p>
        </div>
      </div>

      {/* About WeatherApp Section - Single Div */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 space-y-6 backdrop-blur-xl">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            About WeatherApp
          </h2>
          <p className="text-cyan-400 text-sm font-medium mt-1">
            A modern weather experience built with care.
          </p>
        </div>

        <hr className="border-slate-800/80" />

        <div className="space-y-6 text-slate-300">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🚀</span> Fast & Reliable
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              WeatherApp is a lightweight, fast, and reliable weather application built using modern web technologies. Our goal is to deliver accurate weather information without clutter or unnecessary complications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>🌐</span> Global Data Source
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              We leverage the Open-Meteo API, which aggregates data from over 30 national weather services worldwide. This ensures you always get the most accurate and up-to-date weather data for any location.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span>⚡</span> Modern Tech Stack
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Built with Next.js for optimal performance and Tailwind CSS for a clean, fully responsive design that works beautifully on any device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}