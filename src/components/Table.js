import React from 'react';
import './Table.css';

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const DataTable = (props) => {

    const renderTable = () => {
        const header = ["State", "Vaccinations", "Population", "Pct. Vaccinated"];
        return (
            <div id="table-container">
                <table id="data-table">
                <thead>
                    <tr>{header.map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                    {Object.keys(props.data).map((k, i) => {
                    let state = props.data[k];
                    return (
                        <tr key={i}>
                        <td>{state.state}</td>
                        <td>{numberWithCommas(state['doses-number'])}</td>
                        <td>{state.population}</td>
                        <td>{state['pct-vaccinated']}</td>
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