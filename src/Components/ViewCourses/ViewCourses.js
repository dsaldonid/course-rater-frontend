// import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from "react"
import CourseRow from "../CourseRow/CourseRow"
import SimpleCourseAdd from "../simpleCourseAdd/SimpleCourseAdd"

export default function ViewCourses({ edit }) {
    const [courses, setCourses] = useState()
    const [searches, setSearches] = useState()
    const [name, setName] = useState()
    // newly added states
    const [options,setOptions] = useState([])
    const [value, setValue] = useState("CSE 340: Databases")
    const [addCourse, setAddCourse] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [courseExist, setCourseExist] = useState(false)
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const course = await axios.get("https://course-rater-final.herokuapp.com/courses/list")
                if (course?.data) {
                    setCourses(course.data)
                    let d = courses.map((val)=>val.college_name+ " " + val.course_name)
                    setOptions(d)
                }

            } catch (err) {
                console.log({ err })
            }

        }

        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const filter = await axios.get(`https://course-rater-final.herokuapp.com/courses/filter/${searchTerm}`)
                if (filter?.data) {
                    setSearches(filter.data)
                    let d = searches.map((val)=>val.college_name+ " " + val.course_name)
                    setOptions(d)
                }

            } catch (err) {
                console.log({ err })
            }

        }

        fetchData()
    }, [searchTerm])

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
                        <CourseRow key={index} item={item} index={index} edit={edit} />
                    )) : <div />}
                </tbody>
            </table>
            <br/>
            {addCourse ?
                <div>
                    <form>
                        <fieldset>
                            <legend>Search for a Course</legend>
                            <label>Course Name: </label><input type="text" id='course_name' required onChange={(event)=>(setSearchTerm(event.target.value))}/>
                            {/* {courseExist?<div style={{fontSize:12,color:'red'}} >Course may already exist!</div >:null} */}
                            <div></div>
                            <label>Course Number: </label><input type="text" id='course_name' required onChange={(event)=>(setSearchTerm(event.target.value))}/>
                            <div></div>
                        </fieldset>
                    </form>
                    <h3>Similar course to your typed course</h3>
                    <div>{options.map((val)=>{return(<p>{val}</p>)})}</div>
                </div>
                : <div />}
            <h2>Want to add a course?</h2>
            <h4>Input course information below</h4>
            <SimpleCourseAdd/>
            
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}