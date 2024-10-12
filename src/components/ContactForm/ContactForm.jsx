import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Toaster, toast } from 'react-hot-toast';

import css from "./ContactForm.module.css";

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Full name must be three or more characters")
    .max(50, "Full name must be 50 characters long or less")
    .required("Is required"),
    number: Yup.string()
      .matches(
        /^\d{4}-\d{8}$/, 
        "Phone number is invalid, please enter a valid phone number (e.g. 0176-12345678)")
      .required("Is required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const notify = () => toast.success('Contact added to your contacts book');

  const handleSubmit = (values, options) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    notify();
    options.resetForm();
  };

  return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} 
    validationSchema={validationSchema}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          </label>
        <Field 
        type="text" 
        className={css.input} 
        name="name" 
        placeholder="Enter a name"
        />

        <ErrorMessage 
        className={css.errorMessage} 
        name="name" 
        component="div" 
        />

        <label className={css.label}>
          Number
          </label>
        <Field 
        type="tel" 
        className={css.input} 
        name="number" 
        placeholder="Enter a phnone number" 
        />
        <ErrorMessage 
        className={css.errorMessage} name="number" 
        component="div" 
        />

        <button 
        className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
    <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
