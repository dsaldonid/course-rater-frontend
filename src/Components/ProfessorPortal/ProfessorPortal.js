import ReviewCard from '../ReviewCard/ReviewCard'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './ProfessorPortal.css'
import { useState } from 'react';

export default function ProfessorPortal({professorName}) {
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
    const defaultOption = options[0];
    return (
        <div>
            <h1>Hello, {professorName}</h1>
            <div>
                <h2>Courses</h2>
                <h3>This section holds all of the professors taught courses</h3>
                <Dropdown className = "drop" options={options} onChange={handleChange} value={value} placeholder="Select a class" />
                <button>Add this course</button>
            </div>
            <div>
                <h2>Reviews</h2>
                {reviews.map((review)=> (<ReviewCard course={review}/>))}
            </div>
            <div></div>
            <a href="/">Go back to homepage</a>
        </div>
    )
}