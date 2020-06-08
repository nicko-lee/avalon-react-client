// const onSubmit = data => {
//   // https://gist.github.com/primaryobjects/aacf6fa49823afb2f6ff065790a5b402
//   // slow things down with this popup box and force user to confirm game config
//   if (
//     window.confirm(
//       "Please confirm you are happy with game config or else hit Cancel button to review again."
//     )
//   ) {
//     console.log(typeof data);
//     // so tricky u cannot pass an object here as state
//     // https://github.com/ReactTraining/history/issues/621
//     props.history.push({
//       pathname: "/justDeal",
//       state: { hello: "hello" }
//     });
//   }
// };

// Note that pattern for email validation found from here
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

console.log(validateEmail("anystring@anystring.anystring"));

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

// {/* <p>{this.props.location.state.hello}</p> */}

// simple way to emulate componentDidMount from a functional component
// https://stackoverflow.com/questions/44506207/reactjs-lifecycle-method-inside-a-function-component
// useEffect(() => {
//   console.log("hello from useEffect()", formData);
//   console.log(
//     "hello from useEffect()",
//     props.history.location.state.numPlayers
//   );
// });
