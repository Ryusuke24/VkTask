import { useDispatch, useSelector } from "react-redux";
import style from "./FilterByAvatarColor.module.css";
import { selectColor, getFilteredGroups } from "../../redux/GroupSlice";

export const FilterByAvatarColor = () => {
  const dispatch = useDispatch();

  const colors = useSelector(state => state.groups.colors);

  return (
    <div>
      <h2>By Avatar Color </h2>
      <button
        onClick={() => {
          dispatch(selectColor({ state: false, condition: false }));
          dispatch(getFilteredGroups());
        }}
      >
        Любая
      </button>
      <select
        onChange={e => {
          dispatch(selectColor({ state: true, condition: e.target.value }));
          dispatch(getFilteredGroups());
        }}
      >
        {colors.map((color, index) => (
          <option key={index}>{color}</option>
        ))}
      </select>
    </div>
  );
};
