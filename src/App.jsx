import { useEffect, useState } from "react";
import json from "./groups.json";
import "./App.css";
import { MainPanel } from "./Components/MainPanel/MainPanel";
import { useDispatch, useSelector } from "react-redux";
import { getGroups } from "./redux/GroupSlice";

const GetGroupsResponce = { result: 1, data: json };

function App() {
  const groups = useSelector(state => state.groups.groups);
  const dispatch = useDispatch();
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let timerId;
    setError(null);
    setLoading(true);
    if (GetGroupsResponce.result) {
      timerId = setTimeout(() => {
        dispatch(getGroups(GetGroupsResponce.data));
        setLoading(false);
      }, 1000);
    } else {
      setError("Fetching error");
      setLoading(false);
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
      <MainPanel groups={groups} isLoading={isLoading} />
    </>
  );
}

export default App;
