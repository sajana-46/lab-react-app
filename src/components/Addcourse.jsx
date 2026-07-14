import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const Addcourse = () => {
    const [input, changeInput] = useState(
        { 
            name: "",
          department:"" , 
           sem:"" , 

            course: "", 
             systemNumber:"" ,  
             loginTime: "", 
              logoutTime: "", 
              date:"" 
               
        }  
    )

    
    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);
        axios.post("", input)
            .then((response) => {
                console.log(response.data);
                alert("Course added successfully");
            })
            .catch((error) => {
                console.error("Error adding course", error.res.status);
                console.error("Error adding course", error.res.data);
            });


        
    };
    
  return (
    <div>
        
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="text-center">Add Course</h2>
                    <div className="row g-3">

                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Name:</label>
                            <input type="text" className="form-control" required
                             name="name"
                                value={input.name}
                                onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Department:</label>
                            <input type="text" className="form-control"
                             name="department"
                                value={input.department}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Sem:</label>
                            <input type="text" className="form-control"
                             name="sem"
                                value={input.sem}
                                onChange={inputHandler} required />
                           
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Course:</label>
                           <input type="text" className="form-control"
                             name="course"
                                value={input.course}
                                onChange={inputHandler} required />
                            
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">System Number:</label>
                            <input type="text" className="form-control"
                             name="systemNumber"
                                value={input.systemNumber}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Login Time:</label>
                            <input type="text" className="form-control"
                             name="loginTime"
                                value={input.loginTime}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Logout Time:</label>
                            <input type="text" className="form-control"
                             name="logoutTime"
                                value={input.logoutTime}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Date:</label>
                            <input type="text" className="form-control"
                             name="date"
                                value={input.date}
                                onChange={inputHandler} required/>
                        </div>
                        
                        
                    </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                </div>
            </div>
        </div>

    
  )
}

export default Addcourse