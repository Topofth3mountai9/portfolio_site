import styles from './section_border.module.scss';

function Section_border({ other_class }) {
  return <div className={`${styles.section_border} ${other_class}`}></div>;
}

export default Section_border;
