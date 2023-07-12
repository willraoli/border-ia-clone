import hamburgerList from "@/assets/hamburger-list.svg";
import mobileLogo from "@/assets/logo-mobile.svg";
import iconSparkles from "@/assets/sparkles.svg";
import Button from "@/components/shared/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./PluginInterface.module.css";

const PluginInterface: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navigation}>
          <Image src={mobileLogo} alt="" />
          <Image src={hamburgerList} alt="" />
        </div>
        <div className={styles.title}>Magic copy</div>
        <input
          type="text"
          placeholder="Crie exemplos de headline para meu produto"
          className={styles.input}
        />
        <div>Generating...</div>
        <Button variant="primary" icon={iconSparkles}>
          Start now
        </Button>
      </div>
    </div>
  );
};

export default PluginInterface;
