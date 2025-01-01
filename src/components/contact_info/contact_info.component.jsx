import { mans_info } from '../../data';
import styles from './contact_info.module.scss';

function Svg_wrapper({ svg }) {
  return (
    <>
      <div
        className={`${styles.svg_wrapper} flex_items align_middle align_horizontal position_relative`}
      >
        {svg}
      </div>
    </>
  );
}

function Individual_contact({ icon, label, info }) {
  return (
    <>
      <div
        className={`${styles.individual_contact_container} flex_items align_middle g_`}
      >
        <Svg_wrapper svg={icon} />
        <div className="contact_label_and_info lex_items g_1">
          <h2 className={`${styles.label} mb_0`}>{label}</h2>
          <span className={styles.info}>{info}</span>
        </div>
      </div>
    </>
  );
}

function Contact_info() {
  const individual_contact_elements = mans_info.map((info) => {
    return <Individual_contact key={info.id} {...info} />;
  });
  return (
    <div
      className={`${styles.contact_info_container} flex_items flex_column g_6`}
    >
      {individual_contact_elements}
    </div>
  );
}

export default Contact_info;
