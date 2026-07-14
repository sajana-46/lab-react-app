import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import Navigationbar from './Navigationbar'




const Viewlab = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.get("http://localhost:3000/view-all").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <Navigationbar/>
        
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Sem</th>
              <th>Course</th>
              <th>System Number</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.name}</td>
                        <td>{value.department}</td>
                        <td>{value.sem}</td>
                        <td>{value.course}</td>
                        <td>{value.systemNumber}</td>
                        <td>{value.loginTime}</td>
                        <td>{value.logoutTime}</td>
                        <td>{value.date}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewlab