import { useDispatch } from "react-redux";
import { getFilteredGroups, selectFriends } from "../../redux/GroupSlice";
import style from "./FilterByFriends.module.css";

export const FilterByFriends = ({
  setActiveBtnByFriends,
  activeBtnByFriends,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>By Friends </h2>
      <button
        className={activeBtnByFriends === "button1" ? style.active : ""}
        onClick={() => {
          dispatch(selectFriends({ state: false, condition: false }));
          dispatch(getFilteredGroups());
          setActiveBtnByFriends("button1");
        }}
      >
        Любая
      </button>
      <button
        className={activeBtnByFriends === "button2" ? style.active : ""}
        onClick={() => {
          dispatch(selectFriends({ state: true, condition: true }));
          dispatch(getFilteredGroups());
          setActiveBtnByFriends("button2");
        }}
      >
        Есть друзья
      </button>
      <button
        className={activeBtnByFriends === "button3" ? style.active : ""}
        onClick={() => {
          dispatch(selectFriends({ state: true, condition: false }));
          dispatch(getFilteredGroups());
          setActiveBtnByFriends("button3");
        }}
      >
        Нет друзей
      </button>
    </div>
  );
};
