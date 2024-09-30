import React from "react";

import css from "./CarDetails.module.css";
React
export default function CarDetails({ CarById }) {
    const { description, gallery, location, name, price, rating, reviews } =
      CarById;
  return <Div>
    <p>{name }</p>
  </Div>;
}
