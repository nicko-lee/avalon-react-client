import React from "react";
import Header from "./Header";
import "./styles.css";

export default class App extends React.Component {
  state = {};

  componentDidMount() {
    // Simple GET request using fetch
    // fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
    //   .then(response => response.json())
    //   .then(data => this.setState({ data: data }));
  }

  getData = () => {
    // Simple GET request using fetch
    // fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
    //   .then(response => response.json())
    //   .then(data => this.setState({ new: data }));

    fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Welcome to Avalon ⚔️</h1>
        <h2>Click to start new game 👇🏻</h2>
        <hr style={horizontalRuleStyle} />
        <div style={jsonStyle}>
          <p>Deck: {JSON.stringify(this.state.data)}</p>
        </div>
        <button style={buttonStyle} type="button" onClick={this.getData}>
          Deal Hand!
        </button>
      </div>
    );
  }
}

// CSS style objects
var horizontalRuleStyle = {
  width: "100%",
  maxWidth: "700px"
};

// wordWrap makes the JSON text responsive on mobile: https://stackoverflow.com/questions/7641195/how-to-limit-div-width
// maxWidth kept stuffing things up but when u added marginLeft and right to auto it did the trick to centre the div
// and keep its max width under control: https://stackoverflow.com/questions/17993471/css-wont-center-div-with-max-width
var jsonStyle = {
  backgroundColor: "#BFBFBF",
  padding: "10px",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "15px", // adds some space to next element below
  marginTop: "15px",
  textAlign: "center",
  wordWrap: "break-word",
  borderRadius: "10px" // this rounds the edges
};

var buttonStyle = {
  backgroundColor: "#a33833",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "10px" // this rounds the edges
};

// Don't need this but keep as reference to loop over list
const List = props =>
  props.data.map(item => (
    <div key={item.objectID}>
      <span>{item.author}</span>
      <span>{item.points}</span>
    </div>
  ));
