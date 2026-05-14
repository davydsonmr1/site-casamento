import { CinematicHero } from "@/components/CinematicHero";
import { GiftSection } from "@/components/GiftSection";
import { OurStory } from "@/components/OurStory";
import { RsvpSection } from "@/components/RsvpSection";

export default function HomePage() {
  return (
    <main className="relative bg-white text-zinc-900 dark:bg-black dark:text-white">
      <CinematicHero />
      <OurStory />
      <RsvpSection />
      <GiftSection />
    </main>
  );
}
