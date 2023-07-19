import { Routes, Route, Navigate  } from "react-router-dom";
import App from "../App";
import { RecentBuget } from "../Pages/RecentBuget";

export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="home" element={<App />} ></Route>
            <Route path="budget/:id" element={<RecentBuget />} ></Route>
            <Route path="/*"  element={ <Navigate to='/home' /> }></Route>
        </Routes>
    </div>
  )
}
