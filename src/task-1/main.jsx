import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TheHeader from "./components/TheHeader";
import TheHero from "./components/TheHero";
import TheFooter from "./components/TheFooter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TheHeader />
    <TheHero />
    {/* <TheFooter/> */}
  </StrictMode>,
);
