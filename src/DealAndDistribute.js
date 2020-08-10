import React, { useContext } from "react";
import { FormContext } from "./Store";
import axios from "axios";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

function DealAndDistribute(props) {
  // setup to use React Hook Form lib
  const { register, handleSubmit, errors } = useForm();

  // setup to use global store via Context API
  const [formData] = useContext(FormContext);

  // easy handle to numPlayers
  var numPlayers = props.history.location.state.numPlayers;

  // when user clicks to submit form
  const onSubmit = data => {
    // save user input to global state store
    console.log("data: ", data);

    // POST req to trigger dealt cards and emails to players
    axios
      .post(process.env.BASE_URL + "/api/dealAndDistribute", {
        formData: formData,
        emails: data
      })
      .then(response => {
        console.log(
          "Ran from axios POST call in DealAndDistribute.js, resp.data: ",
          response.data
        );
      })
      .catch(error => {
        console.error("Error on POST:", error, error.response);
      });

    // route to next page
    props.history.push({
      pathname: "/cardsDealt"
    });
  };

  return (
    <div>
      <p>{numPlayers}</p>
      {formData && <p>{JSON.stringify(formData)}</p>}
      <h3>Enter player email addresses to get cards dealt:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {numPlayers.map(function(item, index) {
          return (
            <div key={index}>
              <input
                name={item}
                type="email"
                placeholder={item}
                ref={register({
                  required: true,
                  pattern: /\S+@\S+\.\S+/
                })}
                style={formInputStyle}
              />
            </div>
          );
        })}
        <label style={labelStyle}>Enter password in order to submit: </label>
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          ref={register({
            required: true
          })}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        {errors.password && <p style={errorStyle}>Password is required.</p>}
        <br />
        <input type="submit" style={buttonStyle} />
      </form>
    </div>
  );
}

export default withRouter(DealAndDistribute);

var formInputStyle = {
  width: "40%",
  maxWidth: "300px",
  padding: "4px 9px",
  margin: "0.5px",
  border: "1.5px solid light-grey",
  borderRadius: "10px",
  fontSize: "18px",
  marginBottom: "15px"
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
  marginBottom: "2em",
  marginTop: "1.5em"
};

var labelStyle = {
  display: "block"
};

var errorStyle = {
  marginBottom: "0px",
  color: "#508AA8",
  fontStyle: "italic"
};
