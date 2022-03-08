import { useState } from "react";

import { useNavigate } from 'react-router';

export default function EditReview({ review }) {
    console.log(review)
    const navigate = useNavigate();
    const [sname, setSName] = useState(review.student)
    const [pname, setPname] = useState(review.prof)
    const [rating, setRating] = useState(review.rating)
    const [course, setCourse] = useState(review.course)
    const [text, setText] = useState(review.review)

    const editExercises = () =>{
        alert("Review Edited")
        navigate('/')
    }
    return (
        <div>
            <table>
                <caption>Edit an Review!</caption>
                <tbody>
                    <tr className="header">
                        <th>Student Name</th>
                        <th>Professor Name</th>
                        <th>Course</th>
                        <th>Rating</th>
                        <th>Review</th>

                    </tr>
                    <tr className="tablerow">
                        <td>
                            <input 
                            name="sname" 
                            id="sname" 
                            type="text" 
                            value={sname}
                            onChange={e=>setSName(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="pname" 
                            id="pname" 
                            type="text" 
                            value={pname}
                            onChange={e=>setPname(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="course" 
                            id="course" 
                            type="text" 
                            value={course}
                            onChange={e=>setCourse(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="rating" 
                            id="rating" 
                            type="text" 
                            value={rating}
                            onChange={e=>setRating(e.target.value)}/>
                        </td>
                        <td>
                            <input 
                            name="text" 
                            id="text" 
                            type="text" 
                            value={text}
                            onChange={e=>setText(e.target.value)}/>
                        </td>
                        
                        
                    </tr>
                </tbody>
            </table>
            <br />
            <div className='box'>
                <button onClick={editExercises}>Save</button>
                <br/>
                <a href="/">Go to the Home Page</a>
            </div>
        </div>
    )
}