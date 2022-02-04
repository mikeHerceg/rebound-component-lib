import React from "react";
import styles from "./button-warning.module.scss";
import { ButtonBase } from "../button-base";

interface ButtonWarningProps {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick: () => void;
}

export const ButtonWarning = ({
  children,
  disabled,
  onClick,
  ...props
}: ButtonWarningProps) => {
  return (
    <ButtonBase
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={styles.warning}
    >
      {children}
    </ButtonBase>
  );
};

export default ButtonWarning;
