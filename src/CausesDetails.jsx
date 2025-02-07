import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CausesDetails from "./AppCausesDetails.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CausesDetails />
  </StrictMode>
);
