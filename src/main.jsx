import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthContext from "./context/authContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/productContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <ProductContext>
          <App />
        </ProductContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
