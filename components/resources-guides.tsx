"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, FileText, Lock, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const guideLevels = [
  {
    level: "Beginner",
    icon: Zap,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    description: "Start here if you're new to privacy",
    guides: [
      {
        title: "Your Privacy Starter Guide",
        description: "First steps for everyone",
        href: "/guides/starter",
      },
      {
        title: "Threat Modeling 101",
        description: "Understand your risks",
        href: "/guides/threat-model",
      },
      {
        title: "Password Security Done Right",
        description: "Beyond \"use strong passwords\"",
        href: "/guides/passwords",
      },
    ],
  },
  {
    level: "Intermediate",
    icon: Shield,
    color: "text-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "For those ready to go deeper",
    guides: [
      {
        title: "Full Device Hardening: Mobile",
        description: "iOS and Android",
        href: "/guides/mobile-hardening",
      },
      {
        title: "Full Device Hardening: Desktop",
        description: "Windows, Mac, Linux",
        href: "/guides/desktop-hardening",
      },
      {
        title: "Encrypted Communications Setup",
        description: "Signal, PGP, etc.",
        href: "/guides/encrypted-comms",
      },
    ],
  },
  {
    level: "Advanced",
    icon: Lock,
    color: "text-red-500",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
    description: "High-security operational practices",
    guides: [
      {
        title: "Operational Security for Activists",
        description: "High-risk environments",
        href: "/guides/activist-opsec",
      },
      {
        title: "Anonymous Online Presence",
        description: "Building identity firewalls",
        href: "/guides/anonymous-presence",
      },
      {
        title: "Air-Gapped Security",
        description: "Maximum security setups",
        href: "/guides/air-gap",
      },
    ],
  },
];

export function ResourcesGuides() {
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
    <section ref={ref} id="guides" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="font-mono text-xs text-primary tracking-wider">
              SECTION 02
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guides & Tutorials
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Step-by-step instructions from basic to advanced. Choose your level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {guideLevels.map((levelData, levelIndex) => (
            <div
              key={levelData.level}
              className={cn(
                "relative group transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${levelIndex * 150}ms` }}
            >
              <div className={cn(
                "relative h-full border bg-card/30 backdrop-blur-sm transition-all duration-300",
                levelData.borderColor,
                "hover:bg-card/50"
              )}>
                {/* Level header */}
                <div className={cn("p-5 border-b", levelData.borderColor, levelData.bgColor)}>
                  <div className="flex items-center gap-3 mb-2">
                    <levelData.icon className={cn("w-5 h-5", levelData.color)} />
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      {levelData.level}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {levelData.description}
                  </p>
                </div>

                {/* Guides list */}
                <div className="p-5 space-y-3">
                  {levelData.guides.map((guide) => (
                    <Link
                      key={guide.title}
                      href={guide.href}
                      className="block group/guide p-3 border border-border hover:border-primary/30 bg-background/30 hover:bg-background/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="w-3 h-3 text-muted-foreground" />
                            <span className="font-mono text-sm font-bold text-foreground group-hover/guide:text-primary transition-colors">
                              {guide.title}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground pl-5">
                            {guide.description}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/guide:text-primary transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 p-4 border border-border bg-card/30">
            <BookOpen className="w-4 h-4 text-primary" />
            <p className="font-mono text-xs text-muted-foreground">
              All guides are free and open source.{" "}
              <Link href="/contribute" className="text-primary hover:underline">
                Contribute improvements →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
