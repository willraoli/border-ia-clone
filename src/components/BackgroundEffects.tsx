import dotGrid from "@/assets/dot-grid.svg";
import Image from "next/image";
import { FC } from "react";
import styles from "./BackgroundEffects.module.css";

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
