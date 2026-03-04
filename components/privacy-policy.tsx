"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, AlertCircle } from "lucide-react";

export function PrivacyPolicy() {
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 border border-primary/30 bg-primary/5">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
              Our Privacy Policy
            </h2>
          </div>

          {/* Main content card */}
          <div className="relative p-8 border border-primary/20 bg-card/50 backdrop-blur-sm">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/30 opacity-50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/30 opacity-50" />

            <div className="relative space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                We&apos;re a privacy organization. Our privacy policy isn&apos;t legal fine print—
                <span className="text-primary font-semibold"> it&apos;s a commitment.</span>
              </p>

              <div className="flex items-start gap-4 p-4 border border-primary/10 bg-primary/5">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="font-mono text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-medium">Last Updated:</span> December 2024
                  <br />
                  <span className="text-foreground font-medium">Next Review:</span> June 2025
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                This policy outlines exactly what data we collect, how we use it, and your rights 
                regarding your personal information. We believe in radical transparency—
                <span className="text-foreground">if you have questions, ask us.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
