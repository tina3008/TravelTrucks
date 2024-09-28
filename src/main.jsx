import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";
import { store, } from "./redux/store.js";
import "modern-normalize";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// // import { PersistGate } from "redux-persist/integration/react";
// import App from "./components/App/App.jsx";
// import { store} from "./redux/store";
// import "modern-normalize";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>
