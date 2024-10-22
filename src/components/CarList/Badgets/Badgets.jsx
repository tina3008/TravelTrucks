import React from "react";
import css from "./Badgets.module.css";

export default function Badgets({ car }) {
  const { AC, TV, kitchen, gas, transmission, radio, engine, bathroom,  } = car;

  return (
    <div className={css.list}>
      {transmission === "automatic" && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-diagram"></use>
          </svg>
          <p className={css.textCategory}>Automatic</p>
        </div>
      )}
      {gas && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-petrol"></use>
          </svg>
          <p className={css.textCategory}>Petrol</p>
        </div>
      )}
      {kitchen && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-cup-hot"></use>
          </svg>
          <p className={css.textCategory}>Kitchen</p>
        </div>
      )}
      {AC && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-wind"></use>
          </svg>
          <p className={css.textCategory}>AC</p>
        </div>
      )}
      {TV && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-tv"></use>
          </svg>
          <p className={css.textCategory}>TV</p>
        </div>
      )}
      {radio && (
        <div className={css.category}>
          <svg className={css.iconCategory}>
            <use href="/sprite.svg#icon-ui-radios"></use>
          </svg>
          <p className={css.textCategory}>Radio</p>
        </div>
      )}
      {bathroom && (
        <div className={css.category}>
          <svg className={css.iconCategory} height="20">
            <use href="/sprite.svg#icon-droplet"></use>
          </svg>
          <p className={css.textCategory}>Bathroom</p>
        </div>
      )}  
    </div>
  );
}
