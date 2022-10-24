import { useDispatch } from "react-redux";
import { toggleThemeMode } from "../redux/themeReducer";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>Notes</h1>

      <button className="save" onClick={() => dispatch(toggleThemeMode())}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
