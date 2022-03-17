import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import Login from '../src/Components/Login/Login';
import AddCourse from './Components/AddCourse/AddCourse';
import AddReview from './Components/AddReview/AddReview';
import AddProfessor from './Components/AddProfessor/AddProfessor';
import AddStudent from './Components/AddStudent/AddStudent';
import Reviews from './Components/Reviews/Reviews';
import Enrollment from './Components/Enrollment/Enrollment';
import { useState } from 'react';
import EditEnrollment from './Components/EditEnrollment/EditEnrollment';
import EditReview from './Components/EditReview/EditReview';
import ViewCourses from './Components/ViewCourses/ViewCourses';
import EditCourses from './Components/EditCourses/EditCourses';
import ViewProfessors from './Components/ViewProfessors/ViewProfessors';
import ViewStudents from './Components/ViewStudents/ViewStudents';
import ViewReviews from './Components/ViewReviews/ViewReviews';
function App() {
  const [enrollmentToEdit,setEnrollmentToEdit] = useState()
  const [reviewToEdit,setReviewToEdit] = useState()
  const [courseToEdit,setCourseToEdit] = useState()

  return (
    <div>
      <BrowserRouter> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='courses/edit' element={<EditCourses course={courseToEdit}/>}/>
            <Route path='/edit' element={<EditEnrollment enrollment={enrollmentToEdit}/>}/>
            <Route path='/editReview' element={<EditReview review={reviewToEdit}/>}/>
            {/* <Route path='/viewReviews' element={<Reviews edit={setReviewToEdit}/>} /> */}
            <Route path='/viewCourses' element={<ViewCourses edit={setCourseToEdit}/>} />
            <Route path='/viewProfessors' element={<ViewProfessors/>} />
            <Route path='/viewStudents' element={<ViewStudents/>} />
            <Route path='/viewReviews' element={<ViewReviews/>} />
            <Route path='/enrollment' element={<Enrollment edit={setEnrollmentToEdit}/>} />
            <Route path='/course' element={<AddCourse/>} />
            <Route path='/review' element={<AddReview/>} />
            <Route path='/addStudent' element={<AddStudent/>} />
            <Route path='/addProfessor' element={<AddProfessor/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
