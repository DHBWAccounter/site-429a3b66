"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Lock, CreditCard, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SubscribeForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [tier, setTier] = useState<"free" | "supporting">("free");
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "bitcoin" | "monero">("credit");

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Subscribe Now
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div
          className={cn(
            "relative transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="absolute inset-0 bg-primary/5 blur-xl" />
          <div className="relative border-2 border-primary/30 bg-card/80 backdrop-blur-sm p-8 sm:p-10">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-4 font-mono text-xs text-muted-foreground tracking-wider">
                SECURE_SUBSCRIPTION_FORM
              </span>
            </div>

            <form className="space-y-6">
              {/* Email Address */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground font-medium">
                    Email Address
                  </span>
                  <span className="text-xs text-primary">(required)</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-primary/20 font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Membership Tier */}
              <div>
                <label className="flex items-center gap-2 mb-3">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-foreground font-medium">
                    Membership Tier
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setTier("free")}
                    className={cn(
                      "p-4 border font-mono text-sm transition-all duration-300",
                      tier === "free"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-primary/20 bg-background text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    Free — $0/mo
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier("supporting")}
                    className={cn(
                      "p-4 border font-mono text-sm transition-all duration-300",
                      tier === "supporting"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-primary/20 bg-background text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    Supporting — $7/mo
                  </button>
                </div>
              </div>

              {/* Payment Method (only for supporting) */}
              {tier === "supporting" && (
                <div>
                  <label className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-foreground font-medium">
                      Payment Method
                    </span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("credit")}
                      className={cn(
                        "p-3 border font-mono text-xs transition-all duration-300",
                        paymentMethod === "credit"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/20 bg-background text-muted-foreground hover:border-primary/40"
                      )}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bitcoin")}
                      className={cn(
                        "p-3 border font-mono text-xs transition-all duration-300",
                        paymentMethod === "bitcoin"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/20 bg-background text-muted-foreground hover:border-primary/40"
                      )}
                    >
                      Bitcoin
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("monero")}
                      className={cn(
                        "p-3 border font-mono text-xs transition-all duration-300",
                        paymentMethod === "monero"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/20 bg-background text-muted-foreground hover:border-primary/40"
                      )}
                    >
                      Monero
                    </button>
                  </div>
                  {(paymentMethod === "bitcoin" || paymentMethod === "monero") && (
                    <div className="mt-3 flex items-center gap-2 text-xs text-primary">
                      <AlertCircle className="w-3 h-3" />
                      <span className="font-mono">15% discount applied</span>
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-mono font-bold tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                <span>INITIATE SUBSCRIPTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Terms */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  By subscribing, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-primary hover:underline underline-offset-2">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </form>

            {/* Contact info */}
            <div className="mt-8 pt-6 border-t border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                Questions? Contact us at{" "}
                <a
                  href="mailto:subscribe@cypherpunklist.com"
                  className="text-primary font-mono hover:underline underline-offset-2"
                >
                  subscribe@cypherpunklist.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
