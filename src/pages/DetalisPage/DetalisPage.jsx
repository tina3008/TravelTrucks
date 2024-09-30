import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router";
import css from "./DetalisPage.module.css";
import { fetchCarById } from "../../redux/operations";
import { selectCarById, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";

import CarDetails from "../../components/CarDetails/CarDetails";

export default function DetalisPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const CarById = useSelector(selectCarById);
 const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);



  return (
    <ul className={css.list}>
      <p>qqqqqqqqqq</p>
      <p>{id}</p>
      {/* <p>{CarById.name}</p> */}
      {/* <CarDetails xxx={id} /> */}
    </ul>
  );
}
