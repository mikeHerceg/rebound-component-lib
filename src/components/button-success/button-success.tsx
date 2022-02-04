import React from "react";
import styles from "./button-success.module.scss";
import { ButtonBase } from "../button-base";

interface ButtonSuccessProps {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick: () => void;
}

export const ButtonSuccess = ({
  children,
  disabled,
  onClick,
  ...props
}: ButtonSuccessProps) => {
  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={styles.success}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonSuccess;
