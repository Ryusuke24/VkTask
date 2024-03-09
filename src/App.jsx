import { useEffect, useState } from "react";
import json from "./groups.json";
import "./App.css";
import { GroupsList } from "./Components/GroupsList/GroupsList";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "./redux/GroupSlice";

const GetGroupsResponce = { result: 1, data: json };

function App() {
  const groups = useSelector(state => state.groups.groups);
  const dispatch = useDispatch();
  const [isError, setError] = useState(null);

  useEffect(() => {
    let timerId;
    setError(null);
    if (GetGroupsResponce.result) {
      timerId = setTimeout(() => {
        dispatch(getGroups(GetGroupsResponce.data));
      }, 1000);
    } else {
      setError("Fetching error");
    }

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (isError) {
    return <h1>{isError}</h1>;
  }
  return (
    <>
      <GroupsList groups={groups} />
    </>
  );
}

export default App;
