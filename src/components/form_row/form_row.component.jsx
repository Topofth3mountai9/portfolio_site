import styles from './form_row.module.scss';

export function Form_row({ children, other_class }) {
  // console.log(no_padding);
  // let padding_styles;
  // if (no_padding) {
  //   padding_styles = { paddingTop: '1.2rem', paddingBottom: '1.2rem' };
  // } else {
  //   padding_styles = {};
  // }
  return (
    <div className={`${styles.styled_form_row} ${other_class}`}>{children}</div>
  );
}
