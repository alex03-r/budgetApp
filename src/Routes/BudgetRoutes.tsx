import { Routes, Route, Navigate } from "react-router-dom";
// import App from "../App";
import { Home } from "../Pages/Home";
import { Budget } from "../Pages/Budget";

export function BudgetRoutes() {

    
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />} ></Route>
        <Route path="budget/:id" element={<Budget />} ></Route>
        <Route path="/*" element={<Navigate to='/home' />}></Route>
      </Routes>
    </div>
  )



}
