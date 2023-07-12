import Image from "next/image";
import styles from "./Button.module.css";
import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  icon?: string;
  variant: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ children, icon, variant }) => {
  return (
    <button className={styles[variant]}>
      {icon && <Image src={icon} alt="" />}
      {children}
    </button>
  );
};

export default Button;
