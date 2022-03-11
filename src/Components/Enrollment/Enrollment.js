import EnrollmentRow from '../EnrollmentRow/EnrollmentRow';
import {AiFillDelete,AiFillEdit} from "react-icons/ai"
export default function Enrollment({ edit }) {
    
    const studentDict = [{'first':'Corey','middle':'J','last':'Gallagher','courses':'CSE 340: Datebases, CSE271: Assembly'},
    {'first':'Diego','middle':'A','last':'Saldonid','courses':'CSE 340: Datebases, CSE325: Algorithms'}];
    return (
        <div>
            <table>
                <caption>View Student Enrollment!</caption>
                <thead>
                    <tr className="header">
                        <th>First Name</th>
                        <th>Middle Initial</th>
                        <th>Last Name</th>
                        <th>Courses</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {studentDict.length >0?studentDict.map((item,index) => (
                        <EnrollmentRow key={index}  item={item} index={index} edit={edit}/>
                    )):<div/>}
                </tbody>
            </table>
            <br/>
            <table>
                <caption>Course Ids:</caption>
                <thead>
                    <tr className="header">
                        <th>Course Name</th>
                        <th>Id</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CSE 340 Databases</td>
                        <td>1</td>
                        <td><AiFillDelete /></td>
                        <td><AiFillEdit/></td>
                    </tr>
                    {/* {studentDict.length >0?studentDict.map((item,index) => (
                        <EnrollmentRow key={index}  item={item} index={index}/>
                    )):<div/>} */}
                </tbody>
            </table>
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}