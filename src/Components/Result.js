import Wire from "../Images/line.png"
import Dependant_current from '../Images/Current-d.png'
import Independant_current from '../Images/Current-ind.png'
import Resistor from '../Images/Resistor.png'
import Dependant_voltage from '../Images/voltage-d.png'
import Independant_voltage from '../Images/voltage-ind.png'

const Result = (info) =>{
    let pictures = {
        Wire: Wire,
        Dependant_current: Dependant_current,
        Independant_current:Independant_current,
        Resistor:Resistor,
        Dependant_voltage:Dependant_voltage,
        Independant_voltage:Independant_voltage
    }
    let tags = [];
    info.forEach(element => {
        var name = "position position-"+`${element.loc1}`+"-"+`${element.loc2}`;
        let tag = 
        <div className={name} id={name}>
            <img src={pictures[element.item]} width="100" />
            {element.amount !== '0' ? <label>{element.amount}</label>:null}
        </div>
        tags.push(tag);
    });
    return tags;
}

export default Result