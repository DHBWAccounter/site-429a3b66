import { SubscribeHero } from "@/components/subscribe-hero";
import { SubscribePricing } from "@/components/subscribe-pricing";
import { SubscribeFaq } from "@/components/subscribe-faq";
import { SubscribeForm } from "@/components/subscribe-form";

export const metadata = {
  title: "Subscribe — Cypherpunk Email List",
  description: "Join the Cypherpunk Email List. Free and paid membership options available.",
};

export default function SubscribePage() {
  return (
    <>
      <SubscribeHero />
      <SubscribePricing />
      <SubscribeFaq />
      <SubscribeForm />
    </>
  );
}
