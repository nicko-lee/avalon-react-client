import React, { useContext, useState, useEffect } from "react";
import List from "./List";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { FormContext } from "./Store";

function Dealt() {
  // local state
  const [apiResp, setApiResp] = useState();

  // accessing global state
  const [formData] = useContext(FormContext);

  // a way to use componentDidMount from functional React component
  useEffect(() => {
    getData();
  }, []); // if not for that empty array as second arg this will loop nonstop
  // https://www.andreasreiterer.at/react-useeffect-hook-loop/

  const getData = () => {
    console.log("Ran from getData in Dealt.js, formData: ", formData);

    axios
      .post(process.env.BASE_URL + "/api/dealCards", formData)
      .then(response => {
        console.log(
          "Ran from axios POST call in Dealt.js, resp.data: ",
          response.data
        );
        setApiResp(response.data);
      })
      .catch(error => {
        console.error("Error on POST:", error, error.response);
      });
  };

  return (
    <div>
      <div style={jsonStyle}>
        {/* {formData && <p>{JSON.stringify(formData)}</p>} */}
        {apiResp && <h3>JSON</h3>}
        <p>Deck: {JSON.stringify(apiResp)}</p>
        {/* this is a special conditional render that does nothing if condition is not met
              https://www.robinwieruch.de/conditional-rendering-react 
             it basically checks if this.state.data is null (is there any data). And
             only if it is not null will it try to render <List /> and pass down the data
            This provides an error if null is passed down and <List /> doesn't know what to do
            with it. Else it will do nothing */}
        {apiResp && <List data={apiResp} />}
      </div>
      <a href="/">
        <button style={buttonStyle} type="button">
          Start Again
        </button>
      </a>
    </div>
  );
}

export default withRouter(Dealt);

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
  borderRadius: "10px", // this rounds the edges
  marginBottom: "2em"
};
