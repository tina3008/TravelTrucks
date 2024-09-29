import Home from "../../components/Home/Home";
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <section className={css.homeContainer}>
      <Home />
    </section>
  );
}
