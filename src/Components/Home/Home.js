import './Home.css';
// import { useEffect } from 'react';
// import axios from "axios"
export default function  Home() {
    return (
        <div className="container">
            <h1>Pages</h1>
            <div></div>
            <h3>Courses is the only page that dynamic reads from database, still working on create operation</h3>
            <a href="/viewCourses">View Courses</a>
            <div></div>
            <a href="/courses">Add Course</a>
            <div></div>
            <a href="/addProfessor">Add Professor</a>
            <div></div>
            <a href="/addStudent">Add Student</a>
            <div></div>
            <a href="/review">Add Review</a>
            <div></div>
            <a href="/enrollment">View Student Enrollment</a>
            <div></div>
            <a href="/viewReviews">View Student Reviews</a>
            {/* <div></div>
            <a href="/student">Student Portals</a>
            <div></div>
            <a href="/professor">Professor Portals</a> */}
        </div>
    );
  }
