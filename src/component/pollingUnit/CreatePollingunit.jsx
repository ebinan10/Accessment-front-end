import React, { useState } from 'react';
import axios from 'axios'
import './unit.css';


const CreatePollingunit = () => {
  const [unit_id, setUnit_id] = useState('');
  const [party, setParty] = useState('');
  const [result, setResult] = useState('');
  const [ward_id, setWard_id] = useState('');
  const [lga_id, setLga_id] = useState('');
  const [state_id, setState_id] = useState('');
  const [user_id, setUser_id] = useState('');
  const [data, setData] = useState('');

  const InputValue = ( e, name )=>{
    if(name == 'unit_id'){
      setUnit_id(e.target.value)
     }
     else if(name == 'party') {
      setParty(e.target.value)
     }
     else if(name == 'result') {
      setResult(e.target.value)
     }
      else if(name == 'ward_id') {
      setWard_id(e.target.value)
     }
     else if(name == 'lga_id') {
      setLga_id(e.target.value)
     }
     else if(name == 'user_id') {
      setUser_id(e.target.value)
     }
     else{
      setState_id(e.target.value)
     }
     }

  const SubmitDetails = async() =>{
    try{
    if(unit_id!='' && party !=''&& result!='' && ward_id != '' && lga_id!='' && state_id!='' && user_id!=''){ 
      const submit =  await axios.post('/pollingunit/create', { unit_id,party,result,ward_id,lga_id,state_id,user_id} )
      setData(submit.data)
      setUnit_id('')
      setParty('')
      setLga_id('')
      setResult('')
      setUser_id('')
      setWard_id('')
      setState_id('')
      setUser_id('')
  } }
    catch(err){
      console.log(err);
    }}
    
  return (
    <div className='pollingUnit'>
      <div className="pollingUnitContainer">
        <div className="pollingUnitItem">
          <h2 className="pollingUnitTitle"> Unit Result</h2>
          <input type="number" className='pollingUnitInput' value={unit_id} placeholder='Id'
           onChange={(e)=> InputValue(e, "unit_id")}/>
          <input type="text" className='pollingUnitInput' value={party} placeholder='Party' 
          onChange={(e)=> InputValue(e, "party")}/>
          <input type="number" className='pollingUnitInput' value={result} placeholder='Result'
           onChange={(e)=> InputValue(e, 'result')}/>
          <input type="number" className='pollingUnitInput' value={ward_id} placeholder='Ward Id'
           onChange={(e)=> InputValue(e, 'ward_id')}/>
          <input type="number" className='pollingUnitInput' value={lga_id} placeholder='Lga Id' 
          onChange={(e)=> InputValue(e, 'lga_id')}/>
          <input type="number" className='pollingUnitInput' value={state_id} placeholder='State Id' 
          onChange={(e)=> InputValue(e, 'state_id')}/>
          <input type="number" className='pollingUnitInput' value={user_id} placeholder='User Id'
           onChange={(e)=> InputValue(e, 'user_id')}/>
          <button onClick={SubmitDetails} className='pollingUnitButton'>Create Result</button>
          
        </div>
        <span className='span'>{data}</span>
      </div>
    </div>
  )
}

export default CreatePollingunit;