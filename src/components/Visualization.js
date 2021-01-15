import React from 'react';
import { Button } from 'react-bootstrap';
import MapChart from './MapChart';
import Info from './Info';

const Visualization = (props) => {
    return (
        <>
        <Button>Yeah yeah</Button>
        <div id="map" name="map">
        {props.loading ? "" : 
        <div>
          <MapChart setTooltipContent={props.setContent} />
          <Info data={props.data} content={props.content} /> 
        </div>
        }
        </div>
        </>
    )
}

export default Visualization;