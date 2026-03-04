"use client";

import { useEffect, useState } from "react";
import { Shield, Lock, Eye } from "lucide-react";

export function SubscribeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
              SECURE SUBSCRIPTION PROTOCOL
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-foreground">Choose Your Level</span>
            <span className="block text-primary text-glow animate-pulse-glow">
              of Commitment
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-light">
            We offer two membership tiers. Both get you the same high-quality privacy intelligence.
            The difference is how much you want to support our mission.
          </p>

          {/* Privacy guarantee */}
          <div className="max-w-3xl mx-auto p-6 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-primary font-medium tracking-wide">
                ALL SUBSCRIPTIONS ARE PRIVATE
              </span>
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4 text-primary/60" />
                <span>No tracking</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary/60" />
                <span>No data sales</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-primary/60" />
                <span>No surveillance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
