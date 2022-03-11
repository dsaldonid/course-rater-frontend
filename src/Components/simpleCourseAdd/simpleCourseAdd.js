import { useState } from "react";
import axios from "axios"
export default function MyForm() {
  const [courseName, setcourseName] = useState("");
  const [collegeName, setcollegeName] = useState("");
  const [courseLevel, setcourseLevel] = useState(0);
  const [courseTerm, setcourseTerm] = useState(0);
  const [professorId, setprofessorId] = useState(0);

  const handleOnSubmit = async() => {
    try {
        const submit = await axios.post(`https://course-rater-final.herokuapp.com/courses/create`)

    } catch (err) {
        console.log({ err })
    }
}
  return (
    <form>
      <label>Enter course name (ex:340: Databases):
        <input
          type="text" 
          value={courseName}
          onChange={(e) => setcourseName(e.target.value)}
        />
      </label>
      <label>Enter college name (ex:CSE):
        <input
          type="text" 
          value={collegeName}
          onChange={(e) => setcollegeName(e.target.value)}
        />
      </label>
      <label>Enter course level (only enter 1 or 0):
        <input
          type="text" 
          value={courseLevel}
          onChange={(e) => setcourseLevel(e.target.value)}
        />
      </label>
      <label>Enter course term (only 1,2,3,4):
        <input
          type="number" 
          value={courseTerm}
          onChange={(e) => setcourseTerm(e.target.value)}
        />
      </label>
      <label>Enter professor id (check professor table):
        <input
          type="number" 
          value={professorId}
          onChange={(e) => setprofessorId(e.target.value)}
        />
      </label>
    </form>
  )
}