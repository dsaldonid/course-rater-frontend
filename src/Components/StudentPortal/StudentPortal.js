import CourseCard from '../CourseCard/CourseCard'
import ReviewCard from '../ReviewCard/ReviewCard'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './StudentPortal.css'
import { useState } from 'react';
export default function StudentPortal({studentName}) {
    let courses = ['CSE 340: Databases','CSE 271: Assembly', 'CSE 325: Algorithms']
    let reviews = [{'name':'CSE 340: Databases','review':'With great data comes great responsibility'},
    {'name':'CSE 271: Assembly','review':"Don't forget memort offsets"},
    {'name':'CSE 325: Algorithms','review':'Great for the internship grind!'}]
    const options = [
        'CSE 340: Databases', 'CSE 271: Assembly', 'CSE 325: Algorithms'
      ];
    
    const [value,setValue] = useState("CSE 340: Databases")
    const handleChange = (event) =>{
        setValue(event.target.value)
    }
    const courseHandle = () => {
        alert('you already have this course!')
    }
    return (
        <div>
            <h1>Hello, {studentName}</h1>
            <div>
                <h2>Courses</h2>
                {courses.map((name)=> (<CourseCard name= {name} quarter={'Winter 2022'}/>))}
                <Dropdown className = "drop" options={options} onChange={handleChange} value={value} placeholder="Select a class" />
                <button onClick={courseHandle}>Add this course</button>
            </div>
            <div>
                <h2>Reviews</h2>
                {reviews.map((review)=> (<ReviewCard course={review}/>))}
            </div>
            <button><a href="/review">Add a review</a></button>
            <div></div>
            <a href="/">Go back to homepage</a>
        </div>
    )
}