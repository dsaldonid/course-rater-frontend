import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import { useNavigate } from "react-router"
export default function EnrollmentRow({index, item, edit }) {
    const navigate = useNavigate();
    const onDelete = async() => {
        alert("Be careful when deleting items")
    }
    const onEdit = () => {
        edit(item)
        navigate('/edit')
    }
    return (
        <tr key={index} className="tablerow">
            <td>{item.first}</td>
            <td>{item.middle}</td>
            <td>{item.last}</td>
            <td>{item.courses}</td>
            <td><AiFillDelete onClick={onDelete}/></td>
            <td><AiFillEdit onClick={onEdit}/></td>

        </tr>
    )
}