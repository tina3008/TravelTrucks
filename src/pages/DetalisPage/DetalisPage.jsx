import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import css from "./DetalisPage.module.css";
import { fetchCarById } from "../../redux/operations";
import { visibleCars, Reducer,  } from "../../redux/slice";
import { selectCarById, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";

import CarDetails from "../../components/CarDetails/CarDetails";

export default function DetailsPages() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const CarById = useSelector(selectCarById);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

if (!car) {
  return <div>Loading...</div>;
}

  return (
    <ul className={css.list}>
      <CarDetails CarById={CarById} />
    </ul>
  );
}
