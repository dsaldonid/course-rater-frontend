import { useState } from "react";
import axios from "axios"
export default function SimpleEnrollmentAdd() {
  const [studentID, setStudentID] = useState("");
  const [courseId, setCourseId] = useState("");

  const handleOnSubmit = async() => {
    try {
        const submit = await axios.post(`http://localhost:8080/enrollment/create`,{
          "student_id":studentID,
          "course_id":courseId
      })
      window.location.reload()
    } catch (err) {
      alert('Please input valid enrollment data')
      console.log({ err })
    }
}
  return (
    <form>
      <legend>Add an Enrollment</legend>
      <label>Enter student ID:
        <input
          type="number" 
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter course ID:
        <input
          type="number" 
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleOnSubmit}>Add Enrollment</button>
    </form>
  )
}