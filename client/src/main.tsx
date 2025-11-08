import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import HocWrapper from "./HocWrapper";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HocWrapper>
      <App />
    </HocWrapper>
  </Provider>
);
