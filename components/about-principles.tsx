"use client";

import { useEffect, useRef, useState } from "react";
import { UserCheck, Unlock, Server, Code, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const principles = [
  {
    number: "01",
    icon: UserCheck,
    title: "Privacy is a Human Right",
    description:
      "We don't negotiate on this. Privacy isn't about having something to hide—it's about having something to protect.",
  },
  {
    number: "02",
    icon: Unlock,
    title: "Knowledge Must Be Free",
    description:
      "Our core newsletter will always be free. We believe privacy knowledge shouldn't be gated behind paywalls.",
  },
  {
    number: "03",
    icon: Server,
    title: "No Compromise on Infrastructure",
    description:
      "We use encrypted, decentralized infrastructure. We don't use tracking pixels, we don't sell data, we don't cooperate with dragnet surveillance.",
  },
  {
    number: "04",
    icon: Code,
    title: "Technical Rigor",
    description:
      "We test everything we recommend. If a tool has vulnerabilities, we report them. If a service betrays user trust, we expose it.",
  },
  {
    number: "05",
    icon: Users,
    title: "Community Over Corporations",
    description:
      "We're reader-supported, not VC-funded. Our loyalty is to our subscribers, not shareholders.",
  },
];

export function AboutPrinciples() {
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
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary/80 tracking-wider">
              WHAT WE STAND FOR
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our Principles
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={cn(
                "relative group transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                index === 4 && "lg:col-start-2"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all">
                {/* Number and icon */}
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {principle.number}
                  </span>
                  <principle.icon className="w-6 h-6 text-primary group-hover:text-glow-subtle transition-all" />
                </div>

                {/* Content */}
                <h3 className="font-mono text-lg font-bold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
