import React, { useState } from 'react'
import "./addList.scss"
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

export default function AddList() {
const[task,setTask]=useState({check:false});
const[checked1,setChecked1]=useState(false)







const dispatch=useDispatch()

const addTask=(e)=>{
  setTask({...task,[e.target.id]:e.target.value})
}
const [toggle,setToggle]=useState(true)


const saveTask=()=>{
  axios.post("http://localhost:3000/post",{
    task:task['task'],
    date:task['date'],
    check:task['check']
  })
  .then(res=>{setTask([res.data])
    dispatch({type:"Add",value:task})
    setChecked1(false)
  })
  .catch(err=>console.log(err))
}
  return (
    <div>
        <div className="row d-flex justify-content-center mt-3 ">
          <div className="col-5 bg-light pt-2 border border-success">
            <div className="row">
            <h3 className='col-md-9 bg-dangder fw-bold'>Task Tracker</h3>
            <div className='col-md-2'><button className='rounded-1 bg-success' onClick={()=>setToggle(!toggle)}>Add</button></div>
            </div>
            {toggle?<>
                      <div className="row">
                      <div className='col fw-bold'>Task</div>
                      </div>
                      <div className="row">
                        <div className="col">
                        <input style={{width:"100%"}} placeholder='Add Task' id="task" value={task['task']?task[task]:""} onChange={(e)=>addTask(e)}/>
                        </div>
                      </div>
                      <div className="row">
                      <div className='col fw-bold pt-4'>Day & Time</div>
                      </div>
                      <div className="row">
                        <div className="col">
                        <input style={{width:"100%"}} placeholder='Date & Time' id="date" value={task['date']?task[task]:""} onChange={(e)=>addTask(e)}/>
                        </div>
                      </div>
                      <div className="row pt-3">
                      <div className="col fw-bold">Set Remember</div>
                      <div className="col"><input type="checkbox" id="check" checked={checked1} onChange={(e)=>{setTask({...task,"check":e.target.checked});setChecked1(!checked1)}}></input></div>
                      </div>
                      <div className="row pt-3 pb-2">
                        <div className="col">
                          <button onClick={()=>{task['task']&&task['date']?saveTask():alert("Nhập nội dung")}} style={{width:'100%'}} className='bg-dark text-light'>Save Task</button>
                        </div>
                      </div>
                      </>
                      : <div></div> 
          }
           






            </div>
        </div>
    </div>
  )
}
