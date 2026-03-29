import { Marquee } from "@/components/Marquee";
import { ProcessWork } from "@/components/ProcessWork";
import { Advantages } from "@/components/Advantages";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Marquee />
      <ProcessWork />
      <Advantages />
    </div>
  );
}
