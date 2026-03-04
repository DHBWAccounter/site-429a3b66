"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What's your response time?",
    answer: "We aim for 72 hours. Often faster. Encrypted messages get priority.",
  },
  {
    question: "Can I submit a story or tip?",
    answer: "Yes. Use Signal or PGP email. We protect sources aggressively. We've never revealed a source and never will.",
  },
  {
    question: "Do you accept guest posts?",
    answer: "Occasionally. Pitch us via email with a brief outline. We prioritize technical accuracy and original research.",
  },
  {
    question: "Can I interview your team?",
    answer: "Possibly. Contact press@cypherpunklist.com with details. We prefer encrypted communication.",
  },
  {
    question: "I found a security vulnerability.",
    answer: "Please report it responsibly to security@cypherpunklist.com (PGP preferred). We appreciate responsible disclosure and will credit you if desired.",
  },
];

function FaqItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border transition-all duration-300",
        isOpen ? "border-primary/30 bg-primary/5" : "border-primary/10 bg-card/30 hover:border-primary/20"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-6 text-left"
      >
        <div className="flex-shrink-0 mt-1">
          <div className={cn(
            "flex items-center justify-center w-8 h-8 border transition-colors",
            isOpen ? "border-primary/50 bg-primary/10" : "border-primary/20 bg-primary/5"
          )}>
            <span className="font-mono text-xs text-primary/60">{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="font-mono text-base sm:text-lg font-bold text-foreground mb-2">
            {faq.question}
          </h3>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="text-muted-foreground leading-relaxed pt-2">
              {faq.answer}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 mt-1">
          <ChevronDown
            className={cn(
              "w-5 h-5 text-primary/60 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>
    </div>
  );
}

export function ContactFaq() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 border border-primary/30 bg-primary/5">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
              Contact FAQ
            </h2>
          </div>

          {/* FAQ items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
