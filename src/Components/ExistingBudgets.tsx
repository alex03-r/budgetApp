
import "../styles/bugets.css"
import { useContext ,useEffect } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { ExistingBudget } from "./ExistingBudget"
 
export function ExistingBudgets(){

    const { budgets } =  useContext(BudgetContex);
    // let stringyBudgets = localStorage.getItem("budgets");
    // let parseBudgets  =  JSON.parse(stringyBudgets!);    
    return (
        <div className="existingBudgets container">
                {
                    budgets.map(bg => (
                        <ExistingBudget key={bg.id}  { ...bg} />
                    ))
                }
        </div>
    )
}