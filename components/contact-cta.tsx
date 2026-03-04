"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Users, Zap } from "lucide-react";

export function ContactCta() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary/20" />

      <div
        className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-primary/30 bg-primary/5">
            <Zap className="w-8 h-8 text-primary" />
          </div>

          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            For Faster Response
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-4 leading-relaxed">
            Community members often get faster answers in our{" "}
            <Link href="/community" className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
              community forum
            </Link>.
          </p>

          <p className="max-w-2xl mx-auto text-xl text-foreground font-medium mb-12">
            <span className="text-primary">Supporting Members</span> get priority support with direct access to our research team.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-3 h-14 px-8 bg-primary text-background font-mono text-sm font-bold uppercase tracking-wider hover:box-glow-intense transition-all duration-300 group"
            >
              <Users className="w-4 h-4" />
              <span>Become a Supporting Member</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
            Priority support • Direct researcher access • Exclusive briefings
          </p>
        </div>
      </div>
    </section>
  );
}
