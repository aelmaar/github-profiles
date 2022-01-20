import React from "react";
import UserBox from "./UserBox";

function UserBoxContainer(props) {
  const { profiles, profile, onHandleClick } = props;

  return (
    <div className="userbox_container">
      <div className="userbox_users">
        {!profile ? (
          profiles.map((profile) => (
            <UserBox key={profile.id} user={profile} onClick={onHandleClick} />
          ))
        ) : (
          <UserBox user={profile} onClick={onHandleClick} />
        )}
      </div>
    </div>
  );
}

export default UserBoxContainer;
