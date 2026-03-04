"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, Newspaper, Zap, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Lock,
    title: "Tools & Techniques",
    emoji: "🔐",
    description:
      "Practical guides to hardening your devices, encrypting your communications, and reducing your digital footprint. Step-by-step tutorials that actually work.",
  },
  {
    icon: Newspaper,
    title: "Surveillance Watch",
    emoji: "📰",
    description:
      "Breaking coverage of government surveillance programs, data broker practices, and corporate privacy violations. Know what they're doing so you can protect yourself.",
  },
  {
    icon: Zap,
    title: "Protocol Updates",
    emoji: "⚡",
    description:
      "Deep dives into privacy-enhancing technologies: Tor, Signal, Bitcoin, Nostr, and emerging protocols. Understand the tech that powers freedom.",
  },
  {
    icon: Brain,
    title: "Community Intelligence",
    emoji: "🧠",
    description:
      "Curated discussions from the privacy community, upcoming events, and opportunities to connect with like-minded individuals building the future.",
  },
];

export function Features() {
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
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What You&apos;ll Get Every Week
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-700",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div className="relative h-full p-8 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary/30 bg-primary/10 text-2xl">
                    {feature.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
