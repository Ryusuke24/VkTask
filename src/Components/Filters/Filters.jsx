import { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterByAvatarColor } from "../FilterByAvatarColor/FilterByAvatarColor";
import { FilterByFriends } from "../FilterByFriends/FilterByFriends";
import { FilterByPrivateType } from "../FilterByPrivateType/FilterByPrivateType";
import style from "./Filters.module.css";
import { selectAll } from "../../redux/GroupSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const [activeBtnByType, setActiveBtnByType] = useState("button1");
  const [activeBtnByFriends, setActiveBtnByFriends] = useState("button1");

  return (
    <div className={style.filters}>
      <h1>Filters</h1>
      <button
        onClick={() => {
          dispatch(selectAll());
          setActiveBtnByFriends("button1");
          setActiveBtnByType("button1");
        }}
      >
        Все группы
      </button>
      <div className={style.filtersList}>
        <FilterByPrivateType
          activeBtnByType={activeBtnByType}
          setActiveBtnByType={setActiveBtnByType}
        />
        <FilterByAvatarColor />
        <FilterByFriends
          activeBtnByFriends={activeBtnByFriends}
          setActiveBtnByFriends={setActiveBtnByFriends}
        />
      </div>
    </div>
  );
};
