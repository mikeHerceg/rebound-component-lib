import React from "react";
import styles from "./button-danger.module.scss";
import { ButtonBase } from "../button-base";

interface ButtonDangerProps {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick: () => void;
}

export const ButtonDanger = ({
  children,
  disabled,
  onClick,
  ...props
}: ButtonDangerProps) => {
  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={styles.danger}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonDanger;
