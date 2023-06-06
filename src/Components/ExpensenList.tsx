import { BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"
import { formatWithCurrency, capitalizeName } from "../helpers/helper"
import "../styles/bugets.css"

export function ExpensesList() {

  const { expenses } = useContext(BudgetContex)

  return (
    <div className=" sm:ms-7 lg:ms-10 xl:ms-14 sm:w-11/12" >
      <table className="table-auto">

            <thead  >
              <tr className="" >
              {/* flex justify-center */}
                <th className="border border-slate-300 w-1/12" >#</th>
                <th className="border border-slate-300 w-1/12" >Name</th>
                <th className="border border-slate-300 w-1/12">Budget</th>
                <th className="border border-slate-300 w-1/12">Amount</th>
                <th className="border border-slate-300 w-1/12">Action</th>
              </tr>
            </thead>
            <tbody className=" " >
  
              {
                expenses.map((expense, i) => (
                  <tr key={expense.id} className=" border" >
                    {/* border-collapse flex justify-center */}
                    {/* //  style={{ display: "flex", justifyContent: "space-between",  }} */}
                    <td className=" border border-slate-300 w-1/6" >{i + 1}</td>
                    <td className=" border border-slate-300 w-1/6">{capitalizeName(expense.name)}</td>
                    <td className="border border-slate-300 w-1/6 ">{capitalizeName(expense.budget)}</td>
                    <td className="border border-slate-300 w-1/6 ">{formatWithCurrency(expense.amount)}</td>
                    <button onClick={() => alert(expense.id)} className=" bg-slate-200 btn btn-delete" >Delete</button>
                  </tr>
                ))
              }

            </tbody>
      </table>
    </div>
  )


}