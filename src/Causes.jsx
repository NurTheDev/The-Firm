import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Causes from "./AppCauses.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Causes />
  </StrictMode>
);
