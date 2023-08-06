import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // ab link karna hai redux ko react ke saath yani usme redux store ko provide karwana hai
  <Provider store = {store}>
    <App />
  </Provider>
);
