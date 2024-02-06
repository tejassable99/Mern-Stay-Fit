import { useState,useEffect } from 'react';
import WorkoutDEtails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home=()=>{
    const [workouts,setWorkouts]=useState([]);
    useEffect(()=>{
        fetch("https://mern-stay-fit-git-main-tejas-projects-c8790610.vercel.app/api/workouts")
        .then((res)=>res.json())
        .then((res)=>{setWorkouts(res)})
       

          
    
      

    },[])
    return(
        <>
        <div className="Home" style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <div className="workouts" style={{width:"80%"}}>
     {workouts.length ? workouts.map((temp)=>
        <WorkoutDEtails temp={temp}/>
        
     ):null}
        </div >
        <div >
        <WorkoutForm/>
        </div>
   
        </div>
        </>
    )
}
export default Home;