import Button from "@/components/shared/Button";
import styles from "./page.module.css";
import figmaLogo from "@/assets/figma-logo.svg";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.overline}>
          <h2>figma plugin</h2>
        </div>
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
