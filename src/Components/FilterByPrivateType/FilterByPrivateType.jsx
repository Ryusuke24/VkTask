import { useDispatch } from "react-redux";
import style from "./FilterByPrivateType.module.css";
import { getFilteredGroups, selectPrivateType } from "../../redux/GroupSlice";

export const FilterByPrivateType = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>By Private Type</h2>
      <button
        onClick={() => {
          dispatch(selectPrivateType({ state: false, condition: false }));
          dispatch(getFilteredGroups());
        }}
      >
        Любая
      </button>
      <button
        onClick={() => {
          dispatch(selectPrivateType({ state: true, condition: false }));
          dispatch(getFilteredGroups());
        }}
      >
        Открытая
      </button>
      <button
        onClick={() => {
          dispatch(selectPrivateType({ state: true, condition: true }));
          dispatch(getFilteredGroups());
        }}
      >
        Закрытая
      </button>
    </div>
  );
};
