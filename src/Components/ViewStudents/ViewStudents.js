// import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from "react"
import StudentRow from "../StudentRow/StudentRow"
import SimpleStudentAdd from "../SimpleStudentAdd/SimpleStudentAdd"

export default function ViewStudents({ edit }) {
    const [students, setStudents] = useState()

    useEffect(() => {
        const fetchData = async () => {

            try {
                const students = await axios.get("https://course-rater-final.herokuapp.com/students/list")
                console.log(students.data)
                if (students?.data) {
                    setStudents(students.data)
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
                <caption>Winter 2022 Students</caption>
                <thead>
                    <tr className="header">
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                {/* Loop through students and pass each object to CourseRow component */}
                <tbody>
                    {students ? students.map((item, index) => (
                        <StudentRow key={index} item={item} index={index} />
                    )) : <div />}
                </tbody>
            </table>
            <br/>
            <h2>Want to add a student?</h2>
            <h4>Input student information below</h4>
            <SimpleStudentAdd/>
            
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}