import React from "react";

function Done() {
  return (
    <div>
      <h3>Alea jacta est.</h3>
      <p>
        The die has been cast. Your hand has been dealt. Please check your
        email!
      </p>
      <a style={buttonStyle} href="/">
        Start Again
      </a>
    </div>
  );
}

export default Done;

var buttonStyle = {
  backgroundColor: "#508AA8",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  borderRadius: "10px", // this rounds the edges
  marginBottom: "2em",
  marginTop: "1.5em"
};
