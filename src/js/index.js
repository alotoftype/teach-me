import React from "react";
import ReactDom from "react-dom";

const App = () => <p>This will be my react app!</p>;

console.log("application loaded");
ReactDom.render(<App />, document.getElementById("root"));

export default App;
