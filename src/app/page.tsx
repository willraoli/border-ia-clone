import figmaInterface from "@/assets/figma-interface.png";
import figmaLogo from "@/assets/figma-logo.svg";
import PluginInterface from "@/components/PluginInterface";
import Button from "@/components/shared/Button";
import Heading from "@/components/shared/Heading";
import Overline from "@/components/shared/Overline";
import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
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
      <PluginInterface />
      <div className={styles.background}></div>
    </section>
  );
};

export default Home;
