import React from "react";
import UserBox from "./UserBox";

function UserBoxContainer(props) {
  const { profiles, profile } = props;

  return (
    <div className="userbox_container">
      <div className="userbox_users">
        {!profile ? (
          profiles.map((profile) => (
            <UserBox key={profile.id} user={profile}/>
          ))
        ) : (
          <UserBox user={profile}/>
        )}
      </div>
    </div>
  );
}

export default UserBoxContainer;
