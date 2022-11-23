import './user.css'
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [userid, setUserid]=useState("")
  const [user_name, setUser_name] = useState("")
  const [user_email, setUser_email]= useState('');
  const [user_phonenumber, setUser_phonenumber] = useState('');
  const [data, setData] = useState('')
  const InputDetails = (e, name) =>{
    if(name == 'userid'){
      setUserid(e.target.value);
    }
    else if(name == "user_email"){
      setUser_email(e.target.value)
    }
    else if(name == "user_phonenumber"){
      setUser_phonenumber(e.target.value)
    }
    else{
      setUser_name(e.target.value)
    }
  }

  const SubmitDetails =async()=>{
    try{
    const user = await axios.post('/user/create', {userid,user_name,user_email,user_phonenumber})
   
    setData(user.data)
    setUserid('');
    setUser_name('');
    setUser_email('')
    setUser_phonenumber('')
  } catch(err){
        console.log(err) 
  }
  }
  return (
    <div className="user">
      <div className="userContainer">
          <div className="userItem">
            <h2 className="userTitle">Create User</h2>
          <input placeholder=' Id' className='userInput'
                 type="text" value={userid} onChange={(e)=>InputDetails(e,'userid')}/>
          <input placeholder='User Name' className='userInput'
                 type="text" value={user_name} onChange={(e)=>InputDetails(e,'user_name')}/>
                 <input placeholder=' Email' className='userInput'
                 type="text" value={user_email} onChange={(e)=>InputDetails(e,'user_email')}/>
                 <input placeholder=' PhoneNumber' className='userInput'
                 type="text" value={user_phonenumber} onChange={(e)=>InputDetails(e,'user_phonenumber')}/>
          <button onClick={SubmitDetails} className='userBtn'>Create User</button>
          </div> 
          <span>{data}</span>
      </div>
    </div>
  )
}

export default CreateUser;