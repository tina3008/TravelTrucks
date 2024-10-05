import React from "react";
import css from "./CarDetailsTitle.module.css";

export default function CarDetailsTitle({ car }) {
  const { location, name, price, rating, reviews } =
    car;
  return (
    <div className={css.titleBlock}>
      <h3 className={css.title}>{name}</h3>
      <div className={css.secondLineTitle}>
        <span>
          <svg width="16" height="16" className={css.star}>
            <use href="/public/sprite.svg#icon-star"></use>
          </svg>
        </span>
        <div className={css.raiting}>
          <p>{rating}</p>
          {/* <p>({reviews.length} Reviews)</p> */}
        </div>
        <span>
          <svg width="16" height="16" className={css.map}>
            <use href="/sprite.svg#icon-Map"></use>
          </svg>
        </span>
        <p>{location}</p>
      </div>

      <p className={css.title}>€{price}.00</p>
    </div>
  );
}
