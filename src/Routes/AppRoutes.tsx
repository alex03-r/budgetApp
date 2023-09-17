
import { Header } from "../Components/Header";
import { Register } from "../Pages/Register";

import { PrivateRoute } from "../Routes/PrivateRoute";
import { PublicRoute } from "../Routes/PublicRoute";
import { BudgetRoutes } from "./BudgetRoutes";

import { BrowserRouter , Routes, Route } from "react-router-dom";

export function AppRoutes() {


  return (

    <BrowserRouter>
          <Header />
          <Routes>
              <Route path="register" element={
                  <PublicRoute>
                      <Register />
                  </PublicRoute>
              } />
          
              <Route path="/*" element={
                  <PrivateRoute>
                    <BudgetRoutes />
                  </PrivateRoute>
              } />
          </Routes>
    </BrowserRouter>

  )

}