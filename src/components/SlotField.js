import React, { useState } from "react";
import Button from 'react-bootstrap/Button'

const SlotField = (props) => {
    const [slotContent, setSlotContent] = useState(`g${props.grp_index}_slot${props.index}`)
    return(
        <div>
            <hr/>
            <input type='text' 
                    value={slotContent} 
                    onChange={(e)=>setSlotContent(e.target.value)}/>
            <Button variant="danger" className="m-2" onClick={props.deleteSlot}>-</Button>
        </div>
    )
}

export default SlotField;