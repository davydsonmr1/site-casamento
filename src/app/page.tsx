import { CinematicHero } from "@/components/CinematicHero";
import { GiftSection } from "@/components/GiftSection";

export default function HomePage() {
  return (
    <main className="relative bg-black text-white">
      <CinematicHero />
      <GiftSection />
    </main>
  );
}
