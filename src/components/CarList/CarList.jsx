import { useSelector } from "react-redux";
// import { selectCatalog, selectNameFilter } from "../../redux/selectors";
import { visibleCars } from "../../redux/slice";
import css from "./CarList.module.css";

import { useParams, Link, useLocation } from "react-router-dom";

export default function CarList() {
  const filtrCars = useSelector(visibleCars);
  return (
    <ul className={css.list}>
      {filtrCars.map((car) => {
        return (
          <li key={car.id}>
            <Link to={`/catalog/${car.id}`}>
              <p>{car.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
