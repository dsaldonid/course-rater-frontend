import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import { useNavigate } from "react-router"
export default function ReviewRow({index, item, edit }) {
    const navigate = useNavigate();
    const onDelete = async() => {
        alert("Be careful when deleting items")
    }
    const onEdit = () => {
        alert("Going to edit page...")
        edit(item)
        navigate('/editReview')
    }
    return (
        <tr key={index} className="tablerow">
            <td>{item.student}</td>
            <td>{item.prof}</td>
            <td>{item.course}</td>
            <td>{item.rating}</td>
            <td>{item.review}</td>
            <td><AiFillDelete onClick={onDelete}/></td>
            <td><AiFillEdit onClick={onEdit}/></td>

        </tr>
    )
}