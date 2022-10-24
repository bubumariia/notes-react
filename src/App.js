import "./index.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header";
import Search from "./components/Search";
import NotesList from "./components/Notes/NotesList";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "./redux/themeReducer";

export default function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header />
        <Search />
        <NotesList />
      </div>
    </div>
  );
}
