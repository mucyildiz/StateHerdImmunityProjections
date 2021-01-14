import React, { useState, useEffect } from "react";
import axios from 'axios';

import './App.css';

import MapChart from './components/MapChart';
import Info from './components/Info';
import Header from './components/Header';
import Methods from './components/Methods';
import Footer from './components/Footer';

import keys from './config/keys';

// to make header shrink on scroll, source: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.padding = "5px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}

function App() {
  const [content, setContent] = useState("");
  const [immunizationData, setImmunizationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        const immunizationDataRes = await axios.get(keys.immunizationDataAPI);
        setImmunizationData([...immunizationDataRes.data]);
        setLoading(false);
    }
    fetchData();
}, [])

  return (
    <div id="app">
      <Header />
      <div id="map" name="map">
        {loading ? "" : 
        <div>
          <MapChart setTooltipContent={setContent} />
          <Info data={immunizationData} content={content} /> 
        </div>
        }
      </div>
      <div id="methods">
        <Methods/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
