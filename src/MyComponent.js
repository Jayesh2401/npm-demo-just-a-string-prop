import React from "react";

const MyComponent = ({ mind }) => {
  
  return <div>Hello, {mind ? mind : "world"}!</div>;
};

export default MyComponent;
