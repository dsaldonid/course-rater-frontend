// import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from "react"
import CourseRow from "../CourseRow/CourseRow"
export default function ViewCourses() {
    const [courses, setCourses] = useState()
    const [name, setName] = useState()

    useEffect(() => {
        const fetchData = async () => {

            try {
                const courses = await axios.get("https://course-rater-final.herokuapp.com/courses/list")
                if (courses?.data) {
                    setCourses(courses.data)
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
                <caption>Available Courses Winter 2022</caption>
                <thead>
                    <tr className="header">
                        <th>Id</th>
                        <th>Course Name</th>
                        <th>Professor Name</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                {/* Loop through courses and pass each object to CourseRow component */}
                <tbody>
                    {courses ? courses.map((item, index) => (
                        <CourseRow key={index} item={item} index={index} />
                    )) : <div />}
                </tbody>
            </table>
            
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}