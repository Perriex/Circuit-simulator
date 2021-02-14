import React, { Component } from 'react'
import Result from './Result';
import './Analyze.css'

export class Analyze extends Component {
    render() {
        const data = JSON.parse(sessionStorage.data);
        return (
            <div className="table-2 row">
                <div className="row top"><a>Your Circuit is Ready</a></div>
                {Result(data)}
            </div>
        )
    }
}

export default Analyze
