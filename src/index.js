import "./index.css";

import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
let renderTree = (state) => {
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
renderTree(store.getState());

store.subscribe(() => {
  renderTree(store.getState());
});


serviceWorker.unregister();
