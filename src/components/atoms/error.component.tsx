// import styles from './atoms.module.scss';
import React from 'react';
interface ErrorProps {
    text?:string
}

export function Error({ text }:ErrorProps) {

  return (<p className={styles.error}>{text}</p>);
}
