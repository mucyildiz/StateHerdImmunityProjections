import React, { useState, useEffect } from 'react';
import './Table.css';

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
        percent: false
    })
    const header = ["State", "Vaccinations", "Population", "Pct. Vaccinated"];

    useEffect(() => {
        setImmunizationData(props.data);
    }, [props.data])

    const sortArray = (property) => {
        switch(property){

            case header[1]:
                if(!inDescendingOrder.vaccinations){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => stateTwo['doses-number'] - stateOne['doses-number']));
                    setInDescendingOrder( {states: false, vaccinations: true, population: false, percent: false });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => -1 * (stateTwo['doses-number'] - stateOne['doses-number'])));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false });
                }
                break;

            case header[2]:
                if(!inDescendingOrder.population){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => numberWithoutCommas(stateTwo.population) - numberWithoutCommas(stateOne.population)));
                    setInDescendingOrder( {states: false, vaccinations: false, population: true, percent: false });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => -1 * (numberWithoutCommas(stateTwo.population) - numberWithoutCommas(stateOne.population))));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false });
                }
                break;

            case header[3]:
                if(!inDescendingOrder.percent){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => stateTwo.vaccinated - stateOne.vaccinated));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: true });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => -1 * (stateTwo.vaccinated - stateOne.vaccinated)));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false });
                }
                break;

            default:
                if(!inDescendingOrder.states){
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => {
                        const textA = stateOne.state.toUpperCase();
                        const textB = stateTwo.state.toUpperCase();
                        return (textA < textB ? -1 : (textA > textB) ? 1: 0);
                    }));
                    setInDescendingOrder( {states: true, vaccinations: false, population: false, percent: false });
                }
                else{
                    setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => {
                        const textA = stateOne.state.toUpperCase();
                        const textB = stateTwo.state.toUpperCase();
                        return (textA > textB ? -1 : (textA < textB) ? 1: 0);
                    }));
                    setInDescendingOrder( {states: false, vaccinations: false, population: false, percent: false });
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