import { CreationBuget } from "../Components/CreationBuget";
import { AddExpenses } from "../Components/AddExpenses";
import "../styles/bugets.css"
import { useContext } from "react";
import { BudgetContex } from "../Contex/AppContex";

import { ExistingBudgets } from "../Components/ExistingBudgets";
import { ExpensesList } from "../Components/ExpensenList";


export function Home(){

   const { expenses, budgets } =  useContext(BudgetContex)


    return (
        <div style={{ width:"97vw" , marginTop:"0px", paddingTop:"0px", height:"100vh" }} >         
            <h1 style={{ marginLeft:"4%" }} >Welcome to the Budget </h1>
            <div className="parent-box">
                <CreationBuget />
                <AddExpenses/>
            </div>
            <div style={{ marginTop:"0px" } }>             
                { budgets.length > 0 &&
           <>
                <h2 style={{marginLeft:"4%" }}>Existing Budgets</h2>
                <ExistingBudgets />
           </>
                
                }
              {  expenses.length  > 0   && <ExpensesList/>  }  
            </div>            
        </div>
    )

}