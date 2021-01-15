import React, { useState } from 'react';
import MapChart from './MapChart';
import Info from './Info';
import DataTable from './Table';

const Visualization = (props) => {
    const [tableShown, setTableShown] = useState(true);

    const handleClick = () => {
        setTableShown(!tableShown);
        console.log(tableShown);
    }

    return (
        <div id='vis-container'>
            {props.loading ? "" : 
            <div>
            <MapChart setTooltipContent={props.setContent} buttonClick={handleClick} showMap={!tableShown}/>
            <Info data={props.data} content={props.content} /> 
            </div>
            }
            {tableShown ? <DataTable data={props.data} /> : ""}
        </div>
    )
}

export default Visualization;