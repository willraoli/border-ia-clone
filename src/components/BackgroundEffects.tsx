import dotGrid from "@/assets/dot-grid.svg";
import styles from "@/components/styles/BackgroundEffects.module.css";
import Image from "next/image";
import { FC } from "react";

const BackgroundEffects: FC = () => {
  return (
    <div>
      <div className={styles.background} />
      <div className={styles.line} />
      <Image src={dotGrid} className={styles.dotGrid} alt="" />
    </div>
  );
};

export default BackgroundEffects;
