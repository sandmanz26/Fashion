import { Hero } from "@/components/sections/hero";
import { EditorialIntro } from "@/components/sections/editorial-intro";
import { ShopDiscovery } from "@/components/sections/shop-discovery";
import { PatternSpotlight } from "@/components/sections/pattern-spotlight";
import { KitSpotlight } from "@/components/sections/kit-spotlight";
import { SocialProof } from "@/components/sections/social-proof";
import { KnittingAsFashion } from "@/components/sections/knitting-as-fashion";
import { StartHere } from "@/components/sections/start-here";
import { LimitedDrop } from "@/components/sections/limited-drop";
import { Membership } from "@/components/sections/membership";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <ShopDiscovery />
      <PatternSpotlight />
      <KitSpotlight />
      <SocialProof />
      <KnittingAsFashion />
      <StartHere />
      <LimitedDrop />
      <Membership />
      <Newsletter />
    </>
  );
}
