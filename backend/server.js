require("dotenv").config();
const express=require('express')
const workoutRoutes=require("./routes/workouts");
const { default: mongoose } = require("mongoose");

// express app
const app=express();

//middleware
app.use(express.json())
const cors=require("cors");
app.use(cors({ origin: 'https://mern-stay-fit-eglw-git-main-tejas-projects-c8790610.vercel.app',
               
               credentials: true }));


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


// route
app.use("/api/workouts/",workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
// listen for request
app.listen(process.env.PORT,()=>{
    console.log("connected to mongodb & listening on port",process.env.PORT)
})    
    
})
.catch((error)=>console.log(error))
