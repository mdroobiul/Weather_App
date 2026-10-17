'use client';
import { 
  Lightbulb, 
  Rocket, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  Globe 
} from 'lucide-react';

export default function SolutionsSection() {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
      iconBg: "bg-amber-500/10 border-amber-500/20",
      title: "AI Power",
      description: "Integrate advanced machine learning for automated workflows."
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      iconBg: "bg-indigo-500/10 border-indigo-500/20",
      title: "Rapid Deployment",
      description: "Accelerated release cycles for faster time-to-market."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      iconBg: "bg-purple-500/10 border-purple-500/20",
      title: "Modular Architecture",
      description: "Build with flexible, interchangeable components for growth."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Secure Storage",
      description: "Encrypted and compliant data storage solutions."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      iconBg: "bg-cyan-500/10 border-cyan-500/20",
      title: "Data Analytics",
      description: "Handle large datasets efficiently and extract key insights."
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      iconBg: "bg-pink-500/10 border-pink-500/20",
      title: "Global Reach",
      description: "Expand your application's user base across new territories."
    }
  ];

  return (
    <section className="min-h-screen bg-[#0a0a16] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-/[800px] h-/[400px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300 mb-4 shadow-inner">
            Core Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need for seamless application development.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index}
              className="bg-[#121427]/70 backdrop-blur-md border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}