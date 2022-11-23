import axios from 'axios';
import React, { useState } from 'react'
import './pollingunit.css'

const CreatePollingUnitDetail = () => {
    const [id, setId] = useState('');
    const [unit_id, setUnit_id] = useState('');
    const [ unit_name, setUnit_name] = useState('');
    const [ unit_address, setUnit_address] = useState('');
    const [data, setData] = useState('')
    const InputValue = ( e, name )=>{
          if(name == 'unit_name'){
            setUnit_name(e.target.value)
           }
           else if(name == 'unit_id') {
            setUnit_id(e.target.value)
           }
           else{
            setUnit_address(e.target.value)
           }
           
          
    }
    const SubmitDetails = async() =>{
      try{
        if(unit_id!='' && unit_name!=''&& unit_address!=''){
        const submit = await axios.post('/pollingunit/info', {unit_id, unit_name, unit_address} )
        console.log(submit);
        setData(submit.data)
        setUnit_id('');
        setUnit_name('');
        setUnit_address('');
    }}
        catch(err){
          console.log(err)
        }
  }
  

  return (
    <div className='pollingUnit'>
        <div className="pollingunitContainer">
          
          <div className="pollingunitItem">
            <h2 className="pollingUnitTitle">Polling Unit </h2>
          <input type="number" className='pollingUnitInput' value={unit_id} placeholder=' Id' onChange={(e)=> InputValue(e, "unit_id")}/>
          <input type="text" className='pollingUnitInput' value={unit_name} placeholder='Name' onChange={(e)=> InputValue(e, "unit_name")}/>
          <input type="text" className='pollingUnitInput' value={unit_address} placeholder='Address' onChange={(e)=> InputValue(e, 'unit_address')}/>
          <button onClick={SubmitDetails} className='pollingUnitButton'>Create Unit</button>
          </div>
              <span className='span'>{data}</span>  
          </div>
    </div>
  )
}

export default CreatePollingUnitDetail