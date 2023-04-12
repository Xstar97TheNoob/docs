import React, { useState, useEffect } from "react";
import SkeletonGrid from './SkeletonGrid.js';
import SearchBar from './SearchBar.js';
import "../css/grid.css";

const TRAINS = ["stable", "enterprise", "incubator", "dependency"]

const TrainsGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [trains, setData] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedChart, setSelectedChart] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setSelectedChart(null);
    setIsDialogOpen(false);
  };

  const handleOpenDialog = chart => {
    setSelectedChart(chart);
    setIsDialogOpen(true);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/charts/charts.json');
      const json = await result.json();
      let totalCount = json.totalCount;
      let trains = json.trains;
      
      setData(trains);
      setTotalCount(totalCount);
      setLoading(trains.length > 1 ? false:true);
    };
    fetchData();
  }, []);

  const filteredCharts = trains
    .map(train => {
      return {
        name: train.name,
        count: train.count,
        charts: train.charts.filter(
          chart =>
            chart.name.toLowerCase().indexOf(searchTerm) !== -1
        )
      };
    })
    .filter(train => train.charts.length > 0);

  return (
    <>
      <div className="search-container">
        <SearchBar placeHolder="Search by App name" searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <br/>
      {loading ? (
        <SkeletonGrid headers={TRAINS} />
      ) : (
        filteredCharts.map(train => (
            <>        
            <a href={`#${train.name}`} id={train.name}>
              <h2>{train.name}</h2>
              </a>
              <hr />
              <div className="grid">
              {train.charts.map(chart => (
                <div className="grid-item" onClick={() => handleOpenDialog(chart)} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "16px", height: "120px", width: "120px" }}>
                <img src={chart.icon} alt={chart.name} style={{ width: "100%", height: "50%", objectFit: "cover" }} />
              </div>                      
              ))}
              {isDialogOpen && selectedChart && (
                <div className="dialog-background">
                <div className="card card-dialog">
                <div className="card-header text-center" style={{ padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h3><a href={selectedChart.link}>{selectedChart.name}</a></h3>
                </div>
                  <div className="card-body" style={{ padding: "1rem" }}>
                    <p class="description">{selectedChart.description}</p>
                    {
                      selectedChart.source.includes("https://") ? (
                        <p>Source: <a href={selectedChart.source}>upstream image</a></p>
                      ) : (<p>Source: {selectedChart.source}</p>)
                    }
                  </div>
                  <div className="text-center" style={{ padding: "1rem", display: "flex", justifyContent: "flex-end" }}>
                    <button className="btn btn-primary" onClick={handleCloseDialog}>
                      Close
                      </button>
                      </div>
                </div>
              </div>
              )}
            </div>
            <tfoot>
              <tr>
                <td colSpan="3">Charts in this train: <strong>{train.count}</strong></td>
              </tr>
            </tfoot>
            <br/>
          </>
        ))
      )}
      {<p>Total charts: <strong>{totalCount}</strong></p>}
    </>
  );
};

export default TrainsGrid;