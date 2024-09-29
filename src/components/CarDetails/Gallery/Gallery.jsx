import React from "react";
import css from "./Gallery.module.css";

export default function Gallery({ items, showSingle }) {
  return (
    <div className={css.image}>
      {/* {items.map((img, index) => (
        <li key={index} className={css.card}>
          <p>{img.thumb}</p>
          <p>id={index}</p>
          <img src={img.thumb} />
        </li>
      ))} */}

      <img
        className={css.camperImg}
        width={292}
        height={320}
        src={items[0].thumb}
        alt="Camper"
      />
    </div>
  );
}
