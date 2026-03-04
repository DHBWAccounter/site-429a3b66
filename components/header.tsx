"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-primary/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
              <span className="relative font-mono text-lg font-bold tracking-tighter text-primary">
                CYPHERPUNK
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/archive"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Archive
            </Link>
            <Link
              href="/resources"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <a
                href="https://github.com/cypherpunk-list"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/cypherpunklist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-border bg-background/95 backdrop-blur-xl",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          <Link
            href="/about"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/archive"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Archive
          </Link>
          <Link
            href="/resources"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Resources
          </Link>
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <a
              href="https://github.com/cypherpunk-list"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/cypherpunklist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
