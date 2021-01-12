import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import Card from './Card';

const immunizationStatsURL = '/projects/20201221-plan-your-shot-map/data/plan-your-shot.json'

const renderCard = (props, contentAvailable, data) => {
    if(contentAvailable){
        return (
            <ReactTooltip>
                <Card content={props.content} data={data}>
                </Card>
            </ReactTooltip>
        )
    }
    return;
}

const Info = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(immunizationStatsURL);
            setData([...res.data]);
            console.log(data);
        }
        fetchData();
    }, [data])

    const getStateData = (desiredState) => {
        const result = data.filter(obj => obj.state === desiredState);
        return result[0];
    }

    return (
        <div id="parent">
            {renderCard(props, props.content, getStateData(props.content))};
        </div>
    )
}

export default Info;