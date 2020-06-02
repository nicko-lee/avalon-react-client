import React from "react";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  // formattedData = formatData(this.props.data);

  // formatData = data => {
  //   // get all object keys and iterate over them
  //   Object.keys(data).forEach((keyName, keyIndex) => {
  //     keyIndex++;
  //     newK = "Player " + keyIndex;
  //     // assign object property based on old property value
  //     data[newK[ele]] = data[ele];
  //     // update name property
  //     data[newK[ele]].name = newK[ele];
  //     // delete old object property
  //     delete data[ele];
  //   });
  // };

  // How to map thru an object. Referred to here
  // https://stackoverflow.com/questions/40803828/reactjs-map-through-object
  // and here: https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
  render() {
    return (
      <div style={listContainerStyle}>
        <h3>Formatted</h3>
        {Object.keys(this.props.data).map((keyName, keyIndex) => (
          <li key={keyIndex} style={listStyle}>
            <span>
              Player {keyIndex + 1}: {this.props.data[keyName]}
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
