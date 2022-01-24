import React from "react";
import logo from "./../images/GitHub-Mark-Light-64px.png";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function ReturnHome() {
  return (
    <div>
      <div className="app_Nav">
        <div>
          <img src={logo} alt="github logo" />
        </div>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <Button>
            <HomeIcon sx={{ fontSize: 50 }} style={{ color: "white" }} />
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default ReturnHome;
