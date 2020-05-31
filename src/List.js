import React from "react";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  // How to map thru an object. Referred to here
  // https://stackoverflow.com/questions/40803828/reactjs-map-through-object
  // and here: https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
  render() {
    return (
      <div>
        {Object.keys(this.props.data).map((keyName, keyIndex) => (
          <li key={keyIndex}>
            <span>
              key: {keyIndex} Name: {this.props.data[keyName]}
            </span>
          </li>
        ))}
      </div>
    );
  }
}

export default List;
