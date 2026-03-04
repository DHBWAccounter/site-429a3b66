"use client";

import { useEffect, useRef, useState } from "react";
import { Key, Shield, MessageCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Elena Vasquez",
    role: "Founder & Editor-in-Chief",
    icon: Shield,
    description:
      "Former security engineer at a major tech company. Left to focus on privacy activism full-time.",
    detail: "PGP fingerprint: 0x1A2B3C4D5E6F7890",
  },
  {
    name: "Marcus Chen",
    role: "Lead Researcher",
    icon: Key,
    description:
      "Cryptography PhD. Contributes to Tor Project and Signal protocol development. Writes our deep technical dives.",
    detail: null,
  },
  {
    name: "Aisha Okonkwo",
    role: "Operations & Community",
    icon: MessageCircle,
    description:
      "Manages our community forums and subscriber support. Former digital rights advocate at a major NGO.",
    detail: null,
  },
];

export function AboutTeam() {
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary/80 tracking-wider">
              THE PEOPLE BEHIND IT
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The Team
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={cn(
                "relative group transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-full p-6 border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all">
                {/* Icon avatar */}
                <div className="w-16 h-16 mb-6 border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                  <member.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Info */}
                <h3 className="font-mono text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-sm text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {member.description}
                </p>
                {member.detail && (
                  <div className="pt-4 border-t border-primary/10">
                    <code className="font-mono text-xs text-muted-foreground break-all">
                      {member.detail}
                    </code>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contributors section */}
        <div
          className={cn(
            "relative transition-all duration-700 delay-500",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="p-8 border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-foreground mb-3">
                  The Contributors
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our network includes whistleblowers, security researchers, journalists, and
                  activists who contribute anonymously.{" "}
                  <span className="text-primary font-medium">
                    We protect their identities as fiercely as we protect yours.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
