import dotGrid from "@/assets/dot-grid.svg";
import styles from "@/components/styles/HeroBackgroundEffects.module.css";
import Image from "next/image";
import { FC } from "react";

const HeroBackgroundEffects: FC = () => {
  return (
    <div>
      <div className={styles.background} />
      <div className={styles.line} />
      <Image src={dotGrid} className={styles.dotGrid} alt="" />
    </div>
  );
};

export default HeroBackgroundEffects;
