import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Store/store";

// Import FontAwesome
import "@fortawesome/fontawesome-free/css/all.css";
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import DateRangePicker
import "bootstrap-daterangepicker/daterangepicker.css";
// Import Main CSS
import "./assets/css/main.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
