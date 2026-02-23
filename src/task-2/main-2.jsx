import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style-2.css";
import TheHeader from "./components-2/TheHeader";
import TheHero from "./components-2/TheHero";

createRoot(document.getElementById("root")).render(
  <>
    <TheHeader/>
    <TheHero/>
  </>,
);
