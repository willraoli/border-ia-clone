import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Features />
      <Banner />
    </div>
  );
};

export default Home;
