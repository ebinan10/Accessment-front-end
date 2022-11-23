import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './lga.css'

const CreateLga = () => {
 const [ lga_id, setLga_id] = useState('');
const [ lga_name, setLga_name] = useState('');
const[party, setParty] = useState('');
const [result, setresult] = useState('');
const [data, setData] = useState('');

const nav = useNavigate()
const InputDetails = (e, name) =>{
  if(name =="lga_id"){
    setLga_id(e.target.value)
  }
  else if(name=="lga_name"){
    setLga_name(e.target.value)
  }
  else if(name=="party"){
    setParty(e.target.value)
  }
  else{
    setresult(e.target.value)
  }
}

 const SubmitLgaDetails= async(e) =>{
  try{
    e.preventDefault()
    if(lga_id!='' && lga_name!='' && party!=''){
       const lga = await axios.post('/lga/create',{lga_id,lga_name,party,result});
       
       setData(lga.data)
       setTimeout(() => {
        nav('/lga/new')
       }, 5000);
    }}
    catch(err){
        console.log(err);
    }
}
  return (
    <div className='lga'>
      <div className="lgaContainer">
        
        <div className="lgaItem">
          <h2 className="lgaTitle">Create LGA Result</h2>
          <input className='lgaInput' placeholder='Id' value={lga_id} onChange={(e)=>InputDetails(e,"lga_id")} />
          <input className='lgaInput' placeholder='Name' value={lga_name} onChange={(e)=>InputDetails(e,"lga_name")} />
          <input className='lgaInput' placeholder='Party Name' value={party} onChange={(e)=>InputDetails(e,"party")} />
          <input className='lgaInput' placeholder='Result' value={result} onChange={(e)=>InputDetails(e,"result")} />
          <button className='lgaBtn' onClick={(e)=>SubmitLgaDetails(e)}>Create LGA</button> 
        </div>
          <span className="lgaSpan">{data}</span>
      </div>
    </div>
  )
}

export default CreateLga