import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import Card from './Card';

const immunizationStatsURL = '/projects/20201221-plan-your-shot-map/data/plan-your-shot.json'

const Info = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await axios.get(immunizationStatsURL);
            setData([...res.data]);
            setLoading(false);
        }
        fetchData();
    }, [])

    const getStateData = (desiredState) => {
        const result = data.filter(obj => obj.state === desiredState);
        return result[0];
    }

    //props.content sent down to contentAvailable, if we hover over a state props.content is truthy else falsy
    //stateData will be object containing vaccination and infection data about the hovered over state
    const renderCard = (contentAvailable, stateData) => {
        if(contentAvailable){
            return (
                <ReactTooltip>
                    <Card content={props.content} data={stateData}>
                    </Card>
                </ReactTooltip>
            )
        }
        return;
    }

    return (
        <div id="parent">
            {loading ? "" : renderCard(props.content, getStateData(props.content))}
        </div>
    )
}

export default Info;