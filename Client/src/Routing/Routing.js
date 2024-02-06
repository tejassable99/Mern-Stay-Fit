import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom"
const Routing=()=>{
    return(
        <>
        <div className="pages">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </div>
        
        </>
    )
}
export default Routing;