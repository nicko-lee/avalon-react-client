import React, { useContext } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { withRouter } from "react-router-dom";
import { FormContext } from "./Store";

const FormSchema = yup.object().shape({
  merlin: yup
    .number()
    .min(1)
    .required(),
  percival: yup.number(),
  loyalServant: yup
    .number()
    .min(1)
    .required(),
  assassin: yup.number(),
  minion: yup
    .number()
    .min(1)
    .required(),
  morgana: yup.number(),
  mordred: yup.number(),
  oberon: yup.number()
});

function ConfigureGameDND(props) {
  // setup to use React Hook Form lib
  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormSchema,
    defaultValues: {
      percival: 0,
      assassin: 0,
      morgana: 0,
      mordred: 0,
      oberon: 0
    }
  });

  // setup to use global store via Context API
  const [, setFormData] = useContext(FormContext);

  // var to store numPlayers array to pass it to next screen to dynamically generate form fields
  var numPlayers = [];

  // when user clicks to submit form
  const onSubmit = data => {
    // save user input to global state store
    setFormData(data);

    // calculate number of players to display in next screen
    var arr = Object.values(data); // this returns array with all values
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
      s += Number(arr[i]);
    }

    // generate player array so easy to map for rendering in next screen
    for (i = 0; i < s; i++) {
      var playerNo = i + 1;
      numPlayers.push("Player " + playerNo);
    }
    console.log(numPlayers);

    // route to next page
    props.history.push({
      pathname: "/enterPlayers",
      state: { numPlayers: numPlayers }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={headingStyle}>Good</h3>
        <label style={labelStyle}>Merlin: </label>
        <input
          type="number"
          placeholder="0"
          name="merlin"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        {errors.merlin && (
          <p style={errorStyle}>At least one Merlin is required.</p>
        )}
        <br />
        <label style={labelStyle}>Percival: </label>
        <input
          type="number"
          name="percival"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        <br />
        <label style={labelStyle}>Loyal Servant: </label>
        <input
          type="number"
          placeholder="0"
          name="loyalServant"
          ref={register}
          min="1"
          max="10"
          step="1"
          style={formInputStyle}
        />
        {errors.loyalServant && (
          <p style={errorStyle}>At least one Loyal Servant is required.</p>
        )}
        <br />
        <h3 style={headingStyle}>Evil</h3>
        <label style={labelStyle}>Assassin: </label>
        <input
          type="number"
          name="assassin"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        <br />
        <label style={labelStyle}>Minion: </label>
        <input
          type="number"
          placeholder="0"
          name="minion"
          ref={register}
          min="0"
          max="7"
          step="1"
          style={formInputStyle}
        />
        {errors.minion && (
          <p style={errorStyle}>At least one Minion is required.</p>
        )}
        <br />
        <label style={labelStyle}>Morgana: </label>
        <input
          type="number"
          name="morgana"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        <br />
        <label style={labelStyle}>Mordred: </label>
        <input
          type="number"
          name="mordred"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        <br />
        <label style={labelStyle}>Oberon: </label>
        <input
          type="number"
          name="oberon"
          ref={register}
          min="0"
          max="3"
          step="1"
          style={formInputStyle}
        />
        <br />
        <input type="submit" style={buttonStyle} />
      </form>
    </div>
  );
}

// without this withRouter() method you will not be able to use props.history.push
export default withRouter(ConfigureGameDND);

var formInputStyle = {
  width: "40%",
  maxWidth: "300px",
  padding: "4px 9px",
  margin: "0.5px",
  border: "1.5px solid light-grey",
  borderRadius: "10px",
  fontSize: "18px"
};

var labelStyle = {
  display: "block",
  padding: "1rem 0 .25rem",
  // textTransform: "uppercase",
  fontSize: "18px"
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

var headingStyle = {
  marginBottom: "0px",
  fontSize: "22px"
};

var errorStyle = {
  marginBottom: "0px",
  color: "#508AA8",
  fontStyle: "italic"
};
