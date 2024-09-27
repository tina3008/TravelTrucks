import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const DetalisPage = lazy(() =>
  import("../../pages/DetalisPage/DetalisPage.jsx")
);
const ReviewPage = lazy(() => import("../../pages/ReviewPage/ReviewPage.jsx"));

export default function App() {
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<DetalisPage />}/>
          <Route path="/catalog/id" element={<DetalisPage />}>
            <Route path="feautures" element={<DetalisPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
