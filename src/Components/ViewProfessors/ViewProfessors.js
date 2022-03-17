// import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from "react"
import ProfessorRow from "../ProfessorRow/ProfessorRow"
import SimpleProfessorAdd from "../SimpleProfessorAdd/SimpleProfessorAdd"

export default function ViewProfessors({ edit }) {
    const [professors, setProfessors] = useState()
    const [name, setName] = useState()
    // newly added states
    const [options,setOptions] = useState([])
    const [value, setValue] = useState("CSE 340: Databases")
    const [addCourse, setAddCourse] = useState(true)
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const professors = await axios.get("https://course-rater-final.herokuapp.com/professors/list")
                console.log(professors.data)
                if (professors?.data) {
                    setProfessors(professors.data)
                }

            } catch (err) {
                console.log({ err })
            }

        }

        fetchData()
    }, [])

    
    return (
        <div>
            <table>
                <caption>Available professors Winter 2022</caption>
                <thead>
                    <tr className="header">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course Name</th>
                    </tr>
                </thead>
                {/* Loop through professors and pass each object to CourseRow component */}
                <tbody>
                    {professors ? professors.map((item, index) => (
                        <ProfessorRow key={index} item={item} index={index} />
                    )) : <div />}
                </tbody>
            </table>
            <br/>
            <h2>Want to add a professor?</h2>
            <h4>Input professor information below</h4>
            <SimpleProfessorAdd/>
            
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}