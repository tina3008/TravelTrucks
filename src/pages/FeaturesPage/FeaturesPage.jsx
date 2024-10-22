import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectLoading, selectError } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./Features.module.css";
import Badgets from "../../components/CarList/Badgets/Badgets";
import { useParams } from "react-router-dom";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails";
import BookingForm from "../../components/BookingForm/BookingForm";

export default function FeaturesPage() {
  //  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.pageCower}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {car && (
        <div className={css.infoBlock}>
          <div className={css.BadgetsCower}>
            <Badgets car={car} />
          </div>
          <div className={css.vehicleDetails}>
            <h3 className={css.titleVehicle}>Vehicle details</h3>
          </div>
          <VehicleDetails car={car} />
        </div>
      )}
      <BookingForm />
    </div>
  );
}
