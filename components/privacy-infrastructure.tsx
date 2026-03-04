"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Server, 
  Globe, 
  CreditCard,
  Shield,
  Check
} from "lucide-react";

const infrastructureItems = [
  {
    icon: Server,
    title: "Email Delivery",
    description: "We use a self-hosted email infrastructure. Your email address is stored in an encrypted database on servers we control.",
  },
  {
    icon: Globe,
    title: "Website Hosting",
    description: "Our website is hosted on encrypted virtual private servers. We don't use cloud services that scan or analyze content.",
  },
];

const paymentMethods = [
  {
    name: "Credit Cards",
    description: "Processed through Stripe. We never see your card number.",
  },
  {
    name: "Bitcoin",
    description: "Processed through our self-hosted BTCPay server. Completely private.",
  },
  {
    name: "Monero",
    description: "Direct wallet payments. Maximum privacy.",
  },
];

const requirements = [
  "Have a verified no-logs policy",
  "Be audited by a reputable third party",
  "Not share data with data brokers or governments",
];

export function PrivacyInfrastructure() {
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
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Infrastructure</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Infrastructure items */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {infrastructureItems.map((item, index) => {
            const Icon = item.icon;
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
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Processing */}
        <div
          className={cn(
            "relative mb-12 p-8 border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 border border-primary/30 bg-primary/5">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-foreground">
              Payment Processing
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-4 border border-primary/10 bg-primary/5"
              >
                <div className="font-mono text-sm font-bold text-foreground mb-1">
                  {method.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {method.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third-Party Services */}
        <div
          className={cn(
            "relative p-8 border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 border border-primary/30 bg-primary/5">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-mono text-xl font-bold text-foreground">
              Third-Party Services
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            We use minimal third-party services. Any service we use must:
          </p>

          <div className="space-y-3 mb-6">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 border border-primary/30 bg-primary/10 flex-shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-primary">{index + 1}</span>
                </div>
                <span className="text-foreground">{req}</span>
              </div>
            ))}
          </div>

          <div className="p-4 border border-primary/10 bg-primary/5">
            <p className="font-mono text-sm text-primary">
              Currently, we use no third-party analytics, advertising, or tracking services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
