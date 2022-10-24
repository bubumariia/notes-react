import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchFun: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { searchFun } = searchSlice.actions;

export default searchSlice.reducer;
