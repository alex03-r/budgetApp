import { CreationBuget } from "../Components/CreationBuget";
import { AddExpenses } from "../Components/AddExpenses";
import "../styles/bugets.css"

import { ExistingBudgets } from "../Components/ExistingBudgets";

export function Home(){


    return (
        <div>
            <h1 style={{ marginLeft:"4%" }} >Welcome to the Budget </h1>
            <div className="parent-box">
                <CreationBuget />
                <AddExpenses/>
            </div>
            <div style={{ marginTop:"0px" } }>             
                {/* <ExpensesList/> */}
                <h2 style={{marginLeft:"4%" }}>Existing Budgets</h2>
                <ExistingBudgets />
            </div>            
        </div>
    )

}