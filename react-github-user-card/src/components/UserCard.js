import React from "react";
import "./UserCard.css";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

function UserCard({ data, userType }) {
  return (
    <div className="card-container">
      {userType === "friend" ? (
        <Card className="card">
          <CardActionArea className="card-center">
            <CardMedia
              component="img"
              height="215"
              className="card-media"
              image={data.avatar_url}
              title={data.login}
            />
            <CardContent className="content">
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h3">
                {data.login}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {data.bio}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {data.location}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href={data.html_url}>Profile</a>
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ) : (
        <Card className="card">
          <CardActionArea className="card-center">
            <CardMedia
              component="img"
              height="215"
              className="card-media"
              image={data.avatar_url}
              title={data.login}
            />
            <CardContent className="content">
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h3">
                {data.login}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {data.bio}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                {data.location}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                component="p"
              >
                Followers: {data.followers}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Following: {data.following}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <a href={data.html_url}>Profile</a>
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      )}
    </div>
  );
}

export default UserCard;
