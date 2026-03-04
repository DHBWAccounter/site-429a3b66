"use client";

import { useEffect, useState } from "react";
import { Shield, Terminal } from "lucide-react";

export function ResourcesHero() {
  const [mounted, setMounted] = useState(false);

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

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
              <path
                d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider uppercase">
              Verified & Tested Resources
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-foreground">Your Privacy</span>
            <span className="block text-primary text-glow animate-pulse-glow">
              Toolkit
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            We&apos;ve tested hundreds of tools. These are the ones we actually use and recommend.
          </p>

          <div className="max-w-2xl mx-auto p-6 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Terminal className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="font-mono text-sm text-foreground leading-relaxed text-left">
                <span className="text-primary font-medium">No affiliate links.</span>{" "}
                <span className="text-primary font-medium">No sponsored placements.</span>{" "}
                Just honest recommendations from years of real-world testing.
              </p>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Essential Tools", "Guides", "Reading"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 border border-border hover:border-primary/50 bg-card/30 hover:bg-card/50 font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
