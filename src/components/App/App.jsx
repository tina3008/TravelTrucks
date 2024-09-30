import { Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
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
const FeaturesPage = lazy(() =>
  import("../../pages/FeaturesPage/Features.jsx")
);
export default function App() {
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      <Navigation />
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetalisPage />}>
            <Route path="features" element={<NotFoundPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
