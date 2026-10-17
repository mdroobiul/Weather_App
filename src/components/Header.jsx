import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          Robi Weather<span className="text-xs ml-1 px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-500/30">PRO</span>
        </Link>
        <nav className="flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}