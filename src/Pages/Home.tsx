import { CreationBuget } from "../Components/CreationBuget";
import { AddExpenses } from "../Components/AddExpenses";
import "../styles/bugets.css"
import { useContext } from "react";
import { BudgetContex } from "../Contex/AppContex";

import { ExistingBudgets } from "../Components/ExistingBudgets";
import { ExpensesList } from "../Components/ExpensenList";


export function Home() {

    const { expenses, budgets } = useContext(BudgetContex)

    return (
        <div  style={{ width: "100%", height: "100vh" }}   >
            <h1 className=" sm:ms-5 md:ms-8 lg:ms-10 text-4xl xl:ms-14 my-1 ">Welcome Anyel </h1>
            <div className=" sm:ms-7 md:ms-8 lg:ms-10 xl:ms-14 sm:flex mb-4">
                <CreationBuget />
                <AddExpenses />
            </div>
            <div>       
                {
                    budgets.length > 0 ?
                        <>
                            <h2 className=" sm:ms-7 md:ms-8 lg:ms-10 xl:ms-14 " >Existing Budgets</h2>
                            <ExistingBudgets />
                        </>
                        : <h1 className="text-xl sm:ms-7  md:ms-8 lg:ms-10  xl:ms-14 my-4 ">No Budgets for now. Please add one</h1>
                }
                {
                    expenses.length > 0 &&
                    <>
                        <h3 className=" sm:ms-7 md:ms-7 lg:ms-10 xl:ms-14 " >Exinsting expenses</h3> 
                        <ExpensesList />                         
                    </>
                }
            </div>
        </div>
    )

}