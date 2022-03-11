export default function AddStudent() {
    return (
        <form>
            <fieldset>
                <legend>Create a Student</legend>
                <label>First Name:</label><input type="text" id='first_name' required />
                <div></div>
                <label>Last Name:</label><input type="text" id='last_name' required />
                <div></div>
                
                <input type="submit" value="Submit" />
                <div></div>
                <a href="/">Go back to homepage</a>
            </fieldset>
        </form>
    )
}