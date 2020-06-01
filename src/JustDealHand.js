import React from "react";

class JustDealHand extends React.Component {
  state = {};

  getData = () => {
    fetch("https://avalon-js-2.ts.r.appspot.com/dealCards")
      .then(response => response.json())
      .then(data => this.setState({ data: data, showDeckList: true }));
  };

  render() {
    return (
      <div>
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

export default JustDealHand;

// wordWrap makes the JSON text responsive on mobile: https://stackoverflow.com/questions/7641195/how-to-limit-div-width
// maxWidth kept stuffing things up but when u added marginLeft and right to auto it did the trick to centre the div
// and keep its max width under control: https://stackoverflow.com/questions/17993471/css-wont-center-div-with-max-width
var jsonStyle = {
  backgroundColor: "#BFBFBF",
  padding: "10px",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "25px", // adds some space to next element below
  marginTop: "25px",
  textAlign: "center",
  wordWrap: "break-word",
  borderRadius: "10px" // this rounds the edges
};

var buttonStyle = {
  backgroundColor: "#508AA8",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "10px" // this rounds the edges
};
