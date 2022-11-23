import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './state.css'

const CreateState = () => {
    const [state_name, setState_name] = useState('');
    const [state_id, setState_id] = useState('');

    const InputDetails = (e, name) =>{
      if(name == 'state_id'){
        setState_id(e.target.value);
        console.log(state_id);
      }
      else{
        setState_name(e.target.value)
        console.log(state_name);
      }
    }

    const SubmitDetails =async()=>{
      try{
      const state = await axios.post('/state/create', {state_id,state_name})
    } catch(err){
          console.log(err) 
    }
    }
  return (
    <div className='state'>
        <div className="stateContainer">
          <div className="stateItem">
              <h2 className="stateTitle">Create State</h2>
                <input placeholder='State Id' className='stateInput'
                 type="text" value={state_id} onChange={(e)=>InputDetails(e,'state_id')}/>
                <input placeholder='State Name' className='stateInput'
                 type="text" value={state_name} onChange={(e)=>InputDetails(e,'state_name')}/>
                <button className='stateBtn' onClick={SubmitDetails}>Create State</button>
            </div>
        </div>
    </div>
  )
}

export default CreateState