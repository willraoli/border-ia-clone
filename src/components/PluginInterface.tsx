import circleNotch from "@/assets/circle-notch.svg";
import hamburgerList from "@/assets/hamburger-list.svg";
import mobileLogo from "@/assets/logo-mobile.svg";
import iconSparkles from "@/assets/sparkles.svg";
import Button from "@/components/shared/Button";
import styles from "@/components/styles/PluginInterface.module.css";
import Image from "next/image";
import { FC } from "react";

const PluginInterface: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Image src={mobileLogo} alt="" />
          <Image src={hamburgerList} alt="" />
        </div>
        <div className={styles.title}>Magic copy</div>
        <div className={styles.input}>
          Crie exemplos de headline para meu produto
        </div>
        <div className={styles.loading}>
          <Image src={circleNotch} alt="" unoptimized /> Generating...
        </div>
        <Button variant="primary" icon={iconSparkles}>
          Start now
        </Button>
      </div>
      <div className={styles.purpleLight} />
    </div>
  );
};

export default PluginInterface;
