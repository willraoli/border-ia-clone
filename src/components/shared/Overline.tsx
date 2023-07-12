import styles from "@/components/styles/shared/Overline.module.css";
import { PropsWithChildren } from "react";

const Overline = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.overline}>
      <h2>{children}</h2>
    </div>
  );
};

export default Overline;
