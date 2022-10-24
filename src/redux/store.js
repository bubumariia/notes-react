import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import searchReducer from "./searchReducer";
import notesReducer from "./notesReducer";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    notes: notesReducer,
  },
});
