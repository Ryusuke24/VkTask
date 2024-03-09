import { Panel, PanelHeader, SimpleCell } from "@vkontakte/vkui";
import { GroupsElem } from "../GroupElem/GroupElem";
import { Filters } from "../Filters/Filters";
import style from "./GroupsList.module.css";

export const GroupsList = ({ groups }) => {
  return (
    <Panel id="list">
      <PanelHeader>Задание ВК </PanelHeader>
      <Filters />
      <ul className={style.groups}>
        {groups.map(group => (
          <GroupsElem {...group} />
        ))}
      </ul>
    </Panel>
  );
};
