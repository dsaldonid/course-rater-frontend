import { useState } from "react";

import { useNavigate } from 'react-router';

export default function EditEnrollment({ enrollment }) {
    const navigate = useNavigate();
    const [fname, setfname] = useState(enrollment.first)
    const [mname, setmname] = useState(enrollment.middle)
    const [lname, setlname] = useState(enrollment.last)
    const [courses, setCourses] = useState(enrollment.courses)
    console.log(mname)
    const editExercises = () =>{
        alert("Enrollment Edited")
        navigate('/')
    }
    return (
        <div>
            <table>
                <caption>Edit an enrollment!</caption>
                <tbody>
                    <tr className="header">
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Course</th>

                    </tr>
                    <tr className="tablerow">
                        <td>
                            <input 
                            name="fname" 
                            id="fname" 
                            type="text" 
                            value={fname}
                            onChange={e=>setfname(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="mname" 
                            id="mname" 
                            type="text" 
                            value={mname}
                            onChange={e=>setmname(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="lname" 
                            id="lname" 
                            type="text" 
                            value={lname}
                            onChange={e=>setlname(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="courses" 
                            id="courses" 
                            type="text" 
                            value={courses}
                            onChange={e=>setCourses(e.target.value)}/>
                        </td>
                        
                        
                    </tr>
                </tbody>
            </table>
            <br />
            <div className='box'>
                <button onClick={editExercises}>Save</button>
                <br/>
                <a href="/">Go to the Home Page</a>
            </div>
        </div>
    )
}