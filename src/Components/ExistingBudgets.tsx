
import "../styles/bugets.css"
import { useContext  } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { ExistingBudget } from "./ExistingBudget"
 
export function ExistingBudgets(){


  const { budgets } =  useContext(BudgetContex)



    return (
        <div className="existingBudgets">

                {
                    budgets.map(bg => (
                        <ExistingBudget  { ...bg} />
                    ))
                }

        </div>
    )

}