import React from 'react'
import BarChart from './BarChart/BarChart'
import './ChartsLayout.module.css'
import {NavLink} from 'react-router-dom'
function ChartsLayout() {
    return (
        <div>
            <br/>
            <nav>
                <NavLink to=""> <span style={{color: 'black'}}>Bar Chart</span></NavLink>
            </nav>
            <hr/>
            <BarChart/>
        </div>
    )
}

export default ChartsLayout
