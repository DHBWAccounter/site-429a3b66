import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-lg font-bold tracking-tighter text-primary">
                CYPHERPUNK
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
              A curated weekly newsletter for privacy advocates, cryptographers, and digital freedom
              fighters. Delivering actionable intelligence on surveillance, encryption, decentralized
              systems, and the tools that protect civil liberties in the digital age.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/cypherpunk-list"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/cypherpunklist"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/archive"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-mono text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
              Info
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>47,000+ subscribers</li>
              <li>8 years of publication</li>
              <li>400+ archived issues</li>
              <li>Reader-supported</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Cypherpunk Email List. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Privacy is a fundamental human right
          </p>
        </div>
      </div>
    </footer>
  );
}
