import React from "react";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log("ran from CDM in List.js: ", this.props.data);
  }

  // How to map thru an object. Referred to here
  // https://stackoverflow.com/questions/40803828/reactjs-map-through-object
  // and here: https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
  render() {
    return (
      <div style={listContainerStyle}>
        <h3>Formatted</h3>
        {Object.keys(this.props.data.dealt).map((keyName, keyIndex) => (
          <li key={keyIndex} style={listStyle}>
            <span>
              Player {keyIndex + 1}: {this.props.data.dealt[keyName]}
            </span>
          </li>
        ))}
      </div>
    );
  }
}

export default List;

var listStyle = {
  listStyleType: "none",
  paddingBottom: "3px"
};

var listContainerStyle = {
  paddingBottom: "15px"
};
