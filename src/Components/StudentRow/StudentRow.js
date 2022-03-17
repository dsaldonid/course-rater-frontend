import { useEffect,useState } from "react"
import axios from "axios"
export default function StudentRow({ index, item }) {
    return (
        <tr key={index} className="tablerow">
            <td>{item.student_id}</td>
            <td>{item.first_name} </td>
            <td>{item.last_name}</td>
        </tr>
    )
}