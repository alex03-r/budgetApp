import { BudgetContex } from "../Contex/AppContexProvider"
import { useContext  } from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }:{  children: React.ReactNode } ) => {

    const { user } = useContext(BudgetContex)

  return ( user.isLogged ) 
         ?  <>{ children }</> 
         : <Navigate to='/register' />

}
