import css from "./Reviews.module.css";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectLoading, selectError } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import {} from "../../redux/slice";
import StarList from "./StarList/StarList";

export default function Reviews() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const { reviews } = car;

  //  const raitingReview = review.reviewer_rating.toFixed();
  console.log("id------------", id);

  return (
    <ul className={css.reviewCower}>
      {reviews.map((review, index) => (
        <li key={index}>
          <div className={css.nameCower}>
            <div className={css.backChar}>
              <p className={css.char}>{review.reviewer_name.charAt(0)}</p>
            </div>
            <div className={css.nameColmBlock}>
              <h3 className={css.nameReviwer}>{review.reviewer_name}</h3>
              <StarList reviewRaiting={review.reviewer_rating.toFixed()} />
              
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
