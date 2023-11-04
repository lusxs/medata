import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseProvider } from "./context/FirebaseContext";
import { Provider } from "react-redux";
import store from "./states/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseProvider>
        <Router>
          <App />
        </Router>
      </FirebaseProvider>
    </Provider>
  </React.StrictMode>
);
