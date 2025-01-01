import Contact_form from '../contact_form/contact_form.component';
import Contact_info from '../contact_info/contact_info.component';
import Section_border from '../section_border/section_border.component';
import Section_heading from '../section_heading/section_heading.component';
import Section_heading_bg from '../section_heading_bg/section_heading_bg.component';
import styles from './contact.module.scss';

function Contact() {
  return (
    <>
      <div className={`${styles.contact} mb_9`}>
        <div className="container position_relative">
          <Section_heading_bg
            heading="Contact Me"
            other_class={styles.section_header}
          />
          <div className={`${styles.contact_container} grid align_middle`}>
            {/* <Section_border other_class={styles.section_border} /> */}
            <div className={`${styles.contact_content} `}>
              <Section_heading h2="Contact" h3="Let's Talk" />
              <div className={`${styles.helper_container} grid`}>
                <Section_border other_class={styles.section_border} />
                <div
                  className={`${styles.actual_contact} grid g_6 align_middle align_horizontal`}
                >
                  <Contact_info />
                  <Contact_form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
