import css from "../VehicleEquipment/VehicleEquipment.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from "../../../redux/filtersSlice";
import { selectFilter } from "../../../redux/selectors";



export default function VehicleType({ onFilterChange, selectedValue }) {
  const filter = useSelector(selectFilter);

 const [selectedType, setSelectedType] = useState(selectedValue);
  const handleFilter = (filterValue) => {
    const newValue = selectedType === filterValue ? '' : filterValue;
    setSelectedType(newValue);
    onFilterChange('form', newValue);
  }

  return (
    <div className={css.vehicleEquipment}>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.imageBlocks}>
        <button
          
          className={`${css.image} ${
            selectedValue === "panelTruck" ? css.selected : ""
          }`}
          onClick={() => handleFilter("panelTruck")}
        >
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid-1x2"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Van</p>
        </button>
        <button
          className={`${css.imageBig} ${
            selectedValue === "fullyIntegrated" ? css.selected : ""
          }`}
          onClick={() => handleFilter("fullyIntegrated")}
        >
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Fully Integrated</p>
        </button>
        <button
          className={`${css.image} ${
            selectedValue === "Alcove" ? css.selected : ""
          }`}
          onClick={() => handleFilter("Alcove")}
        >
          <span className={css.icon}>
            <svg width="32" height="32">
              <use href="/sprite.svg#icon-bi_grid-3x3-gap"></use>
            </svg>
          </span>
          <p className={css.iconTxt}>Alcove</p>
        </button>
      </div>
    </div>
  );
}
