import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextWrapper from "./themes/themeContext";
import DocumentContextWrapper from "./documents/documentContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <DocumentContextWrapper>
        <App />
      </DocumentContextWrapper>
    </ThemeContextWrapper>
  </React.StrictMode>
);
