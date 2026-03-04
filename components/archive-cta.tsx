"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArchiveCTA() {
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
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border border-primary/30 bg-card/50 backdrop-blur-sm p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-primary/20 bg-primary/5">
                <Mail className="w-3 h-3 text-primary" />
                <span className="font-mono text-xs text-primary tracking-wider">NEVER MISS AN ISSUE</span>
              </div>
              
              <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                The archive is great.
                <span className="block text-primary text-glow-subtle mt-1">
                  Getting issues in your inbox is better.
                </span>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Subscribe now and join 47,000+ privacy advocates.</span>
              </p>
            </div>

            {/* Right side - form */}
            <div className="w-full lg:w-auto lg:min-w-[320px]">
              {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 px-4 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-mono text-sm text-foreground placeholder:text-muted-foreground transition-colors"
                      disabled={status === "loading"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={cn(
                      "w-full h-12 px-6 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300",
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
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 h-[104px] px-6 bg-primary/10 border border-primary/30">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm text-primary">
                    Check your inbox to confirm
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
