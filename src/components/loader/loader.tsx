import React, { useMemo } from "react";
import styles from "./loader.module.scss";

interface LoaderProps {
  dotCount?: 3 | 5 | 7;
}

export const Loader = ({ dotCount = 5, ...props }: LoaderProps) => {
  const dots = useMemo(() => {
    let array = [];
    for (let i = 1; i <= dotCount; i++) {
      array.push(i);
    }
    return array;
  }, [dotCount]);
  return (
    <div {...props} data-testid="loader" className={styles["loader"]}>
      {dots.map(dot => {
        return <span key={dot}></span>;
      })}
    </div>
  );
};

export default Loader;
