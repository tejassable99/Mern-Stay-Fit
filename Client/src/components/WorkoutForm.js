import {useState} from "react"
import axios from "axios"
const WorkoutForm=()=>{
    const [title,setTitle]=useState()
    const[load,setLoad]=useState()
    const[reps,setReps]=useState()
    axios.defaults.withCredentials = true;

    const handleSubmit=()=>{
        try{
        axios.post("https://mern-stay-jfyvmvb0i-tejas-projects-c8790610.vercel.app/api/workouts",{title,load,reps})
        }
        catch(e){
            console.log(e)
        }
        
    }
return(
    <form className="create"onSubmit={handleSubmit}>
        <h3>Add a New Exercise</h3>
        <label>Exercise Title:</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>

        <label>Load(kg):</label>
        <input type="number" onChange={(e)=>setLoad(e.target.value)} value={load}/>

        
        <label>Reps:</label>
        <input type="number" onChange={(e)=>setReps(e.target.value)} value={reps}/>

    <button onSubmit={handleSubmit}>Add Workout</button>
    </form>
)
}
 export default WorkoutForm;