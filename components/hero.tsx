"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Scanline effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-1/4"
          style={{
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/20 bg-primary/5 rounded">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary/80 tracking-wider">
              WEEKLY TRANSMISSION ACTIVE
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-foreground">Privacy Isn&apos;t Dead.</span>
            <span className="block text-primary text-glow animate-pulse-glow">
              It&apos;s Just Being Actively Destroyed.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            Every week, governments expand surveillance programs. Corporations harvest more of your
            data. Algorithms profile your behavior, predict your desires, and manipulate your
            choices.
          </p>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-foreground leading-relaxed mb-12">
            <span className="text-primary font-medium">But the tools to fight back exist.</span> We
            find them, test them, and deliver them to your inbox.
          </p>

          <div className="max-w-2xl mx-auto p-6 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">
              The Cypherpunk Email List is your weekly briefing on the technologies, techniques,
              and communities building a more private, free, and open digital future.{" "}
              <span className="text-primary">No fluff. No corporate spin.</span> Just actionable
              intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
