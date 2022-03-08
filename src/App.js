import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import StudentPortal from '../src/Components/StudentPortal/StudentPortal';
import ProfessorPortal from '../src/Components/ProfessorPortal/ProfessorPortal';
import ProfessorPortals from './Components/ProfessorPortals/ProfessorPortals';
import StudentPortals from './Components/StudentPortals/StudentPortals';
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
function App() {
  const [enrollmentToEdit,setEnrollmentToEdit] = useState()
  const [reviewToEdit,setReviewToEdit] = useState()

  return (
    <div>
      <BrowserRouter> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/student' element={<StudentPortals/>} />
            <Route path='/DiegoSaldonid' element={<StudentPortal studentName="Diego Saldonid"/>} />
            <Route path='/CoreyGallagher' element={<StudentPortal studentName="Corey Gallagher"/>} />
            <Route path='/DanielleSafonte' element={<ProfessorPortal professorName="Danielle Safonte"/>} />
            <Route path='/MichaelCurry' element={<ProfessorPortal professorName="Michael Curry"/>} />
            <Route path='/professor' element={<ProfessorPortals/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/edit' element={<EditEnrollment enrollment={enrollmentToEdit}/>}/>
            <Route path='/editReview' element={<EditReview review={reviewToEdit}/>}/>
            <Route path='/viewReviews' element={<Reviews edit={setReviewToEdit}/>} />
            <Route path='/viewCourses' element={<ViewCourses/>} />
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
