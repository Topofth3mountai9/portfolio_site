import styles from './section_heading_bg.module.scss';

function Section_heading_bg({ heading, other_class }) {
  return (
    <h2 className={`${other_class} ${styles.section_heading} text_center`}>
      {heading}
    </h2>
  );
}

export default Section_heading_bg;
