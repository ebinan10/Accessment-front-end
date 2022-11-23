import React from 'react'
import { useState } from 'react';

const State = () => {
    const [state, setState] = useState('');
    const [state_id, setState_id] = useState('');
  return (
    <div className='state'>
        <div className="stateContainer">
            <div className="stateItem">
                <input placeholder='State Id' className='stateInput' type="text" value={state_id} />
                <input placeholder='State Name' className='stateInput' type="text" value={state}/>
            </div>
        </div>
    </div>
  )
}

export default State