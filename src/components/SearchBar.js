import React from "react";
import logo from "./../images/GitHub-Mark-Light-64px.png";

function SearchBar(props) {
  const { onSearchTextChange, value, onSubmission } = props;

  const handleSearchChange = (e) => {
    onSearchTextChange(e.target.value);
  };
 
  const handleSubmit = (e) => {
    onSubmission(e);
  }

  return (
    <div className="app_Nav">
      <div>
        <img src={logo} alt="github logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Search for a user..."
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
