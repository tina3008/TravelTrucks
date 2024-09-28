import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails";

export default function DetailsPage() {
  const { Id } = useParams();
  return (
    <main>
      <div>Now showing product with id - ${Id}</div>
      <CarDetails/>
    </main>
  );
}
