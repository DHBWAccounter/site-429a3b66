"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Key, Eye, Wrench, Network, Scale, BookOpen, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  {
    title: "Operational Security",
    icon: Shield,
    count: 47,
    description: "Device hardening, threat modeling, anonymity practices",
  },
  {
    title: "Cryptography",
    icon: Key,
    count: 38,
    description: "Encryption protocols, key management, cryptographic primitives",
  },
  {
    title: "Surveillance Watch",
    icon: Eye,
    count: 52,
    description: "Government programs, corporate surveillance, data broker exposés",
  },
  {
    title: "Tools & Reviews",
    icon: Wrench,
    count: 41,
    description: "Software reviews, hardware security, privacy-focused services",
  },
  {
    title: "Decentralized Systems",
    icon: Network,
    count: 29,
    description: "Bitcoin, Tor, Nostr, decentralized identity",
  },
  {
    title: "Legal & Policy",
    icon: Scale,
    count: 34,
    description: "Privacy law updates, regulatory fights, court cases",
  },
  {
    title: "Tutorials",
    icon: BookOpen,
    count: 67,
    description: "Step-by-step guides for specific privacy implementations",
  },
];

export function ArchiveTopics() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary tracking-wider">BROWSE BY TOPIC</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find What You Need
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Navigate through our comprehensive archive organized by topic area.
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <button
                key={topic.title}
                className={cn(
                  "group relative text-left transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 border border-border hover:border-primary/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-mono text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {topic.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {topic.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-secondary border border-border">
                        <span className="font-mono text-xs font-bold text-primary">{topic.count}</span>
                        <span className="text-[10px] text-muted-foreground">issues</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
