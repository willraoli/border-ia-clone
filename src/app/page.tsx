import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
