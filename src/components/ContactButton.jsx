import Link from 'next/link';

export default function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/contact"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-cyan-400/30 backdrop-blur-md"
      >
        <span className="text-base">💬</span>
        <span>Contact Us</span>
      </Link>
    </div>
  );
}