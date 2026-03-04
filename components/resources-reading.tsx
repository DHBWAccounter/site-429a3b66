"use client";

import { useEffect, useRef, useState } from "react";
import { Book, ExternalLink, Globe, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const books = [
  {
    title: "Permanent Record",
    author: "Edward Snowden",
    description: "Essential context",
  },
  {
    title: "Data and Goliath",
    author: "Bruce Schneier",
    description: "Surveillance economics",
  },
  {
    title: "The Art of Invisibility",
    author: "Kevin Mitnick",
    description: "Practical privacy",
  },
  {
    title: "Crypto",
    author: "Steven Levy",
    description: "History of the crypto wars",
  },
];

const websites = [
  {
    name: "Electronic Frontier Foundation",
    url: "https://eff.org",
    description: "Digital rights advocacy",
  },
  {
    name: "Privacy Guides",
    url: "https://privacyguides.org",
    description: "Tool recommendations",
  },
  {
    name: "r/privacy",
    url: "https://reddit.com/r/privacy",
    description: "Active community",
  },
  {
    name: "The New Oil",
    url: "https://thenewoil.org",
    description: "Privacy for regular people",
  },
];

export function ResourcesReading() {
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
    <section ref={ref} id="reading" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-primary/20 bg-primary/5">
            <span className="font-mono text-xs text-primary tracking-wider">
              SECTION 03
            </span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Further Reading
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Deepen your understanding with these essential resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Books */}
          <div
            className={cn(
              "transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                <Book className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-foreground">
                  Books We Recommend
                </h3>
                <span className="text-xs text-muted-foreground">
                  Foundational reading
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {books.map((book, index) => (
                <div
                  key={book.title}
                  className="group p-4 border border-border hover:border-primary/30 bg-card/30 hover:bg-card/50 transition-all duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary/5 border border-primary/20 flex-shrink-0">
                      <span className="font-mono text-xs text-primary font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-sm font-bold text-foreground mb-1">
                        &quot;{book.title}&quot;
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">
                        by {book.author}
                      </p>
                      <p className="text-xs text-primary">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Websites */}
          <div
            className={cn(
              "transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-foreground">
                  Websites & Communities
                </h3>
                <span className="text-xs text-muted-foreground">
                  Ongoing resources
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {websites.map((site, index) => (
                <a
                  key={site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 border border-border hover:border-primary/30 bg-card/30 hover:bg-card/50 transition-all duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-primary/5 border border-primary/20 flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    {index === 2 ? (
                      <Users className="w-4 h-4 text-primary" />
                    ) : (
                      <Globe className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {site.name}
                      </h4>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {site.url.replace("https://", "")}
                    </p>
                    <p className="text-xs text-primary">
                      {site.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
