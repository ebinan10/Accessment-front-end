import React, { useState } from 'react';
import './ward.css';
import axios from 'axios';

const CreateWard = () => {
    const [ward_id, setWard_id] = useState("");
    const [ward_name,setWard_name] = useState("");
    const [ward_description, setWard_description] =useState("");
    const [userid, setUserid] = useState("");
    const [party, setParty] = useState("");
    const [data, setData] = useState("");

    const InputValue = ( e, name )=>{
      if(name == 'ward_id'){
        setWard_id(e.target.value)
        console.log(ward_id) 
       }
       else if(name == 'ward_name') {
        setWard_name(e.target.value)
        console.log(ward_name);
       }
       else if(name == 'userid') {
        setUserid(e.target.value)
        console.log(userid);
       }
       else if(name == 'party') {
        setParty(e.target.value)
        console.log(party);
       }
       else{
        setWard_description(e.target.value)
        console.log(ward_description);
       }
       
      
}
    const SubmitDetails=async(e)=>{
      try{
      const ward = await axios.post('/ward/create',{
        ward_id, ward_name, ward_description, party, userid
      })
      setWard_id('')
      setWard_name('')
      setUserid('')
      setParty('')
      setWard_description('')
      setData(ward.data)
    }
  catch(err){
      console.log(err)
  }}
  return (
    <div className='createWard'>
        <div className="createWardContainer">
            <div className="createWardItem">
              <h2 className="wardTitle">WARD Details</h2>
                <input className="createWardInput" type="text" placeholder='Id' value={ward_id} onChange={(e)=> InputValue(e,'ward_id')}/>
                <input className="createWardInput" type="text" placeholder='Name'  value={ward_name} onChange={(e)=> InputValue(e, 'ward_name')}/>
                <input className="createWardInput" type="text" placeholder='Description'  value={ward_description} onChange={(e)=> InputValue(e, 'ward_description')}/>
                <input className="createWardInput" type="text" placeholder='User Id'  value={userid} onChange={(e)=> InputValue(e,'userid')}/>
                <input className="createWardInput" type="text" placeholder='Party Name'  value={party} onChange={(e)=> InputValue(e, 'party')}/>
                <button className='wardBtn' onClick={(e)=>SubmitDetails(e)}>Create Ward</button>
            </div>
            <span>{data}</span>
        </div>
    </div>
  )
}

export default CreateWard