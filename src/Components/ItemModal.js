import React, { Component } from 'react'
import './ItemModal.css'
// import Resistor from '../Images/Resistor.png'
// import Capacitor from '../Images/Capacitor.png'
// import CurrentD from '../Images/Current-d.png'
// import CurrentI from '../Images/Current-ind.png'
// import Self from '../Images/slf.png'
// import VoltageD from '../Images/voltage-d.png'
// import VoltageI from '../Images/voltage-ind.png'


class ItemModal extends Component {
    state = {
        item:"Resistor",
        loc1:0,
        loc2:0,
        amount:0
    }
    onChange = (e)=>{
        this.setState({ [e.target.name] : e.target.value});
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state);
        this.props.onClose();
      };
  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="Modal">
          <button className="Modal-btn-close" onClick={() => this.props.onClose()}>X</button> 
          <div className="Modal-header">Select Tool</div>
          <form onSubmit={this.handleSubmit}>
            <label className="Modal-item" for="item">Choose an item:</label>
            <select name="item" id="cars" onChange={this.onChange} required>
                <option className="Title"value="Resistor">Select Item(red items are not active)</option>
                <option value="Wire">Wire</option>
                <option value="Resistor">Resistor</option>
                <option className="notActive"value="Capacitor">Capacitor</option>
                <option value="Dependant_voltage">Dependant_voltage</option>
                <option value="Dependant_current">Dependant_current</option>
                <option value="Independant_voltage">Independant_voltage</option>
                <option value="Independant_current">Independant_current</option>
                <option className="notActive"value="Self">Self</option>
            </select>
            <label className="Modal-item">Selet the position</label>
            <input type="number" min="1" max="9" name="loc1" placeholder="dot-1" onChange={this.onChange} required></input>
            <input type="number" min="1" max="9" name="loc2" placeholder="dot-2" onChange={this.onChange} required></input>
            <label className="Modal-item">Set amount(For Wire,set 0)</label>
            <input type="text"  name="amount" placeholder="amount" onChange={this.onChange} required></input>
            <input type="submit" value="set" className="Modal-item Modal-btn"/>
        </form>
      </div>
    );
  }
}

export default ItemModal