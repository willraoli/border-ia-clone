import Button from "@/components/shared/Button";
import styles from "@/components/styles/Card.module.css";
import { FC } from "react";

interface CardProps {
  icon?: string;
  title?: string;
  description?: string;
}

const Card: FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      {icon && (
        <div className={styles.iconWrapper}>
          <Button variant="secondary" icon={icon} />
        </div>
      )}
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Card;
