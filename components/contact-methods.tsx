"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, Shield, Mail, MapPin, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    rank: "MOST SECURE",
    icon: Lock,
    title: "Signal",
    description: "Our preferred contact method. End-to-end encrypted, no metadata retention.",
    details: [
      { label: "Signal Number", value: "Available upon request (we don't publish it to prevent spam)" }
    ],
    highlight: true,
  },
  {
    rank: "VERY SECURE",
    icon: Shield,
    title: "PGP-Encrypted Email",
    description: "Download our public key and send encrypted email.",
    details: [
      { label: "Email", value: "team@cypherpunklist.com" },
      { label: "PGP Fingerprint", value: "0x1A2B3C4D5E6F7890", mono: true },
    ],
    link: { href: "/pgp-key", label: "Download Public Key" },
    highlight: false,
  },
  {
    rank: "STANDARD",
    icon: Mail,
    title: "Regular Email",
    description: "If you don't need encryption, standard email is fine.",
    details: [
      { label: "General Inquiries", value: "team@cypherpunklist.com" },
      { label: "Editorial", value: "editor@cypherpunklist.com" },
      { label: "Press", value: "press@cypherpunklist.com" },
      { label: "Support", value: "support@cypherpunklist.com" },
    ],
    highlight: false,
  },
  {
    rank: "OFFLINE",
    icon: MapPin,
    title: "Physical Mail",
    description: "For sensitive documents or truly offline communication.",
    details: [
      { label: "Mailing Address", value: "Cypherpunk Email List\nPO Box 4703\n[City redacted for security]\n[Country]", multiline: true }
    ],
    note: "Note: We check physical mail monthly. Don't use this for time-sensitive matters.",
    highlight: false,
  },
];

export function ContactMethods() {
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
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Contact Methods
            </h2>
            <p className="text-muted-foreground text-lg">
              Ranked by <span className="text-primary font-medium">Security Level</span>
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>

          {/* Contact methods grid */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`relative p-6 sm:p-8 border transition-all duration-300 ${
                      method.highlight
                        ? "border-primary/40 bg-primary/5"
                        : "border-primary/10 bg-card/30 hover:border-primary/20"
                    } backdrop-blur-sm`}
                  >
                    {/* Decorative corner for highlighted item */}
                    {method.highlight && (
                      <>
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/50" />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/50" />
                      </>
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon and rank */}
                      <div className="flex-shrink-0">
                        <div
                          className={`flex items-center justify-center w-14 h-14 border ${
                            method.highlight
                              ? "border-primary/50 bg-primary/10"
                              : "border-primary/20 bg-primary/5"
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${method.highlight ? "text-primary" : "text-primary/70"}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="font-mono text-xs text-primary/60 tracking-wider uppercase">
                            {method.rank}
                          </span>
                          {method.highlight && (
                            <span className="px-2 py-0.5 border border-primary/30 bg-primary/10 font-mono text-xs text-primary">
                              RECOMMENDED
                            </span>
                          )}
                        </div>

                        <h3 className="font-mono text-xl font-bold text-foreground mb-2">
                          {method.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {method.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-2">
                          {method.details.map((detail, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider sm:min-w-[140px]">
                                {detail.label}:
                              </span>
                              <span
                                className={`${
                                  'mono' in detail && detail.mono ? "font-mono text-sm" : "text-sm"
                                } ${'multiline' in detail && detail.multiline ? "whitespace-pre-line text-muted-foreground" : "text-foreground"}`}
                              >
                                {detail.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Link */}
                        {method.link && (
                          <div className="mt-4">
                            <Link
                              href={method.link.href}
                              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
                            >
                              <Download className="w-4 h-4" />
                              <span>{method.link.label}</span>
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                            </Link>
                          </div>
                        )}

                        {/* Note */}
                        {method.note && (
                          <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed">
                            {method.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
