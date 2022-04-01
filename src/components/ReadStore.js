import { h } from "preact";
import { useDispatch, useSelector } from "react-redux";
import { setReduxValue } from "../store";

import "../style.css";

export default function ReadStore(props) {
  const { reduxValue } = useSelector((state) => state.display);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: props.color }}>Hello, World!</h1>
      <h2 style={{ color: props.color }}>{reduxValue.toString()}</h2>
      <button onClick={() => dispatch(setReduxValue(!reduxValue))}>
        Switch redux value
      </button>
    </div>
  );
}
