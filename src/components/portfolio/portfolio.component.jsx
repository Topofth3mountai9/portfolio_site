import Section_border from '../section_border/section_border.component';
import Section_heading from '../section_heading/section_heading.component';
import Section_heading_bg from '../section_heading_bg/section_heading_bg.component';
import { HiOutlineArrowRight } from 'react-icons/hi';
import styles from './portfolio.module.scss';
import { projects } from '../../data';
import Button from '../button/button.component';

function Project({
  project_screenshot_img,
  project_name,
  tech_stack,
  content,
}) {
  return (
    <>
      <div
        className={`${styles.project_container} flex_items flex_column  padding_all_around_2`}
      >
        <div className={`${styles.project_screenshot_wrapper} br_5`}>
          <img
            src={project_screenshot_img}
            alt={`${project_name} screen shot`}
            className={`${styles.project_img}`}
          />
        </div>
        <span className={`${styles.tech_stack} text_emphasis`}>
          {tech_stack}
        </span>
        <h2 className={`${styles.project_name}`}>{project_name}</h2>
        <p className={`${styles.project_content} mb_32`}>{content}</p>

        <div className={`${styles.see_project} flex_items g_1 align_middle`}>
          <h4 className={`${styles.see_project_h3} text_tiny`}>See Project</h4>
          <HiOutlineArrowRight className={`${styles.arrow_right_svg}`} />
        </div>
      </div>
    </>
  );
}

function Portfolio() {
  const project_elements = projects.map((project) => {
    return <Project key={project.id} {...project} />;
  });
  return (
    <>
      <div className="mb_144">
        <div className="container position_relative flex_items">
          <div className=" ">
            <Section_heading_bg
              heading="My Projects"
              other_class={styles.section_header}
            />
            {/* <div
              className={`${styles.portfolio_container} grid align_middle align_horizontal`}
            > */}
            <div
              className={`${styles.portfolio_container} flex_items align_middle align_horizontal`}
            >
              <div
                className={`${styles.portfolio_content} flex_items flex_column`}
              >
                <Section_heading h2="Portfolio" h3="My Projects" />
                <div className={`${styles.actual_projects} grid g_6`}>
                  {project_elements}
                </div>
                <div className="view_more_projects_btn mt_48 align_self_center">
                  <Button type="transparent" size="big">
                    view more
                  </Button>
                </div>
              </div>
              <Section_border other_class={styles.section_border} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
