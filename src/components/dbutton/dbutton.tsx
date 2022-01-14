
import React from "react";
import styles from "./dbutton.module.scss";


export const Dbutton = ({ 
  ...props
}) => {
  return (
    <div data-testid="dbutton" className={styles['dbutton']}>
      //add component render here
    </div>
  ) 
};

export default Dbutton;

