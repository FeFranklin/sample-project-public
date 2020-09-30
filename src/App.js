import React from 'react';
import './App.scss';
import { Header, HeaderName, Button} from "carbon-components-react";

function App() {
  return (
    <>
      <Header aria-label="Testing Telemetry website">
        <HeaderName href="#" prefix="[TEST]">
          Testing Telemetry
        </HeaderName>
      </Header>
      <div className="body-content__block">
        <h1 style={{marginBottom: "25px"}}>This is just a test.</h1>
        <Button kind="danger">Do NOT click it!</Button>
      </div>
    </>
  );
}

export default App;
