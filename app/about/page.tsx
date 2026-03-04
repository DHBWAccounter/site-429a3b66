import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutMission } from "@/components/about-mission";
import { AboutTimeline } from "@/components/about-timeline";
import { AboutPrinciples } from "@/components/about-principles";
import { AboutTeam } from "@/components/about-team";
import { AboutContact } from "@/components/about-contact";

export const metadata: Metadata = {
  title: "About — Cypherpunk Email List",
  description:
    "Learn about our mission, history, and the philosophy behind the Cypherpunk Email List.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/20 bg-primary/5">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary/80 tracking-wider">
                ABOUT US
              </span>
            </div>

            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="block text-foreground">About —</span>
              <span className="block text-primary text-glow-subtle">
                Cypherpunk Email List
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Learn about our mission, history, and the philosophy behind the Cypherpunk Email
              List.
            </p>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Content sections */}
        <AboutMission />
        <AboutTimeline />
        <AboutPrinciples />
        <AboutTeam />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}
