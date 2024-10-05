import React from "react";
import css from "./ReviewPage.module.css";
import DetalForm from "../../components/DetalForm/DetalForm";
import Reviews from "../../components/Reviews/Reviews";


export default function ReviewPage() {
  return (
    <div className={css.pageCower}>
      <Reviews />
      <DetalForm />
    </div>
  );
}
