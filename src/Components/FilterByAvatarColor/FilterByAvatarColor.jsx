import { useSelector } from "react-redux";
import { getFilteredGroups, selectPrivateType } from "../../redux/GroupSlice";
import style from "./FilterByAvatarColor.module.css";

export const FilterByAvatarColor = () => {
  const colors = Array.from(
    new Set(
      useSelector(state => state.groups.groups)
        .map(group => group.avatar_color)
        .filter(color => color !== undefined)
    )
  );

  return (
    <div>
      <h2>By Avatar Color </h2>
      <select>
        {colors.map(color => (
          <option>{color}</option>
        ))}
      </select>
    </div>
  );
};
