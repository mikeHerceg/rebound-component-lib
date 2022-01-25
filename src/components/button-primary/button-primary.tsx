
import React from "react";
import styles from "./button-primary.module.scss";
import { ButtonBase } from "../button-base";

interface ButtonPrimaryProps {
  children:JSX.Element | string,
  disabled?:boolean,
  onClick:()=>void,
}

export const ButtonPrimary = ({ 
  children,
  disabled,
  onClick,
  ...props
}:ButtonPrimaryProps) => {
  return (
    <ButtonBase {...props} disabled={disabled} onClick={onClick} className={styles.primary}>
      {children}
    </ButtonBase>
  ) 
};

export default ButtonPrimary;

