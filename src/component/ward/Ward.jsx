import React, { useState } from 'react'

const Ward = () => {
    const [ward_id, setWard_id] = useState("");
    const [ward_name,setWard_name] = useState("");
    const [ward_description, setWard_description] =useState("");
    const [userid, setUserid] = useState("");
    const [party, setParty] = useState("");

    const InputValue = (e,name)=>{
           name(e.target.value())
    }

  return (
    <div className='ward'>
        <div className="wardContainer">
            <div className="wardItem">
                <input type="text" value={ward_id} onChange={(e)=> InputValue(e,setWard_id)}/>
                <input type="text" value={ward_name} onChange={(e)=> InputValue(e, setWard_name)}/>
                <input type="text" value={ward_description} onChange={(e)=> InputValue(e, setWard_description)}/>
                <input type="text" value={userid} onChange={(e)=> InputValue(e,setUserid)}/>
                <input type="text" value={party} onChange={(e)=> InputValue(e, setParty)}/>
            </div>
        </div>
    </div>
  )
}

export default Ward