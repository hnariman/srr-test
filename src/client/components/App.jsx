import React from "react";
import Header from "./Header.jsx";

const App = () => {
  const text = "some test text here";

  return (
    <>
      <Header />
      <p>This is some test from SSR react</p>
    </>
  );
};

export default App;
