import styles from './nav_and_hero.module.scss';
import Nav_bar from '../nav_bar/nav_bar.component';
import Hero from '../hero/hero.component';

function Nav_and_hero() {
  return (
    <div className={`${styles.nav_and_header_container} mb_14`}>
      <Nav_bar />
      <Hero />
    </div>
  );
}

export default Nav_and_hero;
