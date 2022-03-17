export default function ReviewRow({index, item }) {
    let stars = ""
    for (let i = 0; i < item.rating; i++) {
        stars+= "⭐";
      }
    return (
        <tr key={index} className="tablerow">
            <td>{item.review_id}</td>
            <td>{item.course_id}</td>
            <td>{item.student_id}</td>
            <td>{stars}</td>
            <td>{item.text_review}</td>
        </tr>
    )
}