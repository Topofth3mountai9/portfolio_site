import { FormProvider, useForm } from 'react-hook-form';
import styles from './contact_form.module.scss';
import { Form_row } from '../form_row/form_row.component';
import Input_field from '../input/input_field.component';
import { get_any_input_validation } from '../../helpers/get_any_input_validation';
import Button from '../button/button.component';

function Contact_form() {
  const methods = useForm();

  const full_name_validation = get_any_input_validation(
    'Full Name',
    'text',
    true
  );
  const subject_validation = get_any_input_validation(
    'Your Subject',
    'text',
    true
  );
  const message_validation = get_any_input_validation(
    'Your Message',
    'text',
    true
  );
  const email_validation = get_any_input_validation(
    'Email Address',
    'text',
    true
  );

  // const {handleSubmit, }
  return (
    <FormProvider {...methods}>
      <form className={`${styles.contact_form_container} grid g_2`}>
        <Form_row>
          <Input_field
            title="Full_name"
            label="Full Name"
            {...full_name_validation}
          />
        </Form_row>
        <Form_row>
          <Input_field
            title="Email Address"
            label="Email Address"
            {...email_validation}
          />
        </Form_row>
        <Form_row other_class={styles.subject}>
          <Input_field
            title="Your Subject"
            label="Your Subject"
            {...subject_validation}
          />
        </Form_row>
        <Form_row other_class={styles.message}>
          <Input_field
            title="Your Message"
            label="Your Message"
            text_area={true}
            {...message_validation}
          />
        </Form_row>
        <a
          href="#!"
          className={`${styles.send_message_btn} btn btn_block bg_primary btn_rounded flex_items align_middle align_horizontal `}
        >
          send message
        </a>
      </form>
    </FormProvider>
  );
}

export default Contact_form;
