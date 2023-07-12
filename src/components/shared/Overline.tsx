import { PropsWithChildren } from "react";
import styles from "./Overline.module.css";

const Overline = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.overline}>
      <h2>{children}</h2>
    </div>
  );
};

export default Overline;
