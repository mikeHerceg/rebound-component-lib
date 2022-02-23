import React from "react";
import styles from "./card.module.scss";

interface CardProps {
  children: JSX.Element;
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div {...props} data-testid="card" className={styles["card"]}>
      {children}
    </div>
  );
};

export default Card;
