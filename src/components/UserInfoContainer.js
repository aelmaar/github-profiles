import React from "react";
import ReturnHome from "./ReturnHome";
import UserInfo from "./UserInfo";
import LatestUserRepo from "./LatestUserRepo";
import "./../App.css";

function UserInfoContainer(props) {
  const { profile, onReturnHome } = props;
  return (
    <div>
      <ReturnHome onReturn={onReturnHome}/>
      <div className="user_details">
        <UserInfo userinfo={profile} />
        <LatestUserRepo login={profile.login} />
      </div>
    </div>
  );
}

export default UserInfoContainer;
