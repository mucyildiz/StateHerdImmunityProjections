import React, { useEffect, useState } from 'react';
import axios from 'axios';

const immunizationStatsURL = '/projects/20201221-plan-your-shot-map/data/plan-your-shot.json'


const getStateData = (arrayOfStates, desiredState) => {
    const result = arrayOfStates.filter(obj => obj.state === desiredState);
    return result[0].state;
}

const Info = (props) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(immunizationStatsURL);
            setData(res.data);
        }
        fetchData();
    }, [])

    return (
        <div id="parent">
            <div>
                {props.content ? props.content : "Hover over a state to see the projected herd immunity date."}
                {props.content ? getStateData(data, props.content) : ""}
            </div>
        </div>
    )
}

export default Info;