import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Paper,
} from "@material-ui/core";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "NateTheDev1",
      error: "",
      userData: "",
      friends: [],
    };
  }

  componentDidMount() {
    const url = `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.username}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({ userData: res.data });
        this.getFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  getFriends(data) {
    axios.get(data.followers_url).then((friends) => {
      let newFriends = [];
      friends.data.forEach((f) => {
        newFriends.push(f);
      });
      this.setState({ friends: newFriends });
    });
  }

  render() {
    return (
      // <Container>
      //   <Card data={this.state.userData} />
      // </Container>
      <div>
        <AppBar position="sticky" className="app-bar">
          <Toolbar>
            <Typography variant="h5">
              {this.state.userData.login} And Friends
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="user-grid" maxWidth="lg">
          <UserCard data={this.state.userData} className="user-card" />
          <Paper elevation={3} className="friends-grid">
            <h1>Friends</h1>
            <hr />
            {this.state.friends.map((f) => (
              <UserCard data={f} userType="friend" />
            ))}
          </Paper>
        </Container>
      </div>
    );
  }
}
export default App;
