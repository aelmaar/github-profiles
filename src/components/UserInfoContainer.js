import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import LatestUserRepo from "./LatestUserRepo";
import { useParams } from "react-router-dom";
import "./../App.css";

function UserInfoContainer() {
  const [profile, setProfile] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(`https://api.github.com/users/${userId}`);
      return response.json();
    };
    fetchProfileData().then((data) => setProfile(data));
  }, [userId]);

  return (
    <div>
      <div className="user_details">
        <UserInfo userinfo={profile} />
        <LatestUserRepo login={profile.login} />
      </div>
    </div>
  );
}

export default UserInfoContainer;
