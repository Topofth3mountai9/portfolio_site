import styles from './hero_tag.module.scss';

function Hero_tag({ stat, stat_info }) {
  return (
    <div
      className={`${styles.tag_container} flex_items align_middle align_horizontal g_1 br_200`}
    >
      <span className={`${styles.stat}`}>{stat}</span>
      <span className={`${styles.stat_info} text_emphasis`}>{stat_info}</span>
    </div>
  );
}

export default Hero_tag;
