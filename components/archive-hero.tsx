"use client";

import { useEffect, useState } from "react";
import { Search, Database } from "lucide-react";

export function ArchiveHero() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Database icon */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/20 bg-primary/5 rounded">
            <Database className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary/80 tracking-wider">
              FULLY SEARCHABLE ARCHIVE
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-foreground">Knowledge Arsenal</span>
            <span className="block text-primary text-glow-subtle mt-2">
              400+ Issues of Privacy Intelligence
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            Every issue we&apos;ve ever published, fully searchable and free. At your fingertips.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center border border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <Search className="w-5 h-5 text-muted-foreground ml-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics: Tor setup, Signal security, data broker removal..."
                  className="flex-1 h-14 px-4 bg-transparent outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground/60"
                />
                <div className="hidden sm:flex items-center gap-1 px-4 text-xs text-muted-foreground font-mono">
                  <kbd className="px-2 py-1 bg-secondary border border-border rounded text-[10px]">Ctrl</kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-secondary border border-border rounded text-[10px]">F</kbd>
                </div>
              </div>
            </div>
          </div>

          {/* Popular searches */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">Popular:</span>
            {["Tor setup", "Signal security", "data broker removal", "operational security"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 text-xs font-mono text-primary/70 border border-primary/20 hover:border-primary/40 hover:text-primary transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
