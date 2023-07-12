import hamburger from "@/assets/hamburger.svg";
import desktopLogo from "@/assets/logo-desktop.svg";
import mobileLogo from "@/assets/logo-mobile.svg";
import Button from "@/components/shared/Button";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.wrapper}>
        <div className={styles.leftSide}>
          <Image className={styles.mobileLogo} src={mobileLogo} alt="" />
          <Image className={styles.desktopLogo} src={desktopLogo} alt="" />
          <ul className={styles.list}>
            <li>
              <Link href="/">Sobre</Link>
            </li>
            <li>
              <Link href="/">Recursos</Link>
            </li>
            <li>
              <Link href="/">Depoimentos</Link>
            </li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <Button variant="secondary">comunidade</Button>
          <Image className={styles.hamburger} src={hamburger} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
