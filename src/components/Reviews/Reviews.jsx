import css from "./Reviews.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCar, selectLoading, selectError } from "../../redux/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import StarList from "./StarList/StarList";
 import { fetchCarById } from "../../redux/operations";

export default function Reviews() {
    const dispatch = useDispatch();
   const { id } = useParams();
  const car = useSelector(selectCar);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
    const { reviews } = car;
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews && (
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
      )}
    </>
  );
}

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCar, selectLoading, selectError } from "../../redux/selectors";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import css from "./Reviews.module.css";
// import Badgets from "../CarList/Badgets/Badgets";
// import { useParams } from "react-router-dom";
// import VehicleDetails from "..//VehicleDetails/VehicleDetails";
// import DetalForm from "../DetalForm/DetalForm";

// export default function Reviews() {
  // const dispatch = useDispatch();
  // const { id } = useParams();
//   const car = useSelector(selectCar);

//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const { reviews, name } = car;
//   console.log("rwr345345===========", reviews);
  
//   return (
//     <div className={css.pageCower}>
//       {reviews && <p>{name}</p>}
//       {loading && <Loader />}
//       {error && <ErrorMessage />}
//       {reviews && (
//         <div className={css.infoBlock}>
//           <>
//             <ul className={css.reviewCower}>
//               {reviews.map((review, index) => (
//                 <li key={index}>
//                   <div className={css.nameCower}>
//                     <div className={css.backChar}>
//                       <p className={css.char}>
//                         {review.reviewer_name.charAt(0)}
//                       </p>
//                     </div>
//                     <div className={css.nameColmBlock}>
//                       <h3 className={css.nameReviwer}>
//                         {review.reviewer_name}
//                       </h3>
//                       <StarList
//                         reviewRaiting={review.reviewer_rating.toFixed()}
//                       />
//                     </div>
//                   </div>

//                   <p className={css.comment}>{review.comment}</p>
//                 </li>
//               ))}
//             </ul>
//           </>
//         </div>
//       )}
//       <DetalForm />
//     </div>
//   );
// }
