import EnrollmentRow from '../EnrollmentRow/EnrollmentRow';
import { useEffect, useState } from "react"
import axios from "axios"
import SimpleEnrollmentAdd from '../SimpleEnrollmentAdd/SimpleEnrollmentAd';

export default function Enrollment({ edit }) {
    const [enrollments, setEnrollments] = useState({})

    useEffect(() => {
        const fetchData = async () => {

            try {
                const enrollments = await axios.get("https://course-rater-final.herokuapp.com/enrollment/list")
                if (enrollments?.data) {
                    setEnrollments(enrollments.data)
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
                <caption>View Student Enrollment!</caption>
                <thead>
                    <tr className="header">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {enrollments.length >0?enrollments.map((item,index) => (
                        <EnrollmentRow key={index}  item={item} index={index} edit={edit}/>
                    )):<div/>}
                </tbody>
            </table>
            <br/>
            <SimpleEnrollmentAdd/>
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}