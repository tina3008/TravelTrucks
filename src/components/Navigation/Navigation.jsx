import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <section className={css.header}>
      <div className={css.wrapper}>
        <NavLink to="/" className={css.logo}>
          <svg className={css.logo} width="136" height="15">
            <use href="/sprite.svg#icon-TravelTrucks"></use>
          </svg>
        </NavLink>
        <nav>
          <ul className={css.container}>
            <li>
              <NavLink to="/" className={css.link}>
                Home Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={css.link}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={css.hidden}>hidden</div>
      </div>
    </section>
  );
}
