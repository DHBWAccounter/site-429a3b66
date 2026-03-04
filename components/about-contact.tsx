"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageSquare, Key, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutContact() {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "transition-all duration-1000",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary/80 tracking-wider">
                SECURE COMMUNICATIONS
              </span>
            </div>
            <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Questions? Encrypted Communications Welcome.
            </h2>
            <p className="text-muted-foreground text-lg">
              We practice what we preach. Reach out securely:
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Signal */}
            <div className="p-6 border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <MessageSquare className="w-8 h-8 text-primary mb-4 group-hover:text-glow-subtle transition-all" />
              <h3 className="font-mono text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                Signal
              </h3>
              <p className="font-mono text-xs text-muted-foreground mb-3">
                Contact us at:
              </p>
              <code className="font-mono text-sm text-primary bg-primary/5 px-3 py-2 block border border-primary/20">
                [redacted for security]
              </code>
            </div>

            {/* PGP */}
            <div className="p-6 border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <Key className="w-8 h-8 text-primary mb-4 group-hover:text-glow-subtle transition-all" />
              <h3 className="font-mono text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                PGP
              </h3>
              <p className="font-mono text-xs text-muted-foreground mb-3">
                Our public key is available at:
              </p>
              <Link
                href="/pgp-key"
                className="font-mono text-sm text-primary hover:underline bg-primary/5 px-3 py-2 block border border-primary/20 text-center"
              >
                /pgp-key
              </Link>
            </div>

            {/* Email */}
            <div className="p-6 border border-primary/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors group">
              <Mail className="w-8 h-8 text-primary mb-4 group-hover:text-glow-subtle transition-all" />
              <h3 className="font-mono text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                Email
              </h3>
              <p className="font-mono text-xs text-muted-foreground mb-3">
                (but please use encryption)
              </p>
              <code className="font-mono text-sm text-primary bg-primary/5 px-3 py-2 block border border-primary/20">
                team@cypherpunklist.com
              </code>
            </div>
          </div>

          {/* CTA link */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-glow-subtle transition-all group"
            >
              <span>View our full contact page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
