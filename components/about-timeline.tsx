"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Founded by a small group of privacy researchers frustrated by the lack of accessible, actionable privacy information. First issue sent to 127 subscribers.",
  },
  {
    year: "2018",
    title: "Growing Pains",
    description:
      "Crossed 10,000 subscribers. Added paid membership tier to sustain operations without venture capital.",
  },
  {
    year: "2020",
    title: "Pandemic Surge",
    description:
      "Readership tripled as remote work exposed millions to surveillance risks. Expanded coverage to include workplace privacy.",
  },
  {
    year: "2022",
    title: "Infrastructure Upgrade",
    description:
      "Migrated to fully encrypted, self-hosted infrastructure. Published transparency report.",
  },
  {
    year: "2024",
    title: "Present",
    description:
      "47,000+ subscribers. 400+ issues. Still independent. Still fighting.",
    highlight: true,
  },
];

export function AboutTimeline() {
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-xs text-primary/80 tracking-wider">
              OUR JOURNEY
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Our History
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn(
                  "relative transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Year marker */}
                <div
                  className={cn(
                    "absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 border-2 flex items-center justify-center z-10",
                    event.highlight
                      ? "border-primary bg-primary box-glow"
                      : "border-primary/50 bg-background"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs font-bold",
                      event.highlight ? "text-background" : "text-primary"
                    )}
                  >
                    {event.year.slice(-2)}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "ml-16 sm:ml-0 sm:w-[calc(50%-3rem)]",
                    index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                  )}
                >
                  <div
                    className={cn(
                      "p-6 border backdrop-blur-sm transition-all hover:border-primary/40",
                      event.highlight
                        ? "border-primary/30 bg-primary/5"
                        : "border-primary/10 bg-card/30"
                    )}
                  >
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-mono text-2xl font-bold text-primary">
                        {event.year}
                      </span>
                      <span className="font-mono text-sm text-muted-foreground">
                        —
                      </span>
                      <span className="font-sans text-lg font-medium text-foreground">
                        {event.title}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
