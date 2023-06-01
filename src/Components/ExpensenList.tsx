import { BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"
import { formatWithCurrency, capitalizeName } from "../helpers/helper"
import "../styles/bugets.css"

export function ExpensesList() {


  // let bugetStorage: string | null = localStorage.getItem("budgets")
  // let parsedB: Budgets[] = JSON.parse(bugetStorage!)

  const { expenses } = useContext(BudgetContex)

  return (
    <>
      <table className=" flex flex-col ms-11 border rounded h-2/5 border-collapse ">
      {/* table-parent */}
       
       <div className=" flex flex-col " >
       <thead  >
          <tr className="flex" >
            <th className="border border-slate-300" >#</th>
            <th className="border border-slate-300" >Name</th>
            <th className="border border-slate-300">Budget</th>
            <th className="border border-slate-300">Amount</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody style={{ width: "100%" }} >
          {
            expenses.map((expense, i) => (
               <tr key={expense.id} className="border-collapse  " > 
              {/* //  style={{ display: "flex", justifyContent: "space-between",  }} */}
                <td className="border border-slate-300" >{i + 1}</td>
                <td className="border border-slate-300">{capitalizeName(expense.name)}</td>
                <td className="border border-slate-300">{capitalizeName(expense.budget)}</td>
                <td className="border border-slate-300">{formatWithCurrency(expense.amount)}</td>
                <button onClick={() => alert(expense.id)} className="btn btn-delete" >Delete</button>
              </tr>
            ))
          }

        </tbody>
       </div>


      </table>
    </>
  )


}