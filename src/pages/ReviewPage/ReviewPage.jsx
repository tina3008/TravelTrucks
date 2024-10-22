import React from "react";
import css from "./ReviewPage.module.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Reviews from "../../components/Reviews/Reviews";

export default function ReviewPage() {
  return (
    <div className={css.pageCower}>
      <Reviews />
      <BookingForm />
    </div>
  );
}
