import React from "react";
import logo from "./../images/GitHub-Mark-Light-64px.png";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ReturnHome(props) {
  const { onReturn } = props;

  const handleClickReturn = () => {
    onReturn();
  };
  return (
    <div className="app_Nav">
      <div>
        <img src={logo} alt="github logo" />
      </div>
      <Link to="/">
        <Button onClick={handleClickReturn}>
          <HomeIcon sx={{ fontSize: 50 }} style={{ color: "white" }} />
        </Button>
      </Link>
    </div>
  );
}

export default ReturnHome;
