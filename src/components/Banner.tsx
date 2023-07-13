import styles from "@/components/styles/Banner.module.css";
import { FC } from "react";
import Button from "./shared/Button";
import figmaLogo from "@/assets/figma-logo-black.svg";
import Image from "next/image";

interface Avatar {
  results: [
    {
      picture: {
        thumbnail: string;
      };
    }
  ];
}

const getAvatars = async () => {
  const res = await fetch("https://randomuser.me/api/?results=4");
  return res.json();
};

const Banner: FC = async () => {
  const avatars: Avatar = await getAvatars();

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.avatarContent}>
          <div className={styles.avatar}>
            {avatars.results.map((img, idx) => (
              <Image
                key={idx}
                src={img.picture.thumbnail}
                width={48}
                height={48}
                alt=""
              />
            ))}
          </div>
          <div className={styles.userCount}>
            mais de +5000 designers já estão utilizando
          </div>
        </div>
        <div className={styles.heading}>
          <h2>Concentre-se no design, não na rotina</h2>
        </div>
        <Button variant="banner" icon={figmaLogo}>
          usar no figma
        </Button>
      </div>
    </section>
  );
};

export default Banner;
