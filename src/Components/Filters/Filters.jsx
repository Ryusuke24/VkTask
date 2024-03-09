import { useDispatch } from "react-redux";
import { FilterByAvatarColor } from "../FilterByAvatarColor/FilterByAvatarColor";
import { FilterByFriends } from "../FilterByFriends/FilterByFriends";
import { FilterByPrivateType } from "../FilterByPrivateType/FilterByPrivateType";
import style from "./Filters.module.css";
import { selectAll } from "../../redux/GroupSlice";

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.filters}>
      <h1>Filters</h1>
      <button onClick={() => dispatch(selectAll())}>Все группы</button>
      <div className={style.filtersList}>
        <FilterByPrivateType />
        <FilterByAvatarColor />
        <FilterByFriends />
      </div>
    </div>
  );
};
