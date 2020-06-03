import React, { useContext } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import JustDealHand from "./JustDealHand";
import { FormContext } from "./Store";

function ConfigureGameJD(props) {
  const { register, handleSubmit } = useForm();

  const [formData, setFormData] = useContext(FormContext);

  const onSubmit = data => {
    console.log(data);
    setFormData(data);
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
        <br />
        <label style={labelStyle}>Percival: </label>
        <input
          type="number"
          placeholder="0"
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
        <br />
        <h3 style={headingStyle}>Evil</h3>
        <label style={labelStyle}>Assassin: </label>
        <input
          type="number"
          placeholder="0"
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
        <br />
        <label style={labelStyle}>Morgana: </label>
        <input
          type="number"
          placeholder="0"
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
          placeholder="0"
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
          placeholder="0"
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
      <JustDealHand />
    </div>
  );
}

export default withRouter(ConfigureGameJD);

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
