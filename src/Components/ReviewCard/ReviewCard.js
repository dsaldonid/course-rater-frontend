export default function ReviewCard({course}) {
    return (
        <div>
            <h1>{course.name}</h1>
            <h1>Rating stars: ⭐⭐⭐⭐⭐</h1>
            <p>
                {course.review}
            </p>
            <div></div>
            <button>Update</button>
            <div></div>
            <button>Delete</button>
        </div>
    )
}