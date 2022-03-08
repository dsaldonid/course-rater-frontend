export default function AddReview() {
    return (

    <form>
        <fieldset>
            <legend>Add a Review</legend>
                <label>Student First Name:</label><input type="text" id='first_name' required/> 
                <label>Student Last Name:</label><input type="text" id='last_name' required/> 
                <label>Course Name:</label><input type="text" id='course_name' required/> 
                <label>Rating:</label><input type="number"id='course-rating' required/>
                <label>Please Elaborate:</label><input type="text"id='course-text' required/>
                <input type="submit" value="Submit" />
      </fieldset>
      <a href="/">Go back to homepage</a>
    </form>
    )
}