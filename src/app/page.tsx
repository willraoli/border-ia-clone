import figmaLogo from "@/assets/figma-logo.svg";
import Button from "@/components/shared/Button";
import Overline from "@/components/shared/Overline";
import styles from "./page.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Overline>figma plugin</Overline>
        <h1 className={styles.heading}>
          Acelere sua criação <span>de interfaces</span>
        </h1>
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
      <div className={styles.background}></div>
    </section>
  );
};

export default Home;
