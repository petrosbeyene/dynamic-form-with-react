import React from "react";
import SlotField from "./SlotField";

export default function GroupForm(){
    return(
        <div>
            <form>
                <input type='text' value="group"></input>
                <SlotField />
            </form>
        </div>
    )
}