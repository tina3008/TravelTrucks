
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./CarDetails.module.css";
// import { useDispatch } from "react-redux";


export default function CarDetails({ car: { id, name, number } }) {
  // const dispatch = useDispatch();

  return (
    <div className={css.fullContact}>
      <div className={css.contactInfo}>
        <p>{id}</p>
      </div>
    </div>
  );
}


// function CarDetails() {
//   const { carId } = useParams();
//   const car = useSelector((state) => state.cars.find((c) => c.id === carId));

//   if (!car) {
//     return <p>Автомобиль не найден</p>;
//   }

//   return (
//     <div>
//       <h2>{car.name}</h2>
//       {/* Дополнительная информация о машине */}
//     </div>
//   );
// }

// export default CarDetails;