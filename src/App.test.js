import store from "./redux/redux-store";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

it("отрисовка без ошибок", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );

  root.unmount();
  container.remove(); 
});
