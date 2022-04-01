import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Export actions from redux folder
export * from "./slices";
