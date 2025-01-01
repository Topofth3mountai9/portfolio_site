import React, { createContext, useContext } from 'react';
import styles from './slider_progress_bar.module.scss';

// Step 1: Create a context for the progress value
const ProgressContext = createContext();

// Step 2: Create the main ColoredSliderProgressBar component
const SliderProgressBar = ({ children, value }) => {
  return (
    <ProgressContext.Provider value={value}>
      <div className={styles.progressBar}>{children}</div>
    </ProgressContext.Provider>
  );
};

// Step 3: Create subcomponents for the progress bar
const Line = () => {
  const progress = useContext(ProgressContext);
  return (
    <>
      <div className={styles.lineBackground} />
      <div className={styles.lineColored} style={{ width: `${progress}%` }} />
    </>
  );
};

const Slider = () => {
  const progress = useContext(ProgressContext);
  return (
    <div
      className={styles.slider}
      style={{ left: `calc(${progress}% - 10px)` }}
    />
  );
};

const Label = () => {
  const progress = useContext(ProgressContext);
  return <div className={styles.label}>{`${progress}%`}</div>;
};

// Step 4: Attach subcomponents to the main component
SliderProgressBar.Line = Line;
SliderProgressBar.Slider = Slider;
SliderProgressBar.Label = Label;

export default SliderProgressBar;
