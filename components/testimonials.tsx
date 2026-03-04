"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "This is the only newsletter I read every single week. The signal-to-noise ratio is unmatched. I've learned more about operational security from this list than from any other source.",
    author: "Moxie M.",
    role: "Security Researcher",
  },
  {
    quote:
      "Essential reading for anyone who works in journalism. I've recommended it to every colleague who handles sensitive sources.",
    author: "Sarah K.",
    role: "Investigative Journalist",
  },
  {
    quote:
      "I thought I knew privacy. This newsletter showed me how much I didn't know. The weekly threat intelligence alone is worth it.",
    author: "Derek T.",
    role: "Software Engineer",
  },
];

export function Testimonials() {
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-4">
            What Subscribers Say
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-700",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

              <div className="relative h-full p-8 border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/30 mb-6" />

                <blockquote className="text-foreground leading-relaxed mb-8 font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-border pt-6">
                  <div className="font-mono font-bold text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {testimonial.role}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 font-mono text-6xl text-primary/5 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
