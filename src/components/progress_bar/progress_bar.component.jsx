import React, { createContext, useContext } from 'react';
import styles from './progress_bar.module.scss';

const ProgressContext = createContext();

const ProgressBar = ({ children, value }) => {
  return (
    <ProgressContext.Provider value={value}>
      <div className={styles.progressBar}>{children}</div>
    </ProgressContext.Provider>
  );
};

const Bar = () => {
  const progress = useContext(ProgressContext);
  return <div className={styles.bar} style={{ width: `${progress}%` }} />;
};

const Label = () => {
  const progress = useContext(ProgressContext);
  return <div className={styles.label}>{`${progress}%`}</div>;
};

ProgressBar.Bar = Bar;
ProgressBar.Label = Label;

export default ProgressBar;
