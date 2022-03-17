import axios from "axios"
import { useEffect, useState } from "react"

export default function EnrollmentRow({index, item, edit }) {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [courseName,setCourseName] = useState("")
    const [schoolName,setSchoolName] = useState("")
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentInfo= await axios.get(`https://course-rater-final.herokuapp.com/students/${item.student_id}`)
                if (studentInfo?.data) {
                    setFirstName(studentInfo.data[0].first_name)
                    setLastName(studentInfo.data[0].last_name)
                }
                const courseInfo = await axios.get(`https://course-rater-final.herokuapp.com/courses/courseSearch/${item.course_id}`)
                if (courseInfo?.data) {
                    setCourseName(courseInfo.data[0].course_name)
                    setSchoolName(courseInfo.data[0].college_name)
                }

            } catch (err) {
                console.log('error!')
                console.log({ err })
            }

        }

        fetchData()
    }, [])
    return (
        <tr key={index} className="tablerow">
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{schoolName + courseName}</td>
        </tr>
    )
}