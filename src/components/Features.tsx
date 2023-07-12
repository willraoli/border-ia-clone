import iconArrowsOut from "@/assets/arrows-out.svg";
import iconText from "@/assets/icon-text.svg";
import iconSparkles from "@/assets/sparkle.svg";
import iconUserFocus from "@/assets/user-focus.svg";
import Card from "@/components/Card";
import Heading from "@/components/shared/Heading";
import Overline from "@/components/shared/Overline";
import styles from "@/components/styles/Features.module.css";
import { FC } from "react";

const Features: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.texts}>
        <Overline>recursos</Overline>
        <Heading>
          Como o Border-IA te <span>ajuda no dia a dia</span>
        </Heading>
      </div>
      <div className={styles.cards}>
        <Card
          icon={iconSparkles}
          title="Removedor de fundo"
          description="Torne o fundo transparente em qualquer foto."
        />
        <Card
          icon={iconText}
          title="Gerador de texto"
          description="Gere textos de espaço reservado para suas interfaces."
        />
        <Card
          icon={iconArrowsOut}
          title="Amplificador de imagem"
          description="Amplie imagens e melhore sua resolução."
        />
        <Card
          icon={iconUserFocus}
          title="Gerador de avatar"
          description="Crie instantaneamente avatares de usuários."
        />
      </div>
    </section>
  );
};

export default Features;
