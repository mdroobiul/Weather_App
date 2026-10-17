'use client';
import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [lat, setLat] = useState(23.8103);
  const [lon, setLon] = useState(90.4125);
  const [cityName, setCityName] = useState('Dhaka');

  const cities = [
    { name: 'Dhaka', lat: 23.8103, lon: 90.4125 },
    { name: 'London', lat: 51.5074, lon: -0.1278 },
    { name: 'New York', lat: 40.7128, lon: -74.0060 },
    { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
    { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
  ];

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        // hourly=temperature_2m যুক্ত করা হয়েছে ঘণ্টার ডেটার জন্য
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m&timezone=auto`
        );
        const data = await res.json();
        
        setWeather(data.current);

        // প্রথম ২৪ ঘণ্টার ডেটা গ্রাফের জন্য ফরম্যাট করা হচ্ছে
        if (data.hourly && data.hourly.time && data.hourly.temperature_2m) {
          const formattedHourly = data.hourly.time.slice(0, 24).map((timeStr, index) => {
            const timeObj = new Date(timeStr);
            const hourLabel = timeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return {
              time: hourLabel,
              temp: data.hourly.temperature_2m[index],
            };
          });
          setHourlyData(formattedHourly);
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to load forecast data.');
        setLoading(false);
      }
    }
    fetchWeather();
  }, [lat, lon]);

  const handleCityChange = (e) => {
    const selected = cities.find((c) => c.name === e.target.value);
    if (selected) {
      setLat(selected.lat);
      setLon(selected.lon);
      setCityName(selected.name);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Hero / Weather Card */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Live Analytics</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Weather Overview</h1>
          </div>

          <div className="flex items-center space-x-3 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 pl-3">Location:</span>
            <select
              onChange={handleCityChange}
              className="bg-transparent text-slate-200 font-medium px-3 py-1.5 focus:outline-none cursor-pointer"
            >
              {cities.map((c) => (
                <option key={c.name} value={c.name} className="bg-slate-900 text-white">
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
          </div>
        )}

        {error && <p className="text-center text-rose-400 py-12">{error}</p>}

        {!loading && !error && weather && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Temperature */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Temperature</span>
                <span className="text-cyan-400">🌡️</span>
              </div>
              <div className="text-4xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                {weather.temperature_2m}°C
              </div>
              <p className="text-xs text-slate-500 mt-2">Currently in {cityName}</p>
            </div>

            {/* Time */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Local Time</span>
                <span className="text-cyan-400">🕒</span>
              </div>
              <div className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300 mt-1">
                {new Date(weather.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <p className="text-xs text-slate-500 mt-2">{new Date(weather.time).toLocaleDateString()}</p>
            </div>

            {/* Humidity */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Humidity</span>
                <span className="text-cyan-400">💧</span>
              </div>
              <div className="text-4xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                {weather.relative_humidity_2m}%
              </div>
              <p className="text-xs text-slate-500 mt-2">Relative Humidity</p>
            </div>

            {/* Wind Speed */}
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex justify-between items-center text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Wind Speed</span>
                <span className="text-cyan-400">💨</span>
              </div>
              <div className="text-4xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                {weather.wind_speed_10m} <span className="text-sm font-medium text-slate-400">km/h</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Surface level (10m)</p>
            </div>
          </div>
        )}
      </section>

      {/* Replaced Section: 24-Hour Temperature Graph */}
      <section className="rounded-3xl bg-slate-900/50 border border-slate-800/80 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">24-Hour Temperature Trend</h2>
            <p className="text-slate-400 text-xs md:text-sm">Hourly forecast progression for {cityName}</p>
          </div>
          <span className="text-xs text-cyan-400 font-medium bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full w-fit">
            Hourly Forecast
          </span>
        </div>

        {hourlyData.length > 0 ? (
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hourlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis
                  dataKey="time"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#334155' }}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: '#334155' }}
                  unit="°C"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#090d16',
                    borderColor: '#334155',
                    borderRadius: '0.75rem',
                    color: '#fff',
                  }}
                  itemStyle={{ color: '#22d3ee' }}
                  formatter={(value) => [`${value}°C`, 'Temperature']}
                />
                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#tempGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center text-slate-500 text-sm">
            Loading chart data...
          </div>
        )}
      </section>

      {/* Why WeatherApp Section */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Why WeatherApp?</h2>
          <p className="text-slate-400 text-sm md:text-base">Everything you need to stay weather-aware.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-Time Data</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Updated every few seconds directly from Open-Meteo.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Global Coverage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Search any major city worldwide with instant results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
            <h3 className="text-lg font-semibold text-white mb-2">100% Free</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No API keys, no sign-ups, no hidden costs. Ever.
            </p>
          </div>
        </div>
      </section>
      {/* About Section inside Home */}
      <section className="py-8 px-4 text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          About Robi Weather
        </h2>
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
          Robi Weather delivers real-time meteorological metrics with high-precision Open-Meteo forecasting endpoints. Designed with speed, elegance, and clarity in mind.
        </p>
      </section>
    </div>
  );
}