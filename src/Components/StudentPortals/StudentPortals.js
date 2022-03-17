export default function  StudentPortals() {
    const studentDict = [{'Corey Gallagher':'/CoreyGallagher'},{'Diego Saldonid':'/DiegoSaldonid'}];
    const deleteHandle = () => {
        alert("function will delete student!")
    };
    return (
        <div>
            <div>
                <h2>Student Portals</h2>
                {studentDict.map((studentName)=>  (<a href= {studentName[Object.keys(studentName)[0]]}> {Object.keys(studentName)[0]} <button>Update</button><button onClick={deleteHandle}>Delete</button><br></br> </a>))}
            </div>
        </div>
    );
  }
