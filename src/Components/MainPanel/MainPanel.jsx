import { Panel, PanelHeader } from "@vkontakte/vkui";
import { GroupsElem } from "../GroupElem/GroupElem";
import MyLoader from "../Loader/Loader";
import { nanoid } from "@reduxjs/toolkit";
import { Filters } from "../Filters/Filters";
import style from "./MainPanel.module.css";

export const MainPanel = ({ groups, isLoading }) => {
  return (
    <Panel id="list">
      <PanelHeader>Задание ВК </PanelHeader>
      <Filters />
      {isLoading ? (
        <div className={style.loader}>
          <MyLoader />
          <MyLoader />
        </div>
      ) : (
        <ul className={style.groups}>
          {groups.length === 0 ? (
            <h1>По результам запроса ничего не найдено</h1>
          ) : (
            groups.map(group => <GroupsElem key={group.id} {...group} />)
          )}
        </ul>
      )}
    </Panel>
  );
};
