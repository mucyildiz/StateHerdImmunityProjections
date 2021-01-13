import React, { useState } from "react";

import './App.css';

import MapChart from './components/MapChart';
import Info from './components/Info';
import Header from './components/Header';
import Methods from './components/Methods';
import Footer from './components/Footer';


// to make header shrink on scroll, source: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "15px 10px";
  } else {
    document.getElementById("navbar").style.padding = "40px 10px";
  }
}

function App() {
  const [content, setContent] = useState("");
  return (
    <div id="app">
      <Header />
      <div id="map">
        <MapChart setTooltipContent={setContent} />
        <Info content={content} />
      </div>
      <Methods />
      <Footer />
    </div>
  );
}

export default App;
