import React from "react";
import Header from "./Header";
import Dealt from "./Dealt";
import Done from "./Done";
import ConfigureGameJD from "./ConfigureGameJD";
import ConfigureGameDND from "./ConfigureGameDND";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import DealAndDistribute from "./DealAndDistribute";

export default class App extends React.Component {
  componentDidMount() {}

  getData = () => {
    fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <h1>Welcome to Avalon ⚔️</h1>
          <h2>Select game option 👇🏻</h2>
          <div style={navButtonContainerStyle} className="navContainer">
            <div style={navButtonContainerFlexChildStyle}>
              <Link to="/justDeal" style={navButtonStyle}>
                Just Deal Me a Hand
              </Link>
            </div>
            <div style={navButtonContainerFlexChildStyle}>
              <Link to="/dealAndDistribute" style={navButtonStyle}>
                Deal and Distribute
              </Link>
            </div>
          </div>
          <div>
            <p>
              <strong>Tip:</strong> Click on header image to completely restart.
            </p>
            <hr style={horizontalRuleStyle} />
          </div>

          {/* The section below changes dynamically based on react-router routes */}
          <Switch>
            <Route exact path="/justDeal">
              <ConfigureGameJD />
            </Route>
            <Route exact path="/dealAndDistribute">
              <ConfigureGameDND />
            </Route>
            <Route exact path="/enterPlayers">
              <DealAndDistribute />
            </Route>
            <Route exact path="/dealt">
              <Dealt />
            </Route>
            <Route exact path="/cardsDealt">
              <Done />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// CSS style objects
var horizontalRuleStyle = {
  width: "100%",
  maxWidth: "700px"
};

var navButtonStyle = {
  textDecoration: "none", // removes the lines under a hyperlink
  backgroundColor: "#a33833",
  color: "white", // changes text color
  padding: "15px 32px",
  border: "none",
  borderRadius: "10px", // this rounds the edges
  opacity: "0.8"
};

// these styles are to use flexbox to position two divs side by side
// https://coder-coder.com/display-divs-side-by-side/
var navButtonContainerStyle = {
  // backgroundColor: "yellow",
  display: "flex",
  margin: "0 auto", // this magically centres a div in the centre by itself: http://jsfiddle.net/nacMP/24/
  marginBottom: "20px",
  marginTop: "40px",
  width: "100%",
  maxWidth: "700px"
};

var navButtonContainerFlexChildStyle = {
  padding: "1em",
  flex: 1,
  height: "2em" // without this for some reason the height of the div is the height of the anchor text...
};
