import { h } from "preact";
import { Provider } from "react-redux";
import ReadStore from "./components/ReadStore";
import store from "./store";

import "./style.css";

export default function App(props) {
  return (
    <Provider store={store}>
      <ReadStore />
    </Provider>
  );
}
