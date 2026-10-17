'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          Robi Weather<span className="text-xs ml-1 px-2 py-0.5 rounded-full bg-blue-500/20 text-cyan-300 border border-cyan-500/30">PRO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            About
          </Link>
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block text-slate-300 hover:text-cyan-400 font-medium py-1"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}