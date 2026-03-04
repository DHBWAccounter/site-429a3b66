"use client";

import { useEffect, useRef, useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  Search, 
  Globe, 
  Shield, 
  ExternalLink,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const toolCategories = [
  {
    icon: Mail,
    emoji: "📧",
    title: "Secure Email",
    tools: [
      {
        name: "ProtonMail",
        description: "Swiss-based, end-to-end encrypted. Free tier available.",
        url: "https://protonmail.com",
        featured: true,
      },
      {
        name: "Tutanota",
        description: "German-based, open source, no phone number required.",
        url: "https://tutanota.com",
        featured: false,
      },
    ],
  },
  {
    icon: MessageSquare,
    emoji: "💬",
    title: "Encrypted Messaging",
    tools: [
      {
        name: "Signal",
        description: "Gold standard for encrypted messaging. Enable disappearing messages.",
        url: "https://signal.org",
        featured: true,
      },
      {
        name: "SimpleX Chat",
        description: "No phone number or metadata. Newer but promising.",
        url: "https://simplex.chat",
        featured: false,
      },
    ],
  },
  {
    icon: Search,
    emoji: "🔍",
    title: "Private Search",
    tools: [
      {
        name: "DuckDuckGo",
        description: "Basic privacy search.",
        url: "https://duckduckgo.com",
        featured: false,
      },
      {
        name: "Brave Search",
        description: "Independent index, good results.",
        url: "https://search.brave.com",
        featured: false,
      },
      {
        name: "Kagi",
        description: "Paid, but excellent privacy-focused results.",
        url: "https://kagi.com",
        featured: true,
      },
    ],
  },
  {
    icon: Globe,
    emoji: "🌐",
    title: "Privacy Browsers",
    tools: [
      {
        name: "Firefox",
        description: "Configure for privacy. Use uBlock Origin.",
        url: "https://firefox.com",
        featured: true,
      },
      {
        name: "Brave",
        description: "Good defaults, built-in ad blocking.",
        url: "https://brave.com",
        featured: false,
      },
      {
        name: "Tor Browser",
        description: "Maximum anonymity for sensitive browsing.",
        url: "https://torproject.org",
        featured: true,
      },
    ],
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "VPN Services",
    tools: [
      {
        name: "Mullvad",
        description: "No email required, accepts crypto, audited.",
        url: "https://mullvad.net",
        featured: true,
      },
      {
        name: "ProtonVPN",
        description: "Swiss-based, free tier available.",
        url: "https://protonvpn.com",
        featured: false,
      },
      {
        name: "IVPN",
        description: "No logs, audited, ethical company.",
        url: "https://ivpn.net",
        featured: false,
      },
    ],
  },
];

export function ResourcesTools() {
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
    <section ref={ref} id="essential-tools" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="font-mono text-xs text-primary tracking-wider">
              SECTION 01
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Essential Tools
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Battle-tested software for your privacy arsenal. Each tool has been verified by our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {toolCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={cn(
                "relative group transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 border border-border hover:border-primary/30 bg-card/30 backdrop-blur-sm transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {category.tools.length} tools
                    </span>
                  </div>
                </div>

                {/* Tools list */}
                <div className="space-y-4">
                  {category.tools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/tool p-3 border border-border hover:border-primary/30 bg-background/30 hover:bg-background/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-sm font-bold text-foreground group-hover/tool:text-primary transition-colors">
                              {tool.name}
                            </span>
                            {tool.featured && (
                              <span className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase">
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/tool:text-primary transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification notice */}
        <div className="mt-12 flex items-center justify-center gap-3 p-4 border border-primary/20 bg-primary/5 max-w-2xl mx-auto">
          <Check className="w-4 h-4 text-primary flex-shrink-0" />
          <p className="font-mono text-xs text-muted-foreground">
            All tools verified as of 2024. We continuously monitor for security issues and policy changes.
          </p>
        </div>
      </div>
    </section>
  );
}
