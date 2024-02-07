import axios from "axios";

const WorkoutDEtails=({temp})=>{
    

axios.defaults.withCredentials = true;

    const handleDelete=()=>{
        try{
        axios.delete(`https://mern-stay-fit-git-main-tejas-projects-c8790610.vercel.app/api/workouts/${temp._id}`)
        }
        catch(e){
            console.log(e)
        }
        window.location.reload();
    }


    return(
        <div className="workout-details">
           <h4>{temp.title}</h4>
      <p>Load (lbs): {temp.load} </p>
      <p>Reps: {temp.reps}</p>
      <p>{temp.createdAt}</p>
      <span className="material-symbols-outlined" onClick={handleDelete} >
        Delete
      </span>

    
        
        </div>
    )
}
export default WorkoutDEtails;