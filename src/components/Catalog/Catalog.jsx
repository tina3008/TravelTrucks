import SearchBox from "../SearchBox/SearchBox";
import CarList from "../CarList/CarList";
import { fetchCatalog } from "../../redux/operations";
import { selectError, selectLoading } from "../../redux/selectors";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./Catalog.module.css";
import  LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import { useSearchParams } from "react-router-dom";
  
function Catalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
   const [page, setPage] = useState(1);
  return (
    <section className={css.fullPage}>
      <div className={css.SearchBox}>
        <SearchBox />
      </div>
      <div className={css.carList}>
        <CarList />
      </div>

      {isLoading && <Loader>Loading message</Loader>}
      {isError && <ErrorMessage />}
    </section>
  );
}

export default Catalog;
