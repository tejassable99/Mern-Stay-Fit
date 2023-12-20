const express=require("express")
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}=require("../controllers/workoutController")
const router=express.Router()

// get all workouts
router.get("/",getWorkouts)

// get single workout
router.get("/:id",getWorkout)

// post new workout
router.post("/",createWorkout)

// delete a workout
router.delete("/:id",deleteWorkout)

// update a workout
router.put("/:id",updateWorkout)

module.exports=router;
