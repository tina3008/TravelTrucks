
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setStatusFilter, resetFilters } from "../../redux/filtersSlice";
// import { selectFilter } from "../../redux/selectors";
// import css from "./SearchBox.module.css";
// import { Location } from "./Location/Location";
// import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
// import VehicleType from "./VehicleType/VehicleType";

// export default function SearchBox() {
//   const dispatch = useDispatch();
//   const filters = useSelector(selectFilter);
//   const [localFilters, setLocalFilters] = useState(filters);

//   const handleFilterChange = (key, value) => {
//     setLocalFilters((prevFilters) => ({
//       ...prevFilters,
//       [key]: value,
//     }));
//   };

//   const applyFilters = () => {
//     dispatch(setStatusFilter(localFilters));
//     // dispatch(resetFilters());
//   };

//   return (
//     <section className={css.search}>
//       <Location onFilterChange={handleFilterChange} />
//       <p className={css.filter}>Filter</p>
//       <VehicleEquipment
//         onFilterChange={handleFilterChange}
//         selectedFilters={localFilters}
//       />
//       <div className={css.searchBox}></div>
//       <VehicleType
//         onFilterChange={handleFilterChange}
//         selectedValue={localFilters.form}
//       />
//       <button type="button" className={css.button} onClick={applyFilters}>
//         Search
//       </button>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter, resetFilters } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import css from './SearchBox.module.css';
import { Location } from './Location/Location';
import VehicleEquipment from './VehicleEquipment/VehicleEquipment';
import VehicleType from './VehicleType/VehicleType';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterChange = (key, value) => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };

  const applyFilters = () => {
    dispatch(setStatusFilter(localFilters));
    // dispatch(resetFilters());
  };

  return (
    <section className={css.search}>
      <Location onFilterChange={handleFilterChange} />
      <p className={css.filter}>Filter</p>
      <VehicleEquipment onFilterChange={handleFilterChange} selectedFilters={localFilters} />
      <div className={css.searchBox}></div>
      <VehicleType onFilterChange={handleFilterChange} selectedValue={localFilters.form} />
      <button type="button" className={css.button} onClick={applyFilters}>
        Search
      </button>
    </section>
  );
}