import React, { useState, useEffect } from "react";
import gridCss from '/css/grid.css';
import HelperUtil, { isLink,getSourceName }  from './HelperUtil.js';

const GridItem = ({chart,onClick}) => {

    return (
        <img className="{gridCss.grid-item}" onClick={onClick} src={chart.icon} alt={chart.name} style={{ width: "128px", height: "128px", objectFit: "contain" }} />   
     );
    }
export default GridItem;