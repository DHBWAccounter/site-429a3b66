"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

const issues = [
  {
    number: 412,
    title: "The Death of Encrypted Email?",
    excerpt: "New vulnerabilities in PGP implementations. What you need to know and how to protect yourself.",
    date: "December 2024",
    tags: ["cryptography", "email-security"],
  },
  {
    number: 411,
    title: "Year-End Privacy Audit",
    excerpt: "Our annual guide to auditing your digital footprint. Includes our updated threat model template.",
    date: "December 2024",
    tags: ["opsec", "threat-modeling"],
  },
  {
    number: 410,
    title: "Nostr Rising",
    excerpt: "How the decentralized protocol is building a censorship-resistant social layer. Practical guide to getting started.",
    date: "November 2024",
    tags: ["decentralized", "nostr"],
  },
  {
    number: 409,
    title: "Data Broker Black Friday",
    excerpt: "How data brokers profit from your holiday shopping. Complete guide to opting out before the season.",
    date: "November 2024",
    tags: ["data-brokers", "opt-out"],
  },
  {
    number: 408,
    title: "Mobile Threat Landscape",
    excerpt: "New spyware variants targeting iOS and Android. Updated hardening guides for both platforms.",
    date: "November 2024",
    tags: ["mobile-security", "spyware"],
  },
  {
    number: 407,
    title: "The VPN Reality Check",
    excerpt: "Independent audit results of 15 major VPN providers. Some failed spectacularly.",
    date: "October 2024",
    tags: ["vpn", "audits"],
  },
];

export function ArchiveList() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-3 py-1.5 border border-primary/20 bg-primary/5">
            <Hash className="w-3 h-3 text-primary" />
            <span className="font-mono text-xs text-primary tracking-wider">RECENT ISSUES</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        {/* Issues list */}
        <div className="space-y-4">
          {issues.map((issue, index) => (
            <article
              key={issue.number}
              className={cn(
                "group relative transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 border border-border hover:border-primary/30 transition-colors bg-card/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Issue number */}
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:w-24">
                    <div className="font-mono text-2xl font-bold text-primary text-glow-subtle">
                      #{issue.number}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{issue.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-mono text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {issue.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {issue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 font-mono text-sm text-primary transition-all duration-300">
            <span>Load more issues</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
