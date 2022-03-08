import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { useNavigate } from "react-router"
import { useEffect,useState } from "react"
import axios from "axios"
export default function CourseRow({ index, item }) {
    const [prof,setProf] = useState()
    //uncomment if grabbing data works 
    //this is to grab the professor name to fill out table

    useEffect(() => {
        const fetchData = async () => {

            try {
                const prof = await axios.get(`https://course-rater-final.herokuapp.com/professors/${item.professor_id}`)
                console.log(prof.data[0])
                if (prof?.data) {
                    //  loop through prof until id matches item.professor_id will make more efficient later
                    //  once prof is found do the line below in loop
                    // setprof(prof [or whatever index is called])
                    setProf(prof.data[0])
                }

            } catch (err) {
                console.log({ err })
            }

        }

        fetchData()
    }, [])
    
    const navigate = useNavigate();
    
    const onDelete = async () => {
        alert("Be careful when deleting items")
    }
    const onEdit = () => {
        // edit(item)
        navigate('/edit')
    }
    return (
        <tr key={index} className="tablerow">
            <td>{item.course_id}</td>
            <td>{item.college_name} {item.course_name}</td>
            <td>{prof['first_name']} {prof['last_name']}</td>
            <td><AiFillDelete onClick={onDelete} /></td>
            <td><AiFillEdit onClick={onEdit} /></td>
        </tr>
    )
}