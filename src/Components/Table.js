import React, { Component } from 'react';
import Dot from './Dot'
import './Table.css'

class Table extends Component {
    render() {
        return (
            <div className="table row">
                 <div className="col">
                    <div className="row"><Dot id="1"/></div>
                    <div className="row"><Dot id="4"/></div>
                    <div className="row"><Dot id="7"/></div>
                </div>
                <div className="col">
                    <div className="row"><Dot id="2"/></div>
                    <div className="row"><Dot id="5"/></div>
                    <div className="row"><Dot id="8"/></div>
                </div>
                <div className="col">
                    <div className="row"><Dot id="3"/></div>
                    <div className="row"><Dot id="6"/></div>
                    <div className="row"><Dot id="9"/></div>
                </div>
            </div>
        )
    }
}

export default Table
