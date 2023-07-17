import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.scss";

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById("root");

createRoot(container!).render(app);
