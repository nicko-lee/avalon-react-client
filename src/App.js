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
        <h1>Welcome to Avalon.</h1>
        <h2>Click to start new game:</h2>
        <hr />
        <p>Deck: {JSON.stringify(this.state.data)}</p>
        <button type="button" onClick={this.getData}>
          Deal Hand!
        </button>
      </div>
    );
  }
}

// Don't need this but keep as reference to loop over list
const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));
