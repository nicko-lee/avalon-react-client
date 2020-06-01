import React from "react";
import Avalon1 from "../static/avalon1.jpg";

// this is how u make a responsive image: https://www.w3schools.com/howto/howto_css_image_responsive.asp
// notice how u have width 100% which makes it nice on mobile
// but at that point it looks crap on desktop. So u can limit max-width
var imageStyle = {
  width: "100%",
  maxWidth: "700px",
  height: "auto"
};

function Header() {
  // Import result is the URL of your image
  return (
    <div>
      <img style={imageStyle} src={Avalon1} alt="avalon logo" />
    </div>
  );
}

export default Header;
