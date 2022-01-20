import React, { useState, useEffect } from "react";
import "./App.css";
import UserInfoContainer from "./components/UserInfoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData("https://api.github.com/users").then((data) => setUsers(data));
  }, []);
  
  const handleSearchChange = (value) => {
    setSearch(value);
  };
  // when search for a github user
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      fetchData(`https://api.github.com/users/${search}`).then((data) =>
        setUser(data)
      );
    } else {
      setUser(null);
    }
  };
  // to show the user information including its repositories etc... :)
  const handleClick = (login) => {
    if (login) {
      fetchData(`https://api.github.com/users/${login}`).then((data) =>
        setUser(data)
      );
    }
  };
  // return to home
  const handleClickReturn = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onSearchTextChange={handleSearchChange}
              value={search}
              onSubmission={handleSubmit}
              profiles={users}
              profile={user}
              onHandleClick={handleClick}
            />
          }
        />

        <Route
          path=":user"
          element={
            <UserInfoContainer
              profile={user !== null && user}
              onReturnHome={handleClickReturn}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
