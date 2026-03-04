import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ArchiveHero } from "@/components/archive-hero";
import { ArchiveList } from "@/components/archive-list";
import { ArchiveTopics } from "@/components/archive-topics";
import { ArchiveCTA } from "@/components/archive-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Newsletter Archive — Cypherpunk Email List",
  description: "Browse all past issues of the Cypherpunk Email List. 400+ issues of privacy intelligence.",
};

export default function ArchivePage() {
  return (
    <>
      <Header />
      <main>
        <ArchiveHero />
        <ArchiveList />
        <ArchiveTopics />
        <ArchiveCTA />
      </main>
      <Footer />
    </>
  );
}
