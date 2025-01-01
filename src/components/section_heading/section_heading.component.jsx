import styles from './section_heading.module.scss';

function Section_heading({ h2, h3 }) {
  const [first, second] = h3.split(' ');

  return (
    <div className={`${styles.section_heading_container} mb_96 text_center`}>
      <h2 className={`${styles.heading_2}`}>{h2}</h2>
      <h3 className={`${styles.heading_3}`}>
        <span className="text_emphasis">{first} </span>
        <span className={`${styles.skills_emphasis}`}> {second}</span>
      </h3>
    </div>
  );
}

export default Section_heading;
