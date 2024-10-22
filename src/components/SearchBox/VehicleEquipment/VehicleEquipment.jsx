
import React from 'react';
import css from './VehicleEquipment.module.css';

export default function VehicleEquipment({ onFilterChange, selectedFilters }) {
  const handleFilterToggle = (filterKey) => {
    const newValue = !selectedFilters[filterKey];
    onFilterChange(filterKey, newValue);
  };

  return (
    <div className={css.vehicleEquipment}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.imageBlocks}>
        <li>
          <button
            onClick={() => handleFilterToggle("ac")}
            className={`${css.image} ${selectedFilters.ac ? css.selected : ""}`}
          >
            <span className={css.icon}>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
            </span>
            <p className={css.iconTxt}>AC</p>
          </button>
        </li>
        <li>
          <button
            className={`${css.image} ${
              selectedFilters.transmission === "automatic" ? css.selected : ""
            }`}
            onClick={() => handleFilterToggle("transmission")}
          >
            <span className={css.icon}>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-diagram"></use>
              </svg>
            </span>
            <p className={css.iconTxt}>Automatic</p>
          </button>
        </li>
        <li>
          <button
            className={`${css.image} ${
              selectedFilters.kitchen ? css.selected : ""
            }`}
            onClick={() => handleFilterToggle("kitchen")}
          >
            <span className={css.icon}>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
            </span>
            <p className={css.iconTxt}>Kitchen</p>
          </button>
        </li>
        <li>
          <button
            className={`${css.image} ${selectedFilters.tv ? css.selected : ""}`}
            onClick={() => handleFilterToggle("tv")}
          >
            <span className={css.icon}>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
            </span>
            <p className={css.iconTxt}>TV</p>
          </button>
        </li>
        <li>
          <button
            className={`${css.image} ${
              selectedFilters.bathroom ? css.selected : ""
            }`}
            onClick={() => handleFilterToggle("bathroom")}
          >
            <span className={css.icon}>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-bi_droplet"></use>
              </svg>
            </span>
            <p className={css.iconTxt}>Bathroom</p>
          </button>
        </li>
      </ul>
    </div>
  );
}