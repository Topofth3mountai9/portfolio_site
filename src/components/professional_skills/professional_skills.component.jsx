import { skills } from '../../data';
import ProgressBar from '../progress_bar/progress_bar.component';
import Section_border from '../section_border/section_border.component';
import Section_heading from '../section_heading/section_heading.component';
import Section_heading_bg from '../section_heading_bg/section_heading_bg.component';
import SliderProgressBar from '../slider_progress_bar/slider_progress_bar.component';
import styles from './professional_skills.module.scss';

function Skill({ language, percentage, content }) {
  return (
    <>
      <div className={`${styles.skills_card_container}`}>
        <div className={`${styles.skill_container}`}>
          <div className={`${styles.header} flex_items mb_16`}>
            <span className={`${styles.language}`}>{language}</span>
            <span className={`${styles.percentage} text_emphasis`}>
              {percentage}%
            </span>
          </div>
          <p className={`${styles.skill_paragraph} mb_24`}>{content}</p>
        </div>
        <SliderProgressBar value={percentage}>
          <SliderProgressBar.Line />
          <SliderProgressBar.Slider />
        </SliderProgressBar>
      </div>
    </>
  );
}

function Professional_skills() {
  const skill_elements = skills.map((skill) => {
    // const {id, percentage, language, content} = skill
    return <Skill key={skill.id} {...skill} />;
  });
  return (
    <>
      <div className={`${styles.professional_skills} mb_144`}>
        <div className="container position_relative">
          <Section_heading_bg
            heading="My SKills"
            other_class={styles.section_header}
          />
          <div
            className={`${styles.professional_skills_container} grid align_middle `}
          >
            <Section_border other_class={styles.section_border} />
            <div className={`${styles.professional_skills_content} `}>
              <Section_heading h2="Professional skills" h3="my skills" />
              <div className={`${styles.actual_skills} grid g_6`}>
                {skill_elements}
              </div>
              {/* <ProgressBar value={66}>
              <ProgressBar.Bar />
              <ProgressBar.Label />
            </ProgressBar> */}

              {/* <SliderProgressBar value={66}>
                <SliderProgressBar.Line />
                <SliderProgressBar.Slider />
                {/* <SliderProgressBar.Label /> *}
              </SliderProgressBar> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professional_skills;
