import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { InternshipsProvider } from "./context/internships_context";
import "./index.css";
import store from "./store";
// import { CompanyProvider } from "./context/company_context";

ReactDOM.render(
  <InternshipsProvider>
    <FilterProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </FilterProvider>
  </InternshipsProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
