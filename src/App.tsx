import React from "react";
import { Form } from "./Components/Form";
import { Jesper } from "./Components/jesper";
import { Patrik } from "./Components/Patrik";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <Jesper />
      <Patrik />
      <Form />
    </div>
  );
}

export default App;
