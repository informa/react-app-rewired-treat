import React from "react";
import { Button, DatePicker, Container } from "@myob/myob-widgets";
import "./App.css";
import style from "./App.module.css";

function App() {
  return (
    <Container>
      <h3 className={style.module}>Rewired</h3>
      <Button>Yay</Button>
      <DatePicker name="date-of-birth" label="Date of birth:" />
    </Container>
  );
}

export default App;
