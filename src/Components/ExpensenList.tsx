import { Budgets, BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"
import { formatWithCurrency } from "../helpers/helper"
import "../styles/bugets.css"

export function ExpensesList() {


  // let bugetStorage: string | null = localStorage.getItem("budgets")
  // let parsedB: Budgets[] = JSON.parse(bugetStorage!)

  const { expenses } = useContext(BudgetContex)

  return (
    <>
      <table className="table-parent">
   

   <thead  >
              <tr style={{ display:"flex" , justifyContent:"space-between"}} >
                <th>#</th>
                <th>Name</th>
                <th>Budget</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ width:"100%" }} >          
              {
                    expenses.map((b,i) => (
                      <tr  key={b.id} style={{ display:"flex", justifyContent:"space-between"}}>                
                      <td >{ i + 1 }</td>
                      <td style={{ marginRight:"0px" }} >{ b.name[0].toUpperCase() + b.name.slice(1)}</td>
                      <td >{ b.budget[0].toUpperCase() + b.budget.slice(1)}</td>
                      <td >{ formatWithCurrency(b.amount)}</td>
                      <button onClick={() => alert(b.id)} >Delete</button>
                      </tr>
                    ))
              }           
            
            </tbody>
 
    
      </table>
    </>
  )


}