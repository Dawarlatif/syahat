
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Signup from "../pages/signup.jsx"

function AppRoutes() {
   return (
      <Router>
         <Routes>
            <Route path="/sign-up" element={<Signup />} />
      <Route path="/" element={''}/>

         </Routes>
      </Router>)
}
export default AppRoutes
