import React, { useState } from "react";
import { Container } from '@material-ui/core'
import axios from 'axios';

import './App.css';

import MapChart from './components/MapChart';

import Info from './components/Info';

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
          <Info content={content}></Info>
        </div>
    </div>
  );
}

export default App;
