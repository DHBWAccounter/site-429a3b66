"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Key, 
  Trash2, 
  Download, 
  Edit3, 
  Scale,
  AlertTriangle
} from "lucide-react";

const rights = [
  {
    icon: Key,
    title: "Access",
    description: "Email us to receive a copy of all data we hold about you. We'll respond within 48 hours.",
  },
  {
    icon: Trash2,
    title: "Deletion",
    description: "Unsubscribe at any time. Your data is purged within 24 hours. For payment records, we retain minimal transaction data for 7 years (legal requirement).",
  },
  {
    icon: Download,
    title: "Portability",
    description: "Request a machine-readable export of your data at any time.",
  },
  {
    icon: Edit3,
    title: "Correction",
    description: "Email us to correct any inaccurate information.",
  },
];

const legalSteps = [
  "Notify you unless gagged",
  "Challenge overbroad requests",
  "Provide minimal required information only",
];

export function PrivacyRights() {
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your <span className="text-primary">Rights</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Rights grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {rights.map((right, index) => {
            const Icon = right.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative group p-6 border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 border border-primary/30 bg-primary/5 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-foreground mb-2">
                      {right.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {right.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Requests */}
        <div
          className={cn(
            "relative p-8 border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 border border-primary/30 bg-primary/5">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-foreground">
              Legal Requests
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            We do not voluntarily cooperate with surveillance requests. If legally compelled, we will:
          </p>

          <div className="space-y-3 mb-6">
            {legalSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 border border-primary/30 bg-primary/10 flex-shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-primary">{index + 1}</span>
                </div>
                <span className="text-foreground">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-4 border border-primary/10 bg-primary/5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We have <span className="text-primary font-bold">never</span> received a government data request. 
              If we ever do, we&apos;ll report it in our transparency report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
