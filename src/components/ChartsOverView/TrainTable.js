import React, { useState, useEffect } from "react";
import SkeletonTable from './SkeletonTable.js';

const TrainTable = ({link,showTotal = false, rows = 10}) => {
    const [train, setTrain] = useState([]);
    const [totalCount, setTotalCount] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(link);
        const json = await res.json();
        setTrain(json.train);
        setTotalCount(json.totalCount);
      }
      fetchData();
    }, []);
    
if (!train) return <SkeletonTable columns={['App', 'Source', 'Description']} rows={rows} />;
return (
  <>
    {train &&
      train.map((data) => {
        const charts = data.charts;

        return (
          <React.Fragment key={data.name}>
            <table>
              <thead>
                <tr>
                  <th>App</th>
                  <th>Source</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {charts.map((chart) => (
                  <tr key={chart-chart.name}>
                  <td>
                  <img src={chart.icon} alt={chart.name} width="25" height="25"/>&nbsp;
                  <a href={chart.link}>{chart.name}</a>
                  </td>
                    <td>{chart.source}</td>
                    <td>{chart.description}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Charts in this train: <strong>{charts.length}</strong></td>
                </tr>
              </tfoot>
            </table>
          </React.Fragment>
        );
      })}
      {showTotal && <p>Total charts: <strong>{totalCount}</strong></p>}
  </>
 );
}

export default TrainTable;