import React from "react";
import Header from "./Header";
import List from "./List";
import JustDealHand from "./JustDealHand";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import "./styles.css";

export default class App extends React.Component {
  state = { showDeckList: false };

  componentDidMount() {}

  getData = () => {
    fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
      .then(response => response.json())
      .then(data => this.setState({ data: data, showDeckList: true }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <h1>Welcome to Avalon ⚔️</h1>
          <h2>Select game option 👇🏻</h2>
          <div style={navButtonContainerStyle}>
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
            <hr style={horizontalRuleStyle} />
          </div>

          {/* The section below changes dynamically based on react-router routes */}
          <Switch>
            <Route exact path="/justDeal">
              <JustDealHand />

              {/* This is a conditional render */}
              {/* Referred to here: https://stackoverflow.com/questions/45303908/conditional-rendering-is-not-working-as-expected-in-reactjs */}
              {this.state.showDeckList ? (
                <div>
                  <List data={this.state.data} />
                </div>
              ) : (
                <div />
              )}
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
  marginBottom: "50px",
  marginTop: "50px",
  width: "100%",
  maxWidth: "700px"
};

var navButtonContainerFlexChildStyle = {
  flex: 1
};
