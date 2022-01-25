
import React from "react";
import styles from "./button-base.module.scss";

interface ButtonBaseProps {
  children:JSX.Element | string,
  className?:string,
  disabled?:boolean,
  onClick:()=>void,
}

export const ButtonBase = ({ 
  children,
  className,
  disabled,
  onClick,
  ...props
}:ButtonBaseProps) => {
  return (
    <button 
      {...props}
      onClick={onClick}
      data-testid="button-base" 
      className={`${styles['button-base']} ${className}` }
      disabled={disabled}
      aria-disabled={disabled}
      aria-role='button'
    >
      {children}
    </button>
  ) 
};

export default ButtonBase;

