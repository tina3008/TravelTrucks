import { NavLink } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <section className={css.welcome}>
      <div className={css.welcomeBlock}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.welcomeTxt}>
          You can find everything you want in our catalog
        </p>
        <NavLink to="/catalog" className={css.welcomeBtn}>
          View Now
        </NavLink>
      </div>
    </section>
  );
}
