import css from "./CarList.module.css";
import { NavLink } from "react-router-dom";
import Badgets from "./Badgets/Badgets";

export default function CarList({ filtrCars }) {
  return (
    <ul className={css.list}>
      {filtrCars.map((car) => {
        return (
          <li key={car.id} className={css.card}>
            <div className={css.imgWrapper}>
              <img
                className={css.carImg}
                width={292}
                height={320}
                src={car.gallery[0].thumb}
                alt="Camper"
              />
            </div>
            <div>
              <div className={css.carFirstTxt}>
                <p className={css.name}>{car.name}</p>
                <p className={css.price}>€{car.price}.00</p>
                <button className={css.hurdBtn}>
                  <svg width="26" height="24">
                    <use href="/sprite.svg#icon-hurt"></use>
                  </svg>
                </button>
              </div>
              <div className={css.secondLine}>
                <span>
                  <svg width="16" height="16" className={css.star}>
                    <use href="/sprite.svg#icon-star"></use>
                  </svg>
                </span>
                <div className={css.raiting}>
                  <p>{car.rating}</p>
                  <p>({car.reviews.length} Reviews)</p>
                </div>

                <span>
                  <svg width="16" height="16" className={css.map}>
                    <use href="/sprite.svg#icon-Map"></use>
                  </svg>
                </span>
                <p>{car.location}</p>
              </div>
              <p className={css.description}>{car.description} </p>
              <Badgets car={car} />
              <NavLink to={`/catalog/${car.id}`} className={css.button}>
                Show more
              </NavLink>
            </div>
            <p className={css.typeHidden}>type:{car.form}</p>
          </li>
        );
      })}
    </ul>
  );
}
