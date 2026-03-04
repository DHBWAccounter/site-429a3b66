"use client";

import { useEffect, useState } from "react";
import { Shield, Lock } from "lucide-react";

export function PrivacyHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Decorative grid lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary/80 tracking-wider uppercase">
              Transparency Report
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="block text-foreground">Privacy Policy</span>
            <span className="block text-primary text-glow-subtle mt-2">
              We Practice What We Preach
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-8">
            We&apos;re a privacy organization. Our privacy policy isn&apos;t legal fine print—
            <span className="text-primary font-medium">it&apos;s a commitment.</span>
          </p>

          {/* Last updated badge */}
          <div className="inline-flex items-center gap-6 px-6 py-3 border border-primary/10 bg-card/30 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-primary/60" />
              <span className="font-mono text-xs text-muted-foreground">
                Last Updated: <span className="text-foreground">December 2024</span>
              </span>
            </div>
            <div className="w-px h-4 bg-primary/20" />
            <div className="font-mono text-xs text-muted-foreground">
              Next Review: <span className="text-foreground">June 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
