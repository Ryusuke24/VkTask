import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./FilterByPrivateType.module.css";
import { getFilteredGroups, selectPrivateType } from "../../redux/GroupSlice";

export const FilterByPrivateType = ({
  activeBtnByType,
  setActiveBtnByType,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>By Private Type</h2>
      <button
        className={activeBtnByType === "button1" ? style.active : ""}
        onClick={() => {
          dispatch(selectPrivateType({ state: false, condition: false }));
          dispatch(getFilteredGroups());
          setActiveBtnByType("button1");
        }}
      >
        Любая
      </button>
      <button
        className={activeBtnByType === "button2" ? style.active : ""}
        onClick={() => {
          dispatch(selectPrivateType({ state: true, condition: false }));
          dispatch(getFilteredGroups());
          setActiveBtnByType("button2");
        }}
      >
        Открытая
      </button>
      <button
        className={activeBtnByType === "button3" ? style.active : ""}
        onClick={() => {
          dispatch(selectPrivateType({ state: true, condition: true }));
          dispatch(getFilteredGroups());
          setActiveBtnByType("button3");
        }}
      >
        Закрытая
      </button>
    </div>
  );
};
