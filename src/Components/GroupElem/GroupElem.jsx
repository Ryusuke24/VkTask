import { useState } from "react";
import style from "./GroupElem.module.css";

export const GroupsElem = ({
  name,
  avatar_color,
  closed,
  members_count,
  friends,
}) => {
  const [isOpenFriendsList, setIsOpenFriendsList] = useState(false);

  return (
    <div className={style.elem}>
      {avatar_color ? (
        <div
          className={style.avatar}
          style={{
            backgroundColor: avatar_color,
          }}
        />
      ) : (
        ""
      )}
      <div>
        <h1>{name}</h1>
        <p>
          {closed ? "закрытая" : "открытая"} |<span> {members_count} чел.</span>{" "}
          |{" "}
          <span
            className={style.friendsList}
            onClick={() => setIsOpenFriendsList(!isOpenFriendsList)}
          >
            {friends?.length ? `${friends.length} друзей в группе` : ""}
          </span>
          {isOpenFriendsList && (
            <ul>
              {friends.map((friend, index) => (
                <li key={index}>
                  {friend.first_name} {friend.last_name}
                </li>
              ))}
            </ul>
          )}
        </p>
      </div>
    </div>
  );
};
