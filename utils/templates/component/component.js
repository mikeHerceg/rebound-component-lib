module.exports = (kebabCaseName, paschalCaseName) => ({
  content: `
import React from "react";
import styles from "./${kebabCaseName}.module.scss";

interface ${paschalCaseName}Props {

}

export const ${paschalCaseName} = ({ 
  ...props
}:${paschalCaseName}Props) => {
  return (
    <div data-testid="${kebabCaseName}" className={styles['${kebabCaseName}']}>
      //add component render here
    </div>
  ) 
};

export default ${paschalCaseName};

`,
  extension: `.tsx`,
});
