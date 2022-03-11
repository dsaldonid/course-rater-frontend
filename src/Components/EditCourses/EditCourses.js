import { useState } from "react";
import { useNavigate } from 'react-router';
import axios from "axios"
export default function EditCourses({ course }) {
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState(course.course_name)
    const [collegeName, setCollegeName] = useState(course.college_name)
    const [courseLevel, setCourseLevel] = useState(course.course_level)
    const [term, setTerm] = useState(course.term)
    const [professorId, setProfessorId] = useState(course.professor_id)
    const [courseId, setCourseId] = useState(course.course_id)
    console.log(course)
    // "/update/:courseId/:course_name/:college_name/:course_level/:term/:professor_id"

    const editExercises = async () => {
        try {
            const course = await axios.patch(`https://course-rater-final.herokuapp.com/courses/${courseId}/${courseName}/${collegeName}/${courseLevel}/${term}/${professorId}`)
            // navigate("https://course-rater-demo.herokuapp.com/viewCourses")
            navigate("/")
            // window.location.reload()
        } catch (err) {
            console.log({ err })
        }
    }
    return (
        <div>
            <table>
                <caption>Edit an Course!</caption>
                <tbody>
                    <tr className="header">
                        <th>Course Name</th>
                        <th>College Name</th>
                        <th>Course Level</th>
                        <th>Term</th>
                        <th>Professor Id</th>

                    </tr>
                    <tr className="tablerow">
                        <td>
                            <input
                                name="coursename"
                                id="coursename"
                                type="text"
                                value={courseName}
                                onChange={e => setCourseName(e.target.value)} />
                        </td>
                        <td>
                            <input
                                name="collegeName"
                                id="collegeName"
                                type="text"
                                value={collegeName}
                                onChange={e => setCollegeName(e.target.value)} />
                        </td>
                        <td>
                            <input
                                name="courseLevel"
                                id="courseLevel"
                                type="text"
                                value={courseLevel}
                                onChange={e => setCourseLevel(e.target.value)} />
                        </td>
                        <td>
                            <input
                                name="term"
                                id="term"
                                type="text"
                                value={term}
                                onChange={e => setTerm(e.target.value)} />
                        </td>
                        <td>
                            <input
                                name="professorId"
                                id="professorId"
                                type="text"
                                value={professorId}
                                onChange={e => setProfessorId(e.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div className='box'>
                <button onClick={editExercises}>Save</button>
                <br />
                <a href="/">Go to the Home Page</a>
            </div>
        </div>
    )
}