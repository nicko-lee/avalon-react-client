import React, { useContext, useEffect } from "react";
import { FormContext } from "./Store";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

function DealAndDistribute(props) {
  // setup to use React Hook Form lib
  const { register, handleSubmit } = useForm();

  // setup to use global store via Context API
  const [formData, setFormData] = useContext(FormContext);

  var numPlayers = props.history.location.state.numPlayers;

  // simple way to emulate componentDidMount from a functional component
  // https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-function-component
  useEffect(() => {
    console.log("hello from useEffect()", formData);
    console.log(
      "hello from useEffect()",
      props.history.location.state.numPlayers
    );
  });

  // when user clicks to submit form
  const onSubmit = data => {
    // save user input to global state store
    console.log("data: ", data);
  };

  return (
    <div>
      <p>{numPlayers}</p>
      {formData && <p>{JSON.stringify(formData)}</p>}
      {/* <p>Number of players: {numPlayers}</p> */}
      <h3>Enter player email addresses to get cards dealt:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {numPlayers.map(function(item, index) {
          return (
            <div key={index}>
              <input
                name={item}
                placeholder={item}
                ref={register}
                style={formInputStyle}
              />
            </div>
          );
        })}
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
