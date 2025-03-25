import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import del from "../vedio/del.png"
import edit from "../vedio/edit.png"
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [myData , setMyData]=useState([]);
    const navigate=useNavigate()

    const loadData=()=>{
        let api = "http://localhost:8100/Product/productupdate";
        axios.get(api).then((res)=>{
            setMyData(res.data)
            // console.log(res.data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])


   //delete data function
const delData=(id)=>{
    let api = "http://localhost:8100/product/productdelete";
        axios.post(api , {id:id}).then((res)=>{
    console.log(res.data);
    alert("Product Dalete!!!")
    loadData()
  })
  }

  const editData=(id)=>{
  navigate(`/dashboard/editdata/${id}`)
  }


    let sno=0;
    const ans = myData.map((key)=>{
        sno++;
        return(
            <>
             <tr border="1" align="center">
                <td>{sno}</td>
                <td ><img src={key. linkimg} width={100} height={100}/></td>
                <td >{key.description}</td>
                <td>{key. price}</td>
                <td>
                    <a href="#" onClick={()=>{delData(key._id)}}>
                        <img src={del} width="30px" height="30px" style={{marginRight:"30px", marginLeft:"30px"}}/></a>
                    <a href="#" onClick={()=>{editData(key._id)}}>
                        <img src={edit} width="30px" height="30px"/></a>
                </td>

            </tr>
            </>
        )
    })


    return(
        <>
        <center>
       < h1>Display data</h1>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Image</th>
          <th>Description</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
       </center>
        </>
    )
}
export default Update