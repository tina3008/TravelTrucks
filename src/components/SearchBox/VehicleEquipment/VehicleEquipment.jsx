import css from "./VehicleEquipment.module.css";

export default function VehicleEquipment() {
  return (
    <div className={css.vehicleEquipment}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.imageBlocks}>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-wind"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>AC</p>
        </li>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-diagram"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Automatic</p>
        </li>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-cup-hot"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Kitchen</p>
        </li>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-tv"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>TV</p>
        </li>
        <li className={css.image}>
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_droplet"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Bathroom</p>
        </li>
      </ul>
    </div>
  );
}
