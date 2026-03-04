"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Shield, UserX, Mail, XCircle, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do you protect subscriber data?",
    answer:
      "We store email addresses on encrypted infrastructure we control. We never share, sell, or monetize subscriber data. We don't use tracking pixels or analytics.",
    icon: Shield,
  },
  {
    question: "Can I subscribe anonymously?",
    answer:
      "Yes. Use a privacy-focused email provider (ProtonMail, Tutanota) and pay with cryptocurrency. We don't require any personal information.",
    icon: UserX,
  },
  {
    question: "What if I need to change my email?",
    answer:
      "Email us (encrypted preferred) from your new address with a signed message from your old key. We'll transfer your subscription.",
    icon: Mail,
  },
  {
    question: "How do I cancel?",
    answer:
      "One-click unsubscribe in every email. No questions asked, no retention games. Your data is deleted within 24 hours.",
    icon: XCircle,
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Students, journalists, and activists can apply for free Supporting Membership. Contact us with proof of status.",
    icon: GraduationCap,
  },
];

export function SubscribeFaq() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Subscription FAQ
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "relative group transition-all duration-700",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-start gap-4 text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-primary/30 bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-mono text-lg font-bold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 mt-1",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
