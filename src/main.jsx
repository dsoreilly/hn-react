// @ts-nocheck

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
