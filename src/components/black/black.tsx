
import React from "react";
import styles from "./black.module.scss";


export const Black = ({ 
  ...props
}) => {
  return (
    <div data-testid="black" className={styles['black']}>
      //add component render here
    </div>
  ) 
};

export default Black;

