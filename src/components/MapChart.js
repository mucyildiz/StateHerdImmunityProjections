import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";

import "./MapChart.css"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  return (
    <div id="map-container">
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
            geographies.map(geo => {
            return(
            <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                setTooltipContent(geo.properties.name);
                }}
                onMouseLeave={() => {
                setTooltipContent("");
                }}
                style={{
                default: {
                    fill: "#D6D6DA",
                    outline: "none"
                },
                hover: {
                    fill: "#F53",
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
    </div>
  );
};

export default MapChart;
