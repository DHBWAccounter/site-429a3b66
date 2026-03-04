"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Mail, 
  CreditCard, 
  Eye, 
  BarChart3, 
  Server,
  Check,
  X
} from "lucide-react";

const collectItems = [
  {
    icon: Mail,
    title: "Email Address",
    weCollect: "Your email address to send you the newsletter.",
    weDont: "Share it, sell it, or use it for anything else without your consent.",
  },
  {
    icon: CreditCard,
    title: "Payment Information",
    weCollect: "Nothing directly. Our payment processors (Stripe, BTCPay) handle this.",
    weDont: "Store credit card numbers. We receive only a transaction confirmation.",
  },
  {
    icon: Eye,
    title: "Reading Behavior",
    weCollect: null,
    weDont: "Track opens, clicks, or engagement. We have no idea if you read our emails. We don't use tracking pixels, web beacons, or any surveillance technology.",
  },
  {
    icon: BarChart3,
    title: "Website Analytics",
    weCollect: "Self-hosted Plausible Analytics (no cookies, GDPR compliant). We track aggregate page views. No individual visitor tracking.",
    weDont: null,
  },
  {
    icon: Server,
    title: "Logs",
    weCollect: "Server logs for 7 days for security purposes only.",
    weDont: "All logs older than 7 days are automatically purged.",
  },
];

export function PrivacyCollect() {
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
            What We Collect <span className="text-primary">(And Why)</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Items grid */}
        <div className="space-y-6">
          {collectItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={cn(
                  "relative group transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 border border-primary/30 bg-primary/5 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-16 space-y-3">
                    {item.weCollect && (
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 border border-primary/30 bg-primary/10 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-primary uppercase tracking-wider">We Collect: </span>
                          <span className="text-muted-foreground">{item.weCollect}</span>
                        </div>
                      </div>
                    )}

                    {item.weDont && (
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-5 h-5 border border-destructive/30 bg-destructive/10 flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-destructive" />
                        </div>
                        <div>
                          <span className="font-mono text-xs text-destructive uppercase tracking-wider">We Don&apos;t: </span>
                          <span className="text-muted-foreground">{item.weDont}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
