import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Container } from '@material-ui/core'

import './App.css';

import MapChart from './components/MapChart';

function App() {
  const [content, setContent] = useState("");
  return (
    <div id="app">
      <Container fixed maxWidth="lg">
        <div id="map">
          <MapChart setTooltipContent={setContent} />
        </div>
        </Container>
        <div id="info">
          <ReactTooltip>{content ? content : "Hover over a state to see the projected herd immunity date."}</ReactTooltip>
        </div>
    </div>
  );
}

export default App;
