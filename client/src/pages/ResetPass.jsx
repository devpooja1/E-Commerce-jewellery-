import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {message} from "antd"
import { useNavigate } from 'react-router';
import bn3 from "../vedio/bn3.webp"


const ResetPassword=()=>{
const [input , setInput]=useState({})
const [userid , setUserid]=useState("")
const navigate=useNavigate()

useEffect(()=>{
  setUserid(localStorage.getItem("userid"))
},[])

const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setInput(values=>({...values , [name]:value}))
}

const handleSubmit=async()=>{
  let api="http://localhost:8100/admin/resetpassword";

try {
  const res= await axios.post(api , {userid:userid, ...input})
  message.success("Password Succesfully Update")
navigate("/home")
} catch (error) {
  //message.error(error.res.data.msg)
  console.log(error);
  
}
}

//bacground image
const backgroundStyle = {
    backgroundImage: `url(${bn3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };




    return(
        <>
  <div style={backgroundStyle}>
  <div className="modal show"  style={{ display: 'block', position: 'initial' }} >
      <Modal.Dialog >
        <Modal.Header closeButton style={{backgroundColor:" #f7e8c1"}}>
          <Modal.Title align="center" style={{ color:"#6b4b3a",backgroundColor:" #f7e8c1"}}>Reset Password</Modal.Title>
        </Modal.Header>

        <Modal.Body align="center" style={{ color:"#6b4b3a",backgroundColor:" #f7e8c1"}}>
        Enter Prvious Password : <input type="password" name='oldpassword' value={input.oldpassword} onChange={handleInput} style={{borderRadius:"5px"}}/>
        <br/><br/>
        Enter New Password : <input type="password"  name='newpassword' value={input.newpassword} onChange={handleInput} style={{borderRadius:"5px"}}/>
        <br/>
         </Modal.Body>  

        <Modal.Footer style={{backgroundColor:" #f7e8c1"}}>
          
          <Button variant="primary" style={{backgroundColor:"#6b4b3a"}} onClick={handleSubmit}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>

        </>
    )
}
export default ResetPassword;