import React from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const GroupForm = (props) => {
    
    return(
        <div className="container border">
            <div className="border-bottom ml-0 mr-0 mb-2 row">
                <p className="col"><b>Group</b></p>
                <p className="col"><b>Slot</b></p>
            </div>
            <form className="row">
                <div className="col mr-2">
                    <Button variant="danger" className="m-2" onClick={props.deleteForm}>-</Button>
                    <input type='text' value={`group${props.index}`}/>
                </div>
                <div className="col">
                    {props.slots}
                    <hr/>
                    <Button variant="info" className="mb-2" onClick={props.addSlot}>+Add Slot</Button>
                </div>
            </form>
        </div>
    )
}

export default GroupForm;