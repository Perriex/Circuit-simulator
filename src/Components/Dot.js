import React, { Component } from 'react'
import './Dot.css'

class Dot extends Component {
    state = {
        id:this.props.id,
    }
    render() {
        return (
            <div>
                <button className="dot">{this.state.id}</button>
            </div>
        )
    }
}

export default Dot