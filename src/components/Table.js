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
    const header = ["State", "Vaccinations", "Population", "Pct. Vaccinated"];

    useEffect(() => {
        setImmunizationData(props.data);
    }, [props.data])

    const sortArray = (property) => {
        switch(property){
            case header[1]:
                setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => stateTwo['doses-number'] - stateOne['doses-number']));
                break;
            case header[2]:
                setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => numberWithoutCommas(stateTwo.population) - numberWithoutCommas(stateOne.population)));
                break;
            case header[3]:
                setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => stateTwo.vaccinated - stateOne.vaccinated));
                break;
            default:
                setImmunizationData([...immunizationData].sort((stateOne, stateTwo) => {
                    const textA = stateOne.state.toUpperCase();
                    const textB = stateTwo.state.toUpperCase();
                    return (textA < textB ? -1 : (textA > textB) ? 1: 0);
                }));
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
                    <tr>{header.map((h, i) => <th onClick={() => {sortArray(h)}} key={i}>{h}</th>)}</tr>
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