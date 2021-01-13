import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTooltip from "react-tooltip";
import Card from './Card';
import './Info.css';

const immunizationStatsURL = '/projects/20201221-plan-your-shot-map/data/plan-your-shot.json';

const Info = (props) => {
    const [immunizationData, setImmunizationData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const immunizationDataRes = await axios.get(immunizationStatsURL);
            setImmunizationData([...immunizationDataRes.data]);
            setLoading(false);
        }
        fetchData();
    }, [])

    const getStateImmunizationData = (desiredState) => {
        if(!desiredState){
            return;
        }
        const result = immunizationData.filter(obj => obj.state === desiredState);
        return result[0];
    }

    //props.content sent down to contentAvailable, if we hover over a state props.content is truthy else falsy
    //stateData will be object containing vaccination and infection data about the hovered over state
    const renderCard = (contentAvailable, stateImmunizationData, stateCovidData) => {
        if(contentAvailable){
            return (
                <div className="customTooltip">
                    <ReactTooltip className="tooltip">
                        <Card content={props.content} immunizationData={stateImmunizationData}>
                        </Card>
                    </ReactTooltip>
                </div>
            )
        }
        return;
    }

    return (
        <div id="parent">
            {loading ? "" : renderCard(props.content, getStateImmunizationData(props.content))}
        </div>
    )
}

export default Info;