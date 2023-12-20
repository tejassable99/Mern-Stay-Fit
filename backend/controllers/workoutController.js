const { default: mongoose } = require("mongoose");
const Workout=require("../models/workoutModel")

// get all workouts
const getWorkouts=async(req,res)=>{
    
    try{
    const workouts= await Workout.find().sort({createdAt:-1})
    res.send(workouts);
    }
    catch(error){
        res.send({error:error.message})
    }
}

// get a single workout
const getWorkout=async(req,res)=>{
    const {id}=req.params;
 if(!mongoose.Types.ObjectId.isValid(id)){
    return res.send({error:"No such workout"})
 }
    const workout=await Workout.findById(id);
    if(!workout){
        res.send({error:"No such workout"})
    }

        res.send(workout)
    
 

}

// create new workout
const createWorkout=async(req,res)=>{
    const {title,reps,load}=req.body;

    // add doc to db
    try{
        const workout= await Workout.create({title,reps,load});
        res.send(workout);
    }
    catch(error){
        res.send({error:error.message})
    }
}

// delete a workout

const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.send({error:"No such workout"})
    }
    const workout=await Workout.findByIdAndDelete({_id:id})
    if(!workout){
       return res.send({error:"No such workout"})
    }
    res.send(workout)
}

// update a workout
const updateWorkout=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.send({error:"No such workout"})
    }
    const workout=await Workout.findByIdAndUpdate({_id:id},{...req.body})
    if(!workout){
        return res.send({error:"No such workout"})
    }
    res.send(workout)
}

module.exports={
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
}