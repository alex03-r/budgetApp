import {  BudgetContex } from "../Contex/AppContex"
import { useContext } from "react"
import { formatWithCurrency, capitalizeName } from "../helpers/helper"
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
                      <tr  key={b.id} style={{ display:"flex", justifyContent:"space-between" , backgroundColor:b.color == "#386bff" ? b.color : "#ff66c4", color:"white"}}>                
                      <td >{ i + 1 }</td>
                      <td style={{ marginRight:"0px" }} >{ b.name[0].toUpperCase() + b.name.slice(1)}</td>
                      <td >{ capitalizeName(b.budget )}</td>
                      <td >{ formatWithCurrency(b.amount)}</td>
                      <button onClick={() => alert(b.id)} className="btn btn-delete" >Delete</button>
                      </tr>
                    ))
              }           
            
            </tbody>
 
    
      </table>
    </>
  )


}