"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/30 bg-primary/5">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-mono text-xs text-primary tracking-wider">
            JOIN THE RESISTANCE
          </span>
        </div>

        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Subscribe free. Unsubscribe anytime.
          <span className="block text-primary text-glow-subtle mt-2">
            No tracking, no data selling, no compromises.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed">
          <span className="text-foreground font-medium">
            Every issue includes actionable steps you can take today to reclaim your privacy.
          </span>
        </p>

        <div className="max-w-xl mx-auto">
          {status !== "success" ? (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full h-14 px-6 bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                    disabled={status === "loading"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "h-14 px-8 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300",
                    "bg-primary text-background hover:box-glow-intense",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 h-14 px-6 bg-primary/10 border border-primary/30">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-primary">
                Check your inbox to confirm subscription
              </span>
            </div>
          )}

          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            We respect your privacy. Your email is stored on encrypted infrastructure and never shared.{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Read our Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
