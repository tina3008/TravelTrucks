import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavLink,  
  Outlet,
  useParams,
} from "react-router-dom";
import css from "./DetalisPage.module.css";
import { fetchCarById } from "../../redux/operations";
import { selectCar, selectLoading, selectError } from "../../redux/selectors";
import CarDetailsTitle from "../../components/CarDetails/CarDetailsTitle";
import Gallery from "../../components/CarDetails/Gallery/Gallery";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function DetalisPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { name, price, rating, location, description, gallery, reviews } = car;
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  const addClassLink = ({ isActive }) => {
    return `${css.normalLink} ${isActive ? css.activeLink : ""}`;
  };
  return (
    <div className={css.DetalisPage}>
      <CarDetailsTitle car={car} />
      {gallery && <Gallery gallery={gallery} name={name} slidesToShow={4} />}
      <p className={css.description}>{description}</p>
      <ul className={css.pageLink}>
        <li>
          <NavLink to="features" className={addClassLink}>
            <h3>Features</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={addClassLink}>
            <h3>Reviews</h3>
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {loading && <Loader />}
    </div>
  );
}
