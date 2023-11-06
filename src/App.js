// import React from "react";
// import MyComponent from "./MyComponent";

// const App = () => {
//   const Mind = {};
//   return <MyComponent mind={Mind} />;
// };

// export default App;

import React from "react";
import TestMind from "different-name";

function App() {
  return (
    <div>
      <TestMind mind={"dheer"} />
    </div>
  );
}

export default App;
