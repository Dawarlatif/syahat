import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "../pages/signup.jsx";
import Login from "../pages/login.jsx";
import Dashboard from "../pages/dashboard.jsx";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
