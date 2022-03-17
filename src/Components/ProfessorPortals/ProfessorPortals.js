export default function  ProfessorPortals() {
    const professorDict = [{'Danielle Safonte':'/DanielleSafonte'},{'Michael Curry':'/MichaelCurry'}]
    const deleteHandle = () => {
        alert("function will delete professor!")
    }
    return (
        <div>
            <div>
                <h2>Professor Portals</h2>
                {professorDict.map((professorName)=>  (<a href= {professorName[Object.keys(professorName)[0]]}> {Object.keys(professorName)[0]}  <button>Update</button><button onClick={deleteHandle}>Delete</button> <br></br></a>))}
            </div>
        </div>
    );
  }
