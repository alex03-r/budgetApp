import { BudgetContex } from "../Contex/AppContexProvider"
import { useContext } from "react"
// import { formatWithCurrency, capitalizeName } from "../helpers/helper"
import "../styles/bugets.css"
import { ExpenseItem } from "./ExpenseItem"
import { changeRangeValue } from "../helpers/helper"


export function ExpensesList() {

  const { expenses, setExpenses, setBudgets, setPopUp } = useContext(BudgetContex)

  function deleteExpense(id: number) {
    let expenseSelected = expenses.find(expense => expense.id == id);
    setBudgets(budgets => {

      return budgets.map(budget => {

        if (budget.name === expenseSelected?.budget) {

          return {
            ...budget,
            rangeValue: changeRangeValue((budget.spent - expenseSelected.amount), budget.amount),
            hasExpenses: budget.spent - expenseSelected.amount  <= 0 ? false : true,
            spent: budget.spent - expenseSelected.amount,
            remaining: budget.remaining + expenseSelected.amount ,
          }
        } else {
          return budget
        }

      })
    }

    )

    let filteredExpenses = expenses.filter(expense => expense.id !== id)    
    setExpenses(filteredExpenses)    

    setPopUp(false)
  }






  return (
    <div className=" sm:ms-7 lg:ms-10 xl:ms-14 ms-11 sm:w-11/12 w-10/12 mb-5" >
      <table className="table-auto">

        <thead  >
          <tr className="" >
            <th className="border border-slate-300 w-1/12 text-center" >Name</th>
            <th className="border border-slate-300 w-1/12 text-center" >Budget</th>
            <th className="border border-slate-300 w-1/12 text-center">Amount</th>
            <th className="border border-slate-300 w-1/12 text-center">Date</th>
            <th className="border border-slate-300 w-1/12 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="" >
          {
            expenses.map((expense) => (
              <ExpenseItem key={expense.id} isDeleteEnable={true} {...expense} deleteExpense={deleteExpense} />
            ))
          }
        </tbody>
      </table>
    </div>
  )


}
