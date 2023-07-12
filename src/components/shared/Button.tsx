import styles from "@/components/styles/shared/Button.module.css";
import Image from "next/image";
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
