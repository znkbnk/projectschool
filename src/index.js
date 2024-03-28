import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path

const rootElement = document.getElementById("root");

// Use createRoot to create the root of the React tree
const root = createRoot(rootElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

reportWebVitals();
