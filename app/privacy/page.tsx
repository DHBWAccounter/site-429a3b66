import { PrivacyHero } from "@/components/privacy-hero";
import { PrivacyPolicy } from "@/components/privacy-policy";
import { PrivacyCollect } from "@/components/privacy-collect";
import { PrivacyInfrastructure } from "@/components/privacy-infrastructure";
import { PrivacyRights } from "@/components/privacy-rights";
import { PrivacyContact } from "@/components/privacy-contact";

export const metadata = {
  title: "Privacy Policy — Cypherpunk Email List",
  description: "Our privacy policy. We practice what we preach.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyPolicy />
      <PrivacyCollect />
      <PrivacyInfrastructure />
      <PrivacyRights />
      <PrivacyContact />
    </>
  );
}
