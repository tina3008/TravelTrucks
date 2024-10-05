import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ car }) {
  const { form, length, width, height, tank, consumption } = car;

  return (
    <ul className={css.VehicleDetails}>
      <li className={css.listDetails}>
          <h4>Form</h4>
          <p>{form}</p>
        </li>
        <li className={css.listDetails}>
          <h4>Length</h4>
          <p>{length}</p>
        </li>
        <li className={css.listDetails}>
          <h4>Width</h4>
          <p>{width}</p>
        </li>
        <li className={css.listDetails}>
          <h4>Height</h4>
          <p>{height}</p>
        </li>
        <li className={css.listDetails}>
          <h4>Tank</h4>
          <p>{tank}</p>
        </li>
      <li className={css.listDetails}>
        <h4>Consumption</h4>
        <p>{consumption}</p>
      </li>
    </ul>
  );
}
