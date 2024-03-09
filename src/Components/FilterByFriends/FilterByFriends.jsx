import { useDispatch } from "react-redux";
import { getFilteredGroups, selectFriends } from "../../redux/GroupSlice";
import style from "./FilterByFriends.module.css";

export const FilterByFriends = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>By Friends </h2>
      <button
        onClick={() => {
          dispatch(selectFriends({ state: false, condition: false }));
          dispatch(getFilteredGroups());
        }}
      >
        Любая
      </button>
      <button
        onClick={() => {
          dispatch(selectFriends({ state: true, condition: true }));
          dispatch(getFilteredGroups());
        }}
      >
        Есть друзья
      </button>
      <button
        onClick={() => {
          dispatch(selectFriends({ state: true, condition: false }));
          dispatch(getFilteredGroups());
        }}
      >
        Нет друзей
      </button>
    </div>
  );
};
