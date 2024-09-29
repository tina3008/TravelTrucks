import Catalog from "../../components/Catalog/Catalog.jsx";
import css from "./CatalogPage.module.css"
export default function CatalogPage() {
  return (
    <section className={css.CatalogContainer}>
      <Catalog />
    </section>
  );
}
