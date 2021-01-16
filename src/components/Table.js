import React, { useState, useEffect } from 'react';
import './Table.css';
import { calculateImmunityDate } from '../data/computations';


const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const numberWithoutCommas = (x) => {
    return Number(x.replace(/,/g, ''));
}


const DataTable = (props) => {
    
    const [immunizationData, setImmunizationData ] = useState([]);
    const [inDescendingOrder, setInDescendingOrder] = useState({
        states: true,
        vaccinations: false,
        population: false,
        percent: false,
        date: false
    })
    const header = ["State", "Vaccinations", "Population", "Pct. Vaccinated", "Projected Date"];

    useEffect(() => {
        setImmunizationData(props.data);
    }, [props.data])

    const setData = (attribute, ascending) => {
        if(ascending){
            setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => (numberWithoutCommas(stateTwo[attribute]) - numberWithoutCommas(stateOne[attribute]))));
        }
        else{
            setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => -1 * (numberWithoutCommas(stateTwo[attribute]) - numberWithoutCommas(stateOne[attribute]))));
        }
    }

    const sortArray = (property) => {

        switch(property){

            case header[1]:
                setData('doses-number', !inDescendingOrder.vaccinations)
                setInDescendingOrder( {states: false, vaccinations: !inDescendingOrder.vaccinations, population: false, percent: false, date: false });
                break;

            case header[2]:
                setData('population', !inDescendingOrder.population);
                setInDescendingOrder( {states: false, vaccinations: false, population: !setInDescendingOrder.population, percent: false, date: false });
                break;

            case header[3]:
                setData('vaccinated', !inDescendingOrder.percent);
                setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: true, date: false });
                break;

            case header[4]:
                if(!inDescendingOrder.date){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => calculateImmunityDate(stateTwo).date - calculateImmunityDate(stateOne).date));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false, date: true });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => -1 * (calculateImmunityDate(stateTwo).date - calculateImmunityDate(stateOne).date)));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false, date: false });
                }
                break;

            default:
                if(!inDescendingOrder.states){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => {
                        const textA = stateOne.state.toUpperCase();
                        const textB = stateTwo.state.toUpperCase();
                        return (textA < textB ? -1 : (textA > textB) ? 1: 0);
                    }));
                    setInDescendingOrder( {states: true, vaccinations: false, population: false, percent: false, date: false });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => {
                        const textA = stateOne.state.toUpperCase();
                        const textB = stateTwo.state.toUpperCase();
                        return (textA > textB ? -1 : (textA < textB) ? 1: 0);
                    }));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false, date: false });
                }
                break;
        }
    }

    const calcPercentage = (state) => {
        const x = state['doses-number'] / numberWithoutCommas(state.population);
        return (parseFloat(x)*100).toFixed(2)+"%"
    }


    const renderTable = () => {
        return (
            <div id="table-container">
                <table id="data-table">
                <thead>
                    <tr>{header.map((h, i) => <th onClick={() => {sortArray(h)}} key={i}>
                        <div className="header-item">
                            {h}
                        </div>
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(immunizationData).map((k, i) => {
                    let state = immunizationData[k];
                    return (
                        <tr key={i}>
                        <td>{state.state}</td>
                        <td>{numberWithCommas(state['doses-number'])}</td>
                        <td>{state.population}</td>
                        <td>{calcPercentage(state)}</td>
                        <td>{calculateImmunityDate(state).stringDate}</td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
          );
    }

    return (
        <>
        {renderTable()}
        </>
    )
}

export default DataTable;