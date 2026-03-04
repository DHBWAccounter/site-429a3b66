"use client";

import Link from "next/link";
import { ArrowRight, Mail, Key } from "lucide-react";

export function PrivacyContact() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 border border-primary/30 bg-primary/5">
          <Mail className="w-8 h-8 text-primary" />
        </div>

        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Questions About
          <span className="block text-primary text-glow-subtle mt-2">
            This Policy?
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 leading-relaxed">
          We welcome scrutiny. Contact us:
        </p>

        {/* Contact info */}
        <div className="max-w-md mx-auto space-y-4 mb-12">
          <div className="p-4 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">Email:</span>
              </div>
              <a 
                href="mailto:privacy@cypherpunklist.com"
                className="font-mono text-sm text-foreground hover:text-primary transition-colors"
              >
                privacy@cypherpunklist.com
              </a>
            </div>
          </div>

          <div className="p-4 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Key className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">PGP:</span>
              </div>
              <Link 
                href="/pgp-key"
                className="font-mono text-sm text-foreground hover:text-primary transition-colors"
              >
                Encrypt your message using our public key
              </Link>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-8">
          We&apos;ll respond within <span className="text-primary font-medium">72 hours</span>. Usually faster.
        </p>

        {/* Decorative terminal prompt */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-primary/5">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-mono text-xs text-primary/80 tracking-wider">
            TRANSPARENCY IS NON-NEGOTIABLE
          </span>
        </div>
      </div>
    </section>
  );
}
