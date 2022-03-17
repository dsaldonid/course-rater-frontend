import { useState } from "react";
import axios from "axios"
export default function SimpleCourseAdd() {
  const [courseName, setcourseName] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [courseLevel, setcourseLevel] = useState(0);
  const [courseTerm, setcourseTerm] = useState(0);
  const [professorId, setprofessorId] = useState(0);

  const handleOnSubmit = async() => {
    try {
        const submit = await axios.post(`https://course-rater-final.herokuapp.com/courses/create`,{
          "course_name":courseName,
          "college_name":collegeName,
          "course_level":courseLevel,
          "term":courseTerm,
          "professor_id":professorId
      })
      window.location.reload()
    } catch (err) {
      alert('Please input valid course data')
      console.log({ err })
    }
}
  return (
    <form>
      <legend>Create a Course</legend>
      <label>Enter course name (ex:340: Databases):
        <input
          type="text" 
          value={courseName}
          onChange={(e) => setcourseName(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter college name (ex:CSE):
        <input
          type="text" 
          value={collegeName}
          onChange={(e) => setcollegeName(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter course level (only enter 1 or 0):
        <input
          type="text" 
          value={courseLevel}
          onChange={(e) => setcourseLevel(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter course term (only 1,2,3,4):
        <input
          type="number" 
          value={courseTerm}
          onChange={(e) => setcourseTerm(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter professor id (check professor table):
        <input
          type="number" 
          value={professorId}
          onChange={(e) => setprofessorId(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleOnSubmit}>Add Course</button>
    </form>
  )
}