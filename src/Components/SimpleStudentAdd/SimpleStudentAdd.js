import { useState } from "react";
import axios from "axios"
export default function SimpleStudentAdd() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnSubmit = async() => {
    try {
        const submit = await axios.post(`https://course-rater-final.herokuapp.com/students/create`,{
          "first_name":firstName,
          "last_name":lastName
      })
      window.location.reload()
    } catch (err) {
      alert('Please input valid professor data')
      console.log({ err })
    }
}
  return (
    <form>
      <label>Enter first name:
        <input
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter last name:
        <input
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleOnSubmit}>Add Student</button>
    </form>
  )
}