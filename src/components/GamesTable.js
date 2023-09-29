import React, { useState, useEffect } from "react";
import SkeletonTable from './SkeletonTable.js';

const GamesTable = ({link, rows = 10}) => {
    const [games, setGames] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(link);
        const json = await res.json();
        setGames(json);
      }
      fetchData();
    }, []);
    
if (!games) return <SkeletonTable columns={['Icon',	'Name',	'Train','Source']} rows={rows} />;
return (
  <div>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Train</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {games &&
            games.map(game => (
              <tr key={game.name}>
                <td><img src={game.icon} alt={game.name} width="48" height="36" /></td>
                <td>{game.name}</td>
                <td>{game.train}</td>
                <td><a href={game.link}>truecharts docs</a></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
 );
}

export default GamesTable;