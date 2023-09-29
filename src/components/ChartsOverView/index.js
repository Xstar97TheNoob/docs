import React, { useState, useEffect } from "react";
import './searchbar.css';
import HelperUtil,{ViewOptions,countArrayLength} from './HelperUtil.js';
import SearchBar from './SearchBar.js';
import GridView from './GridView.js';
import TableView from './TableView.js';
import ListView from './ListView.js';
import LoadingView from './LoadingView.js';
import EmptyView from './EmptyView.js';
import CheckboxList from './CheckboxList.js';
import MarkdownTrains from './MarkdownTrains';
import { useLocation } from "react-router-dom";

const ChartsOverView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Get the search query parameters from the URL, or use default values if they are not provided
  const searchParam = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [view, setView] = useState(0);
  const [trains, setTrains] = useState([]);
  const [totalCount, setTotalCount] = useState(["computing..."]);
  const [loading, setLoading] = useState(true);

  const [activeCheckboxes, setActiveCheckboxes] = useState([]);

  const handleChange = (checkbox) => {
    if (activeCheckboxes.includes(checkbox.name)) {
      setActiveCheckboxes(activeCheckboxes.filter((c) => c !== checkbox.name));
    } else {
      setActiveCheckboxes([...activeCheckboxes, checkbox.name]);
    }
  };

  const handleSearch = event => {
    const txtsearch = event.target.value.toLowerCase();
    setSearchTerm(txtsearch);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/charts/charts.json');
      const json = await result.json();
      let totalCount = json.totalCount;
      let trains = json.trains;
      setTrains(trains);
      setTotalCount(totalCount);
      setLoading(trains.length > 1 ? false : true);

      // Update active checkboxes based on fetched data
      setActiveCheckboxes(trains.map(train => train.name));
    };
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

  const filteredCharts = trains
    .map(train => {
      return {
        name: train.name,
        count: train.count,
        charts: train.charts.filter(
          chart =>
            chart.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            chart.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )
      };
    })
    .filter(train => train.charts.length > 0 && activeCheckboxes.includes(train.name));
    
  return (
    <div>
      <MarkdownTrains trains={trains}/>
      <div className="search-container">
        <CheckboxList checkboxData={trains} handleChange={(checkbox)=> handleChange(checkbox)} activeCheckboxes={activeCheckboxes} />
        <SearchBar placeHolder="Search by App name" searchTerm={searchTerm} handleSearch={handleSearch} setSelectedOption={(i)=> setView(ViewOptions[i].value)} view={view}/>
      </div>
      <br/>
      {loading ? <LoadingView />: (
        filteredCharts.length === 0 || filteredCharts.length === -1? <EmptyView/>:
          filteredCharts.map(train => {
            switch (view) {
              case 1:
                return <GridView train={train} />;
              case 2:
                return <ListView train={train} />;
              default:
                return <TableView train={train} />;
              }
          })
      )}
      { countArrayLength(filteredCharts) === 0 || countArrayLength(filteredCharts) === -1 ? <br/>:<p>Total charts: <strong>{countArrayLength(filteredCharts) !== totalCount ? `${countArrayLength(filteredCharts)} (${totalCount})`: totalCount}</strong></p> }
    </div>
  );
};

export default ChartsOverView;
