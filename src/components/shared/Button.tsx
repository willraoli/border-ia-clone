import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  icon?: string;
  variant: "primary" | "secondary";
}

const Button = ({ children, icon, variant }: ButtonProps) => {
  return (
    <button className={styles[variant]}>
      {icon && <Image src={icon} alt="" />}
      {children}
    </button>
  );
};

export default Button;
