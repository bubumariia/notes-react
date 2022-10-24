import { useDispatch } from "react-redux";
import { searchFun } from "../redux/searchReducer";

const Search = () => {
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        onChange={(e) => dispatch(searchFun(e.target.value))}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
