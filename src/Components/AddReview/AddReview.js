import { useState } from "react";
import axios from "axios"
export default function AddReview() {
    const [studentId, setStudentId] = useState("");
    const [courseId, setCourseId] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    const handleOnSubmit = async () => {
        try {
            const submit = await axios.post(`https://course-rater-final.herokuapp.com/reviews/create`, {
                "student_id": studentId,
                "course_id": courseId,
                "rating":rating,
                "text_review":review
            })
            window.location.reload()
        } catch (err) {
            alert('Please input valid review data')
            console.log({ err })
        }
    }

    return (
        <form>
      <label>Enter Student Id:
        <input
          type="number" 
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter Course Id:
        <input
          type="number" 
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter Rating:
        <input
          type="number" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <br/>
      <label>Enter Review ({'>'}255 characters):
        <input
          type="text" 
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleOnSubmit}>Add Review</button>
    </form>
    )
}