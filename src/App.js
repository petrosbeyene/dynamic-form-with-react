import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

import GroupForm from './components/GroupForm';
import SlotField from './components/SlotField';
import { nanoid } from 'nanoid';

const App = () => {
  const [groups, setGroups] = useState([{grp_id: nanoid(), index: 1, slots: [{slot_id: nanoid(), index: 1}]},{grp_id: nanoid(), index: 2, slots: [{slot_id: nanoid(), index: 1}]}])
  
  const allGroupForms = groups.map(group => {
    const group_slots = group.slots.map(slot=> 
                    <SlotField key={slot.slot_id} 
                                index={slot.index} 
                                grp_index={group.index} 
                                deleteSlot={()=>{deleteSlot(group.grp_id, slot.slot_id)}}/>)
    return(
      <GroupForm key={group.grp_id}
                  index={group.index}
                  slots={group_slots}
                  deleteForm={()=>{deleteGroupForm(group.grp_id)}}
                  addSlot={()=>{addSlot(group.grp_id)}}
      />
    )
  })

  // A Function to add Group Form
  const addGroupForm = () => {
    setGroups(prevGroups => {
        if(prevGroups.length !== 0){
          return [...prevGroups, {grp_id: nanoid(), 
                    index: prevGroups[prevGroups.length-1].index + 1, 
                    slots: [{slot_id: nanoid(), index: 1}]}]
        }else{
          return [{grp_id: nanoid(), index: 1, slots: [{slot_id: nanoid(), index: 1}]}]
        }
    })
  }

  // A Function to delete Group Form
  const deleteGroupForm = (id) => {
    setGroups(prevGroups => {
      let new_groups = []
      const arr_len = prevGroups.length
      for(let i = 0; i < arr_len; i++){
        if(prevGroups[i].grp_id !== id){
          new_groups.push(prevGroups[i])
        }
      }
      return new_groups
    })
  }
  
  // A Function to Add Slot
  const addSlot = (id) => {
    setGroups(prevGroups => prevGroups.map(group => {
      return id === group.grp_id ? 
              {...group, slots: [...group.slots, {slot_id: nanoid(), index: group.slots.length+1}]}:
              group
    }))
  }

  // A Function to delete a Slot
  const deleteSlot = (g_id, s_id) => {
    setGroups(prevGroups => prevGroups.map(group => {
      
      if(g_id === group.grp_id){
        let prev_slots = group.slots
        let new_slots = []
        for(let i = 0; i < prev_slots.length; i++){
          let curr_slot = prev_slots[i]
          if(curr_slot.slot_id !== s_id){
              new_slots.push(curr_slot)
          }
        }
        return {...group, slots: new_slots}
      }
      return group
    }))
  }

  return (
    <Card className="m-5">
      <Card.Header>Groups/Slots</Card.Header>
      <Card.Body>
        <div>
            {allGroupForms}
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button variant='primary' onClick={addGroupForm}>+ Add Group</Button>
      </Card.Footer>
    </Card> 
  );
}

export default App;
