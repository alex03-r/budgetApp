import { useParams } from "react-router-dom"
import { useContext } from "react"
import { BudgetContex } from "../Contex/AppContexProvider"
import { PopUp } from "../Components/PopUp"

import { ExpenseItem } from "../Components/ExpenseItem"
import { BudgetSelected } from "../Components/BudgetSelected"


export function Budget() {


    const { budgets, expenses, popUp } = useContext(BudgetContex)
    const param = useParams()
    const budgetSelected = budgets.find(budget => budget.id === parseInt(param.id!))
    const expensesOfBudgetSelected = expenses.filter(expense => expense.budget == budgetSelected?.name)

    return (
        <div className=" flex sm:flex-col lg:flex-row w-11/12  ms-10 gap-11 h-full "  >
            <BudgetSelected budgetSelected={budgetSelected!} />
            <div className="ms-4 sm:w-full md:w-11/12 " >
                {
                    expensesOfBudgetSelected.length > 0 ?
                        <>
                            <h2 className="mt-10 ms-0 text-lg tex font-bold " > All expenses</h2>
                            <div>
                                {
                                    expensesOfBudgetSelected.map(expense => {
                                        return <ExpenseItem key={expense.id} isDeleteEnable={false} {...expense} />
                                    })
                                }

                            </div>
                        </>
                        : <h1 className="mt-10 ms-11">No Expenses for now</h1>
                }
            </div>

            {
                popUp &&

                <PopUp />
            }
        </div>
    )

}