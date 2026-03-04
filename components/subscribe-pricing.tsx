"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Star, Bitcoin } from "lucide-react";
import { cn } from "@/lib/utils";

const freeFeatures = [
  "Weekly newsletter delivered every Thursday",
  "Full archive access",
  "Community forum read access",
  "Emergency security alerts",
];

const supportingFeatures = [
  "Everything in Free Membership",
  "Community forum posting privileges",
  "Monthly deep-dive reports (exclusive)",
  "Early access to tools and guides",
  "Direct Q&A with our research team",
  "Priority support",
];

export function SubscribePricing() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Membership Options
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div
            className={cn(
              "relative group transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              <div className="mb-6">
                <h3 className="font-mono text-2xl font-bold text-foreground mb-2">
                  Free Membership
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-5xl font-bold text-primary">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 border border-primary/10 bg-secondary/30">
                <p className="text-sm text-muted-foreground italic">
                  Perfect for those who want to stay informed without financial commitment.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Tier */}
          <div
            className={cn(
              "relative group transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-8 border-2 border-primary/50 bg-card/80 backdrop-blur-sm hover:border-primary transition-all duration-300">
              {/* Recommended badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-1 bg-primary text-primary-foreground font-mono text-xs font-bold tracking-wider">
                  <Star className="w-3 h-3" />
                  RECOMMENDED
                </div>
              </div>

              <div className="mb-6 pt-2">
                <h3 className="font-mono text-2xl font-bold text-foreground mb-2">
                  Supporting Member
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-5xl font-bold text-primary">$7</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  or <span className="text-primary font-medium">$70/year</span> (save $14)
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {supportingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 border border-primary/20 bg-primary/5 mb-6">
                <p className="text-sm text-muted-foreground italic mb-3">
                  Keeps us independent and fighting. Includes our eternal gratitude.
                </p>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Bitcoin className="w-4 h-4" />
                  <span className="font-mono">Crypto payments get 15% discount</span>
                </div>
              </div>

              <div className="p-4 border border-primary/10 bg-secondary/30">
                <p className="font-mono text-xs text-primary/80 mb-2 tracking-wide">
                  PAYMENT METHODS
                </p>
                <p className="text-sm text-muted-foreground">
                  Bitcoin, Monero, and credit cards accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
