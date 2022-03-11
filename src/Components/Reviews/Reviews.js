import ReviewRow from '../ReviewRow/ReviewRow';

export default function Reviews({ edit }) {
    const professorDict = [{'student':'Corey Gallagher','prof':'Danielle Safonte','course':'CSE 340 : Intro to Databases','rating':'⭐⭐⭐⭐⭐','review':'With great data comes great responsibility'},
    {'student':'Diego Saldonid','prof':'Maher Elshakankiri ','course':'CSE 325 : Algorithms','rating':'⭐⭐⭐⭐⭐','review':'Great for the internship grind!'}]
    return (
        <div>
            <table>
                <caption>View Student Reviews!</caption>
                <thead>
                    <tr className="header">
                        <th>Student Name</th>
                        <th>Professor Name</th>
                        <th>Course</th>
                        <th>Rating</th>
                        <th>Review</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {professorDict.length >0?professorDict.map((item,index) => (
                        <ReviewRow key={index}  item={item} index={index} edit={edit}/>
                    )):<div/>}
                </tbody>
            </table>
            <br/>
            <div className='box'>
                <a href="/">Back to home page</a>
            </div>
        </div>
    )
}