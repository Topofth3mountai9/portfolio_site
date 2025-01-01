import { useState } from 'react';
import styles from './nav_bar.module.scss';
import {
  HiOutlineBars2,
  HiOutlineBars3BottomRight,
  HiXMark,
} from 'react-icons/hi2';
import { nav_links } from '../../data';
import { set } from 'react-hook-form';
import Bar from '../hamburger/hamburger.component';
import Hamburger from '../hamburger/hamburger.component';
import Section_border from '../section_border/section_border.component';

function Nav_bar() {
  const [is_nav_open, set_is_nav_open] = useState(false);
  function handle_nav_bar() {
    set_is_nav_open((prev) => !prev);
  }

  function close_nav_bar() {
    set_is_nav_open(false);
  }

  const nav_link_elements = nav_links.map((link) => {
    const { id, label, url } = link;
    return (
      <li key={link.id} className={`${styles.sidebar_individual_link}`}>
        <a href={url} className={`${styles.link_label}`}>
          {label}
        </a>
      </li>
    );
  });
  return (
    <>
      <div id="nav">
        <div className="container mb_80">
          <div
            className={`${styles.nav_bar_container} flex_items align_middle`}
          >
            <div className="logo">
              <h2 className={`${styles.logo} flex_items align_middle`}>
                Web <span className={`${styles.logo_emphasis}`}>Dev</span>
              </h2>
            </div>
            <div
              className={`${styles.hamburger_menu} `}
              onClick={handle_nav_bar}
            >
              {/* <HiOutlineBars3BottomRight /> */}
              {/* <HiOutlineBars2 className={`${styles.hamburger_menu_svg}`} /> */}
              <Hamburger is_nav_open={is_nav_open} />
            </div>
            <div
              className={`${styles.side_nav} ${
                is_nav_open ? styles.show_side_nav : ''
              } grid align_middle align_horizontal g_ padding_all_around_4`}
            >
              {/* <div
              className={`${styles.side_nav} ${
                is_nav_open ? styles.show_side_nav : ''
              } flex_items align_middle align_horizontal g_2 padding_all_around_4`}
            > */}
              <Section_border other_class={styles.section_border} />
              <div
                className={`${styles.sidebar_links} flex_items flex_column g_1`}
              >
                {nav_link_elements}
              </div>
              {/* < className={`${styles.sidebar_links_container} flex_items`}>
              </> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav_bar;
