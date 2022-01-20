import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

function UserBox({ user, onClick }) {
  const { login, avatar_url, html_url } = user;

  const handleClick = () => {
    onClick(login);
  };

  return (
    <Card sx={{ maxWidth: 350, display: "inline-block", margin: "10px" }}>
      <Link to={login} style={{ textDecoration: "none", color: "#000" }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            image={avatar_url}
            alt={login}
            sx={{ width: 200, height: 200 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {login}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" href={html_url} target="_blank">
          GITHUB
        </Button>
      </CardActions>
    </Card>
  );
}

export default UserBox;
