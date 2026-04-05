import { Advantages } from "@/components/Advantages";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProcessWork } from "@/components/ProcessWork";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Marquee />
      <Services />
      <ProcessWork />
      <Advantages />
      <Reviews />
    </div>
  );
}
