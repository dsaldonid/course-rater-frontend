import { useEffect,useState } from "react"
import axios from "axios"
export default function ProfessorRow({ index, item }) {
    const [course, setCourse] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const c= await axios.get(`https://course-rater-final.herokuapp.com/courses/${item.professor_id}`)
                if (c?.data) {
                    //  loop through prof until id matches item.professor_id will make more efficient later
                    //  once prof is found do the line below in loop
                    // setprof(prof [or whatever index is called])
                    setCourse(c.data[0].course_name)
                }

            } catch (err) {
                console.log('error!')
                console.log({ err })
            }

        }

        fetchData()
    }, [])

    return (
        <tr key={index} className="tablerow">
            <td>{item.professor_id}</td>
            <td>{item.first_name} </td>
            <td>{item.last_name}</td>
            <td>{course}</td>
        </tr>
    )
}