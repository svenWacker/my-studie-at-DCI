function Text() {
  return <div>Hey I am component</div>;
}
function Hallo(props) {
  console.log(props);
  return (
    <div>
      Welcome to React, {props.userName} and you are {props.age} years old
    </div>
  );
}

// export default Text;
export { Text, Hallo };
