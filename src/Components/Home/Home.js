import './Home.css';
// import { useEffect } from 'react';
// import axios from "axios"
export default function  Home() {
    return (
        <div className="container">
            <h1>Pages</h1>
            <div></div>
            <a href="/viewCourses">View Courses</a>
            <div></div>
            <a href="/viewProfessors">View Professors</a>
            <div></div>
            <a href="/viewStudents">View Students</a>
            <div></div>
            <a href="/viewReviews">View Reviews</a>
            <div></div>
            <a href="/enrollment">View Student Enrollment</a>
        </div>
    );
  }
