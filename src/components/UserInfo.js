import React from "react";
import { Avatar, Button } from "@mui/material";

function UserInfo(props) {
  const {
    name,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = props.userinfo;

  return (
    <div className="userinfo_container">
      <Avatar
        alt="anouarelmaaroufi"
        src={avatar_url}
        sx={{ width: 300, height: 300 }}
      />
      <h3>{name}</h3>
      <Button
        color="primary"
        variant="contained"
        color="success"
        href={html_url}
        target="_blank"
      >
        Check the profile on Github
      </Button>
      <div className="userinfo_progress">
        <div>
          <p>
            <span>{followers}</span> Followers
          </p>
          <p>
            <span>{following}</span> Following
          </p>
        </div>
        <div>
          <p>
            <span>{public_repos}</span> Public repos
          </p>
          <p>
            <span>{public_gists}</span> Public gists
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
