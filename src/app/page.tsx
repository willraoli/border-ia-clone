import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Features from "@/components/Features";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
