import figmaInterface from "@/assets/figma-interface.png";
import figmaLogo from "@/assets/figma-logo.svg";
import PluginInterface from "@/components/PluginInterface";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Overline from "@/components/shared/Overline";
import Image from "next/image";
import { FC } from "react";
import styles from "./Hero.module.css";
import BackgroundEffects from "./BackgroundEffects";

const Hero: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Overline>figma plugin</Overline>
        <Heading>
          Acelere sua criação <span>de interfaces</span>
        </Heading>
        <div className={styles.subheading}>
          <p className={styles.paragraph}>
            Com o Border-IA, você poderá dar vida às suas ideias em tempo
            recorde.
          </p>
          <Button variant="primary" icon={figmaLogo}>
            usar no figma
          </Button>
        </div>
      </div>
      <Image
        src={figmaInterface}
        className={styles.figmaInterface}
        alt=""
        unoptimized
      />
      <BackgroundEffects />
      <PluginInterface />
    </section>
  );
};

export default Hero;
