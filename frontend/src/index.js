import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./components/store/FavoritesContext";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
