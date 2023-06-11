import { BudgetContex } from "./AppContex"
import { useContext } from "react"
import { Navigate } from "react-router-dom"



export const PrivateRoute = ({ children }:{ children: React.ReactNode } ) => {

    const { user } = useContext(BudgetContex)


  return (user.name )
         ? children 
         : <Navigate to='/' />


}
