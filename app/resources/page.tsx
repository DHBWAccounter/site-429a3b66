import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResourcesHero } from "@/components/resources-hero";
import { ResourcesTools } from "@/components/resources-tools";
import { ResourcesGuides } from "@/components/resources-guides";
import { ResourcesReading } from "@/components/resources-reading";
import { ResourcesCta } from "@/components/resources-cta";

export const metadata = {
  title: "Privacy Resources — Cypherpunk Email List",
  description: "Curated tools, guides, and resources for digital privacy and security.",
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesHero />
        <ResourcesTools />
        <ResourcesGuides />
        <ResourcesReading />
        <ResourcesCta />
      </main>
      <Footer />
    </>
  );
}
