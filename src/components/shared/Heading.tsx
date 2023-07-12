import styles from "@/components/styles/shared/Heading.module.css";
import { PropsWithChildren } from "react";

const Heading = ({ children }: PropsWithChildren) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
