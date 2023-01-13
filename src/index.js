import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/variable.scss";
import "./styles/index.scss";
import Home from "./pages/Home";
import Erreur from "./pages/Erreur";
import Apropos from "./pages/Apropos";
import FicheLogement from "./pages/FicheLogement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Erreur />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
  },
  {
    path: "/ficheLogement/:idPropriete",
    element: <FicheLogement />,
    errorElement: <Erreur />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
