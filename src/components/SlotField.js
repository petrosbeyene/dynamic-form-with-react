import React from "react";
import Button from 'react-bootstrap/Button'

const SlotField = (props) => {
    return(
        <div>
            <hr/>
            <input type='text' value={`g${props.grp_index}_slot${props.index}`}/>
            <Button variant="danger" className="m-2" onClick={props.deleteSlot}>-</Button>
        </div>
    )
}

export default SlotField;