import styles from './hamburger.module.scss';

function Bar({ other_class }) {
  return <div className={`${styles.bar} ${other_class}`}></div>;
}

function Hamburger({ is_nav_open }) {
  return (
    <div
      className={`${styles.hamburger_container} ${
        is_nav_open ? styles.change_hamburger_menu : ''
      } flex_items flex_column`}
    >
      <Bar other_class={styles.line_1} />
      <Bar other_class={styles.line_2} />
    </div>
  );
}

export default Hamburger;
