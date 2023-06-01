
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { BudgetContex } from "../Contex/AppContex"
// import { formatWithCurrency , capitalizeName, formatAmount } from "../helpers/helper"
import { BudgetSelected } from "../Components/BudgetSelected"


export function RecentBuget() {


    const { budgets, expenses } = useContext(BudgetContex)
    const param = useParams()
    const budgetSelected = budgets.find(budget => budget.id === parseInt(param.id!))
    const expensesOfBudgetSelected = expenses.filter(expense => expense.budget == budgetSelected?.name)


    return (
        <div className="flex ms-10 gap-11 h-full "  >
            <BudgetSelected budgetSelected={budgetSelected!} />
            <div>
                {
                    expensesOfBudgetSelected.length > 0 &&
                    <>
                        <h2>Expenses</h2>
                        <div>
                            <ul>
                                {
                                    expensesOfBudgetSelected.map(exp => {
                                        return <li key={exp.id} >{exp.name}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </>
                }


            </div>
        </div>
    )

}