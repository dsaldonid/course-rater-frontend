// import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import axios from "axios"
import { useEffect, useState } from "react"
import ReviewRow from "../ReviewRow/ReviewRow"
import AddReview from "../AddReview/AddReview"
export default function ViewReviews({ edit }) {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        const fetchData = async () => {
            
            try {
                const review = await axios.get("https://course-rater-final.herokuapp.com/reviews/list")
                console.log(review.data)
                if (review?.data) {
                    setReviews(review.data)
                }

            } catch (err) {
                console.log("Error!")
                console.log({ err })
            }

        }

        fetchData()
    }, [])

    
    return (
        <div>
            <table>
                <caption>Winter 2022 Students</caption>
                <thead>
                    <tr className="header">
                        <th>Id</th>
                        <th>Course Id</th>
                        <th>Student Id</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                {/* Loop through students and pass each object to CourseRow component */}
                <tbody>
                    {reviews ? reviews.map((item, index) => (
                        <ReviewRow key={index} item={item} index={index} />
                    )) : <div />}
                </tbody>
            </table>
            <br/>
            <h2>Want to add a student?</h2>
            <h4>Input student information below</h4>
            <AddReview/>
            
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}