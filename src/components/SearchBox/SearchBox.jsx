import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import { Location } from "./Location/Location";
import VehicleEquipment from "./VehicleEquipment/VehicleEquipment";
import VehicleType from "./VehicleType/VehicleType";

export default function SearchBox() {
  const id = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <section className={css.search}>
      <Location />
      <p className={css.filter}>Filter</p>
      <VehicleEquipment />
      <div className={css.searchBox}></div>
      <VehicleType />

      <button type="button" className={css.button}>
        Search
      </button>
    </section>
  );
}
