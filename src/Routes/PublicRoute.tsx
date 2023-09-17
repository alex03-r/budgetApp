import { Navigate } from "react-router-dom"
import { BudgetContex } from "../Contex/AppContexProvider"
import { useContext } from "react"


export function PublicRoute({ children }: { children: React.ReactNode }){


    const { user } = useContext(BudgetContex)

    return ( !user.isLogged ) ? 
                 <>{children}</>:
                 <Navigate to="/home" />
} 