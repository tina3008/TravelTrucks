import React from "react";
import css from "./DetalisPage.module.css";
import { fetchCarById } from "../../redux/operations";
import { visibleCars } from "../../redux/slice";
import { selectCarById } from "../../redux/selectors";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Outlet, useParams } from "react-router";

export default function DetailsPages() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const CarById = useSelector(selectCarById);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);
  const filtrCars = useSelector(visibleCars);


  return (
    <ul className={css.list}>
      {/* <CarDetails CarById={CarById} /> */}
      <p>{CarById.name}</p>
    </ul>
  );
}
