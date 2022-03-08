import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import './ProfessorPortal.css'
import { useState } from 'react';

export default function AddCourse() {
    const options = [
        'CSE 340: Databases', 'CSE 271: Assembly', 'CSE 325: Algorithms'
    ];

    const [value, setValue] = useState("CSE 340: Databases")
    const [addCourse, setAddCourse] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [courseExist, setCourseExist] = useState(false)
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const warning = ()=>{
        alert("Check list below for already existing courses!")
    }
    return (
        <div>
            <h1>Does your course exist? Check the list!</h1>
            <h3>Winter 2022 courses:</h3>
            <Dropdown className="drop" options={options} onChange={handleChange} value={value} placeholder="Select a class" />
            <form>
                <label>Yes:</label>
                <input type="radio" name="addCourse" value={false} onChange={() => setAddCourse(false)}></input>
                <label>No:</label>
                <input type="radio" name="addCourse" value={true} onChange={() => setAddCourse(true)}></input>


            </form>
            <h3>This section will also search for the course being entered below:</h3>
            {addCourse ?
                <div>
                    <form>
                        <fieldset>
                            <legend>Add a Course</legend>
                            <label>Course Name: </label><input type="text" id='course_name' required onChange={(event)=>(setSearchTerm(event.target.value))}/>
                            {/* {courseExist?<div style={{fontSize:12,color:'red'}} >Course may already exist!</div >:null} */}
                            <div></div>
                            <label>Abbreviation: </label><input type="text" id='course_name' required onChange={(event)=>(setSearchTerm(event.target.value))}/>
                            <div></div>
                            <label>Quarter: </label><input type="text" id='course_name' required />
                            <div></div>
                            <input type="submit" value="Submit" onClick={warning}/>
                            <div></div>
                        </fieldset>
                    </form>
                    <h3>Similar course to your typed course</h3>
                    <div>{options.filter((val)=>{
                        if(searchTerm ===""){
                            // setCourseExist(false)
                            return val
                        }else if (val.toLowerCase().includes(searchTerm.toLowerCase())){
                            // setCourseExist(true)
                            return val
                        }
                    }).map((val,key)=>{
                        if(val){
                            console.log(val)
                        }
                        return(
                            <p>{val}</p>
                        )
                    })}</div>
                </div>
                : <div />}
            <a href="/">Go back to homepage</a>
        </div>
    )
}