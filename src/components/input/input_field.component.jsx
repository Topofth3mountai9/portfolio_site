import { useFormContext } from 'react-hook-form';
import styles from './input_field.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';
// import { find_input_error } from '../../helpers/find_input_error';
import { find_input_error } from '../../helpers/find_input_error';
import { is_form_invalid } from '../../helpers/is_form_invalid';
// import { useLocation, useParams } from 'react-router-dom';

let input_background = {
  light: { background: '#fff' },
  dark: { background: '' },
};

function Input_error({ message }) {
  return (
    <motion.span
      className="error_message flex_items align_middle"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.span>
  );
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

function Input_field({
  id,
  title,
  type,
  background,
  label = false,
  placeholder,
  is_working,
  validationRules,
  text_area,
  svg,
}) {
  let input_styles = {};
  //read the url so that you can appropriately show the form
  // let { pathname } = useLocation();
  // if (pathname.includes('general'))
  //   input_styles = { gridTemplateColumns: '10rem 1fr auto 1fr' };
  //make the default type text

  const input_type = type ? type : 'text';
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // console.log(`Errors`, errors);

  const input_error = find_input_error(errors, id);
  const is_invalid = is_form_invalid(input_error);

  return (
    <div
      className={`${styles.input_form_row} flex_item flex_column align_middle align_horizontal g_2 position_relative`}
      style={input_styles}
    >
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label || title}
        </label>
      )}
      <div className="error_container flex_items">
        <AnimatePresence mode="wait" initial={false}>
          {is_invalid && (
            <Input_error
              message={input_error.error.message}
              key={input_error.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {text_area ? (
        <textarea
          type={type}
          id={id}
          disabled={is_working}
          className={styles.text_area}
          placeholder={placeholder}
          {...register(`${id}`, validationRules)}
        ></textarea>
      ) : (
        <input
          type={input_type}
          id={id}
          className={styles.input}
          style={{ background: background }}
          disabled={is_working}
          placeholder={placeholder}
          // value={value}
          {...register(id, validationRules)}
        />
      )}
      {svg && <div className={`${styles.send_btn_svg} `}>{svg}</div>}
      {/* <Error_message error={errors[id]} /> */}
      {/* {errors.id && errors.id.type === 'required' && (
            <span>
              <small>{`${title} is required`}</small>
            </span>
          )} */}
    </div>
  );
}

export default Input_field;
