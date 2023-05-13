import { CreationBuget } from "../Components/CreationBuget";
import { AddExpenses } from "../Components/AddExpenses";
import "../styles/bugets.css"
import { useContext , useEffect} from "react";
import { BudgetContex } from "../Contex/AppContex";

import { ExistingBudgets } from "../Components/ExistingBudgets";
import { ExpensesList } from "../Components/ExpensenList";


export function Home(){

   const { expenses, budgets } =  useContext(BudgetContex)

    return (
        <div style={{ width:"100%" , marginTop:"0px", paddingTop:"0px",padding:"0px", margin:"0px", height:"100vh" }} >         
            <h1 className="ms-5 text-4xl my-1 ">Welcome Anyel </h1>
            <div className=" flex flex-row md:flex-col h-auto ">
            {/* "parent-box" */}
                <CreationBuget />
                <AddExpenses/>
            </div>
            <div style={{ padding:'0px', margin:"0px" , width:"100%", overflowX:"auto" } }>             
                { budgets.length > 0 ?
                <>
                    <h2 style={{marginLeft:"4%" }}>Existing Budgets</h2>
                    <ExistingBudgets />
                </>
                  : <h1 className="text-xl ms-5 my-4 ">No Budgets for now</h1>
                }
              {  expenses.length  > 0   &&  
              <>
                <h3 style={{marginLeft:"4%" }}>Exinsting expenses</h3> <ExpensesList/> </> }  
            </div>            
        </div>
    )

}