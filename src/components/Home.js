import React from "react";
import SearchBar from "./SearchBar";
import UserBoxContainer from "./UserBoxContainer";

function Home(props) {
  const {
    onSearchTextChange,
    value,
    onSubmission,
    profiles,
    profile,
    onHandleClick,
  } = props;
  return (
    <div className="App">
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
  );
}

export default Home;
