import Table from "./Table"
import ItemModal from './ItemModal'
import React, { useState } from 'react'
import './Surface.css'


const Surface = (props) => {
    let [open,setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    };
    const submitData = () =>{
        console.log("infoTable");
        sessionStorage.setItem("data",JSON.stringify(props.Items));
      }
    return(
        <div className="container">
            <div className="row">
                <div className="col"><Table/></div>
                <div className="col">
                    <div className="info">
                        <div className="row warning">
                            <p>Warning: Do not refresh while adding items</p>
                        </div>
                        <div className="row">
                            <p>items:</p>
                            { props.Items.map((item,i )=> <p id={i} className="row m-2" style={{fontSize:"12px"}}>* {item.item} added in location {item.loc1} and {item.loc2}</p>)}
                        </div>
                        <div className="row">
                            <p>Add Item first, then start the analyze!</p>
                        </div>
                        <div className="">
                            <a className="btn-info" onClick={() => handleClick()}>add Item</a>
                            <a className="btn-info"  onClick={() => submitData()} href="/Analyze">start Analyze</a>
                        </div>
                    </div>
                </div>
                <ItemModal onClose={onClose} add={props.add} show={open}/>
            </div>
        </div> 
    );
}

export default Surface