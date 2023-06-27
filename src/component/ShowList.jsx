import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./showList.scss"
import { useSelector ,useDispatch } from 'react-redux';


export default function ShowList() {
  const [list,setList]=useState([]);
 const listSelector=useSelector(state=>state.addTaskReducer)
 const dispatch=useDispatch();
  useEffect(()=>{
  axios.get("http://localhost:3000/post")
  .then(res=>{console.log("Get data success")
  setList(res.data)}
  )
  .catch(err=>console.log(err))
}
  ,[listSelector])
  const delete1=(ind)=>{
    axios.delete(`http://localhost:3000/post/${list[ind].id}`)
    .then(() => {console.log('Delete successful') 
    dispatch({type:"Delete",value:ind})
  })
    .catch(err=>console.log(err))
  }
  return (
    <div>
    <div className="row d-flex justify-content-center mt-3 ">
      <div className="col-5 border border-success">
{list.length!=0?


list.map((item,ind)=>(
        item.check?
        <div className='border-start border-5 border-danger mt-1 mb-1 pt-1 bg-secondary'  >
          <div className="row">
            {/*  */}
            <div className="col-md-9">
            <div className="row">
        <div className='col'><h5 className='text-primary ps-3'>{item.task}</h5></div>
        </div>
        <div className="row">
        <div className='col fz-5'><div  className='fz-9 text-primary ps-3'>{item.date}</div></div>
        </div>
            </div>
          {/*  */}
            <div className="col-md-2 pt-2"><button onClick={()=>delete1(ind)}>Xoá</button></div>
          </div>
        </div>
        :
        <div className=' mt-1 mb-1 bg-secondary pt-1'  >
          <div className="row">
            {/*  */}
            <div className="col-md-9">
            <div className="row">
        <div className='col'><h5 className='text-primary ps-3'>{item.task}</h5></div>
        </div>
        <div className="row">
        <div className='col fz-5'><div  className='fz-9 text-primary ps-3'>{item.date}</div></div>
        </div>
            </div>
          {/*  */}
            <div className="col-md-2 pt-2"><button onClick={()=>delete1(ind)}>Xoá</button></div>
          </div>
        </div>
)
)
:
<div className=' mt-1 mb-1 '  >No Tasks To Show</div>
}
<div className=' mt-5 mb-1 text-center fw-bold'  >MiniProject API & Asynchronous <i class="fas fa-c"></i> 2023</div>
<div className=' mt-0 mb-1 text-center fw-bold'  ><a className='  fw-bold' href="#" >About </a></div>


        </div>
    </div>
</div>
  )
}
