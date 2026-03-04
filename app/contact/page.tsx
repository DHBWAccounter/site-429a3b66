import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactMethods } from "@/components/contact-methods";
import { ContactFaq } from "@/components/contact-faq";
import { ContactCta } from "@/components/contact-cta";

export const metadata = {
  title: "Contact — Cypherpunk Email List",
  description: "Secure contact methods for the Cypherpunk Email List team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactMethods />
        <ContactFaq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
