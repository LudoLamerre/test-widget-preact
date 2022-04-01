import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reduxValue: false,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setReduxValue(state, action) {
      return { ...state, reduxValue: action.payload };
    },
  },
});

const { actions, reducer } = displaySlice;
export const { setReduxValue } = actions;
export default reducer;
