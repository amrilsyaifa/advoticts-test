import React from "react";
import Layouts from "./Reusables/Layouts";
import Home from "./Reusables/Pages/Home";

function App() {
  return (
    <div data-testid="app">
      <Layouts>
        <Home />
      </Layouts>
    </div>
  );
}

export default App;
