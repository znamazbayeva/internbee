import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { FilterProvider } from "./context/filter_context";
import { InternshipsProvider } from "./context/internships_context";
import "./index.css";
import store from "./store";
import { CompaniesProvider } from "./context/companies_context";
import { CompanyFilterProvider } from "./context/companies_filter_context";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <ToastProvider>
    <Provider store={store}>
      <CompaniesProvider>
        <CompanyFilterProvider>
          <InternshipsProvider>
            <FilterProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </FilterProvider>
          </InternshipsProvider>
        </CompanyFilterProvider>
      </CompaniesProvider>
    </Provider>
  </ToastProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
