import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  notes: [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    notesFun: (state, action) => {
      state.notes = action.payload;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    addNote: (state, action) => {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: action.payload,
        date: date.toLocaleDateString(),
      };
      // state.notes = [...state.notes, newNote];
      state.notes.push(newNote);
    },
  },
});

export const { searchFun, deleteNote, addNote } = notesSlice.actions;

export default notesSlice.reducer;
