import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const initialValues = { name: "", number: "" };
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: nanoid(5) });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field name="name" id={`${fieldId}-name`} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field name="number" id={`${fieldId}-number`} />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
