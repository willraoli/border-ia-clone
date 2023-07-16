import desktopLogo from "@/assets/logo-desktop.svg";
import discordLogo from "@/assets/logo-discord.svg";
import githubLogo from "@/assets/logo-github.svg";
import instagramLogo from "@/assets/logo-instagram.svg";
import Button from "@/components/shared/Button";
import Image from "next/image";
import { FC } from "react";
import styles from "./styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <>
      <hr className={styles.ruler} />
      <footer className={styles.container}>
        <Image src={desktopLogo} alt="" />
        <div className={styles.iconWrapper}>
          <Button variant={"secondary"} icon={githubLogo} />
          <Button variant={"secondary"} icon={discordLogo} />
          <Button variant={"secondary"} icon={instagramLogo} />
        </div>
        <div className={styles.authorText}>
          UI por: Jonas Milan & André Valentim
          <br />
          Frontend por: William Oliveira
        </div>
      </footer>
    </>
  );
};

export default Footer;
