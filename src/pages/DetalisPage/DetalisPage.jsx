import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import css from "./DetalisPage.module.css";
import { fetchCarById } from "../../redux/operations";
import { selectCar, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import CarDetailsTitle from "../../components/CarDetails/CarDetailsTitle";
import Gallery from "../../components/CarDetails/Gallery/Gallery";
// import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function DetalisPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const OneCar = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const { name, price, rating, location, description, gallery, reviews } =
    OneCar;
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  return (
    <div className={css.DetalisPage}>
      {/* <NavLink to={goBack.current} className={css.goto}>
        {" "}
        Go back{" "}
      </NavLink> */}
      <CarDetailsTitle OneCar={OneCar} />
      {gallery && <Gallery gallery={gallery} name={name} slidesToShow={4} />}
      <p className={css.description}>{description}</p>

      {/* <ul>
        <li>
          <NavLink to="features">Features</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </div>
  );
}
