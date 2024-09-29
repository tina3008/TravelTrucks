import css from "../VehicleEquipment/VehicleEquipment.module.css";

export default function VehicleType() {
  return (
    <div className={css.vehicleEquipment}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.imageBlocks}>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/public/images/sprite.svg#icon-bi_grid-1x2"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Van</p>
        </li>
        <li className={css.imageBig}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/public/images/sprite.svg#icon-bi_grid"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Fully Integrated</p>
        </li>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/public/images/sprite.svg#icon-bi_grid-3x3-gap"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Alcove</p>
        </li>
      </ul>
    </div>
  );
}
