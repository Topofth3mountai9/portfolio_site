import Button from '../button/button.component';
import styles from './hero.module.scss';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
// import { Badge } from '@shadcn/ui';
import Hero_tag from '../hero_tag/hero_tag.component';
import Section_border from '../section_border/section_border.component';
import Section_heading_bg from '../section_heading_bg/section_heading_bg.component';
function Hero() {
  return (
    <>
      <div class={`${styles.hero} flex_items mb_`}>
        <div className="container_sm position_relative">
          <Section_heading_bg
            heading="Web Developer"
            other_class={styles.section_header}
          />
          <div
            className={`${styles.hero_container} grid align_middl align_horizontal position_relative`}
          >
            <Section_border other_class={styles.section_border} />
            <div className={`${styles.hero_header} flex_items flex_column`}>
              <h4 className={`${styles.greeting}`}>
                Hello, <span className="text_emphasis">My name is</span>{' '}
              </h4>
              <h3 className={`${styles.name} mb_0`}>
                <span className="text_emphasis">Some </span> Name
              </h3>
              <h4
                className={`${styles.what_man_do} flex_items align_middle g_1`}
              >
                I am a <span className={`${styles.skill}`}>web developer</span>
              </h4>
              <p className={`${styles.hero_text} mb_32`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem quisquam facilis reprehenderit sunt aliquam
                officiis sint totam non deserunt voluptatibus.
              </p>
              <div className="socials flex_items g_1 mb_48">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
              <div className={`${styles.hero_cta} flex_items align_middle g_4`}>
                <div
                  className={`${styles.cta} flex_items align_middle g_ position_relative`}
                >
                  <Button type="transparent" size="big">
                    Download cv
                  </Button>
                </div>
                <div className={`${styles.my_skills}`}>
                  <span>My skills</span>
                </div>
              </div>
            </div>
            <div className={`${styles.hero_img} position_relative`}>
              <div className={`${styles.hero_img_wrapper}`}>
                <img
                  src="./images/developer.png"
                  alt=""
                  className={`${styles.actual_img}`}
                />
                <div className={`${styles.hero_img_bg}`}></div>
              </div>
              <div className={`${styles.tag_experience}`}>
                <Hero_tag stat={15} stat_info="years of experience" />
              </div>
              <div className={`${styles.tag_projects_completed}`}>
                <Hero_tag stat="390+" stat_info="completed projects" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
