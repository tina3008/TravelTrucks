import SearchBox from "../SearchBox/SearchBox";
import CarList from "../CarList/CarList";
import { fetchCatalog } from "../../redux/operations";
import { selectError, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

function Catalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);
  return (
    <>
      <main>          
        <SearchBox />
        <CarList />
        {isLoading && <Loader>Loading message</Loader>}
        {isError && <ErrorMessage />}
      </main>
    </>
  );
}

export default Catalog;
