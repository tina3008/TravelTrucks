import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./BookingForm.module.css";
import React from "react";
import { useId, useState } from "react";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  bookDate: Yup.string().required("Date is required"),
  message: Yup.string()
    .min(1, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

const initial = {
  name: "",
  email: "",
  bookDate: "",
  message: "",
};

export default function BookingForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const bookDateFieldId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const [startDate, setStartDate] = useState(null);
  return (
    <div className={css.formCower}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.addText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initial}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.formStyle}>
          <div>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name*"
              className={css.field}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errMessage}
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email*"
              className={css.field}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errMessage}
            />
          </div>

          <div>
            <DatePicker
              className={css.field}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Booking date*"
            />
          </div>

          <div>
            <Field
              as="textarea"
              name="message"
              id={msgFieldId}
              rows="5"
              placeholder="Comment"
              className={css.fieldMessage}
            />
            <ErrorMessage
              name="message"
              component="span"
              className={css.errMessage}
            />
          </div>

          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}


