"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Eye, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutMission() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "transition-all duration-1000",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary/80 tracking-wider">
                OUR PURPOSE
              </span>
            </div>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Mission
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          {/* Main statement */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="font-mono text-xl sm:text-2xl text-primary text-center leading-relaxed">
              The Cypherpunk Email List exists to{" "}
              <span className="text-glow-subtle font-bold">democratize privacy knowledge</span>.
            </p>
          </div>

          {/* Historical context */}
          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            <div className="p-6 border border-primary/10 bg-card/30 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed">
                In 1992, a group of visionaries formed the original Cypherpunks mailing list. They
                believed that cryptography could fundamentally change the balance of power between
                individuals and institutions. <span className="text-primary font-medium">They were right.</span>
              </p>
            </div>

            <div className="p-6 border border-destructive/20 bg-destructive/5">
              <p className="text-muted-foreground leading-relaxed">
                Today, their vision is more relevant than ever. Mass surveillance has become
                normalized. Data harvesting is a trillion-dollar industry. The right to private
                communication is under sustained attack worldwide.
              </p>
            </div>

            <div className="p-6 border border-primary/20 bg-primary/5">
              <p className="text-foreground leading-relaxed">
                We continue that original cypherpunk tradition:{" "}
                <span className="text-primary font-medium">sharing knowledge, building tools, and fighting for digital autonomy.</span>
              </p>
            </div>
          </div>

          {/* Icon row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "Defend Privacy" },
              { icon: Eye, label: "Expose Surveillance" },
              { icon: Lock, label: "Encrypt Everything" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 border border-primary/10 bg-card/20 hover:border-primary/30 transition-colors group"
              >
                <item.icon className="w-8 h-8 text-primary group-hover:text-glow-subtle transition-all" />
                <span className="font-mono text-sm text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
