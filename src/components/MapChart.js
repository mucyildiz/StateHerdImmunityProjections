import React from "react";
import { Button } from 'react-bootstrap';
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

import "./MapChart.css"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = (props) => {
  return (
    <div id="map-container">
      <div id="message">
        Hover over a state to see projected herd immunity date.
      </div>
      <div id="toggle-table">
        <Button style={{backgroundColor: '#2c3e50', color: 'white'}} onClick={props.buttonClick}>
          {props.showMap ? "View Table" : "View Map"}
        </Button>
      </div>
      {props.showMap ?
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
            geographies.map(geo => {
            return(
            <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                props.setTooltipContent(geo.properties.name);
                }}
                onMouseLeave={() => {
                props.setTooltipContent("");
                }}
                style={{
                default: {
                    fill: "#D6D6DA",
                    outline: "none",
                    stroke: "black",
                    strokeWidth: .5,
                },
                hover: {
                    fill: "#6495ED",
                    outline: "none"
                },
                pressed: {
                    fill: "#E42",
                    outline: "none"
                }
                }}
            />
            )})
        }
        </Geographies>
      </ComposableMap>
      : ""}
    </div>
  );
};

export default MapChart;
