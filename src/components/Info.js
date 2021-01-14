import React from 'react';
import ReactTooltip from "react-tooltip";
import Card from './Card';
import './Info.css';

const Info = (props) => {

    const getStateImmunizationData = (desiredState) => {
        if(!desiredState){
            return;
        }
        const result = props.data.filter(obj => obj.state === desiredState);
        return result[0];
    }

    //props.content sent down to contentAvailable, if we hover over a state props.content is truthy else falsy
    //stateData will be object containing vaccination and infection data about the hovered over state
    const renderCard = (contentAvailable, stateImmunizationData) => {
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
            {renderCard(props.content, getStateImmunizationData(props.content))}
        </div>
    )
}

export default Info;