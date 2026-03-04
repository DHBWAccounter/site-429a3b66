"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function ResourcesCta() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-primary/30 bg-primary/5">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Want These Resources
          <span className="block text-primary text-glow-subtle mt-2">
            in Your Inbox?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 leading-relaxed">
          We publish new guides and tool reviews regularly.
        </p>

        <p className="max-w-2xl mx-auto text-xl text-foreground font-medium mb-12">
          Subscribe to get them first.
        </p>

        <Link
          href="/subscribe"
          className="inline-flex items-center gap-3 h-14 px-8 bg-primary text-background font-mono text-sm font-bold uppercase tracking-wider hover:box-glow-intense transition-all duration-300 group"
        >
          <span>Subscribe now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
          Free weekly newsletter. No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
