
import "../styles/bugets.css"
import { useContext } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { BudgetItem } from "./BudgetItem"
 
export function ExistingBudgets(){

    const { budgets, setBudgets, setExpenses, expenses, setPopUp } =  useContext(BudgetContex);


    const onDeleteBudget = (id:number)  => {

 
        let budgetToDelete = budgets.find(b => b.id == id);
        if(budgetToDelete?.hasExpenses){
            let filteredExpenses = expenses.filter(expense => expense.budget !== budgetToDelete?.name );
            setExpenses(filteredExpenses)
        }

        let filteredBudgets = budgets.filter( budget => budget.id !== id);
         
        setBudgets(filteredBudgets)
        setPopUp(false) 


    }
  
    return (
     <>
        <div className="flex sm:ms-5 md:ms-5 lg:ms-7 xl:ms-12 overflow-x-auto mb-2 me-3  "  >     
                {
                    budgets.map(bg => (
                        <BudgetItem key={bg.id} onDeleteBudget={onDeleteBudget}  { ...bg} />
                    ))
                }
        </div>
     </>
    )
}