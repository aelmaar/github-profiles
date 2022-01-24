import React from "react";
import SearchBar from "./SearchBar";
import UserBoxContainer from "./UserBoxContainer";
import { Outlet, useParams } from "react-router-dom";

function Home(props) {
  const {
    onSearchTextChange,
    value,
    onSubmission,
    profiles,
    profile,
    onHandleClick,
  } = props;

  let { userId } = useParams();

  return (
    <div className="App">
      {!userId ? (
        <div>
          <SearchBar
            onSearchTextChange={onSearchTextChange}
            value={value}
            onSubmission={onSubmission}
          />
          <UserBoxContainer
            profiles={profiles}
            profile={profile}
            onHandleClick={onHandleClick}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Home;
