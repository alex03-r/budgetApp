import { BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"
// import { formatWithCurrency, capitalizeName } from "../helpers/helper"
import "../styles/bugets.css"
import { ExpenseItem } from "./ExpenseItem"

export function ExpensesList() {

  const { expenses } = useContext(BudgetContex)  

  function deleteExpense(id:number){

    


  }

  return (
    <div className=" sm:ms-7 lg:ms-10 xl:ms-14 sm:w-11/12 mb-5" >
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
              <ExpenseItem {...expense}  deleteExpense={deleteExpense} />
            ))
          }
        </tbody>
      </table>
    </div>
  )


}