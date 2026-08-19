"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="flex items-center justify-between px-6 py-5 md:px-14 max-w-7xl mx-auto">
        <span className="font-display text-lg font-bold">
          <span className="text-accent">EyeCare</span> Connect
        </span>

        <nav className="hidden md:flex items-center gap-9">
          <a
            href="/about"
            className="text-[14.5px] font-medium hover:text-accent"
          >
            About
          </a>
          <a
            href="/services"
            className="text-[14.5px] font-medium hover:text-accent"
          >
            Services
          </a>
          <a
            href="/faq"
            className="text-[14.5px] font-medium hover:text-accent"
          >
            FAQ
          </a>
          <a
            href="/contact"
            className="text-[14.5px] font-medium hover:text-accent"
          >
            Contact
          </a>
          <button className="rounded-[10px] bg-accent px-[22px] py-[11px] text-sm font-semibold text-cream">
            Book
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <div className="w-5 h-0.5 bg-text mb-1.5" />
            <div className="w-5 h-0.5 bg-text mb-1.5" />
            <div className="w-5 h-0.5 bg-text" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-5">
          <a href="/about" className="py-2 text-sm font-medium">
            About
          </a>
          <a href="/services" className="py-2 text-sm font-medium">
            Services
          </a>
          <a href="/faq" className="py-2 text-sm font-medium">
            FAQ
          </a>
          <a href="/contact" className="py-2 text-sm font-medium">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
