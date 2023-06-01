
import "../styles/bugets.css"
import { useContext ,useEffect } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { ExistingBudget } from "./ExistingBudget"
 
export function ExistingBudgets(){

    const { budgets } =  useContext(BudgetContex);
  
    return (
        <div className=" flex flex-row  overflow-x-auto  ">
            {/* existingBudgets */}
                {
                    budgets.map(bg => (
                        <ExistingBudget key={bg.id}  { ...bg} />
                    ))
                }
        </div>
    )
}