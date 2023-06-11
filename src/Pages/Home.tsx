import { CreationBuget } from "../Components/CreationBuget";
import { AddExpenses } from "../Components/AddExpenses";
import "../styles/bugets.css"
import { useContext } from "react";
import { BudgetContex } from "../Contex/AppContex";

import { ExistingBudgets } from "../Components/ExistingBudgets";
import { ExpensesList } from "../Components/ExpensenList";
import { PopUp } from "../Components/PopUp";



export function Home() {

    const { expenses, budgets, popUp , user } = useContext(BudgetContex)

    return (
        <div  className="relative z-10 " style={{ width: "100%", height: "100vh" }}   >
            <h1 className=" sm:ms-5 md:ms-8 lg:ms-10 text-4xl xl:ms-14 my-1 ">Welcome { user.name} </h1>
            <div className=" sm:ms-7 md:ms-8 lg:ms-10 xl:ms-14 sm:flex mb-2">
                <CreationBuget />
                <AddExpenses />
            </div>
            <div>       
                {
                    budgets.length > 0 ?
                        <>
                            <h2 className="  text-black sm:ms-7 md:ms-8 lg:ms-10 xl:ms-14 text-xl " >Existing Budgets</h2>
                            <ExistingBudgets />
                        </>
                        : <h1 className="text-xl sm:ms-7  md:ms-8 lg:ms-10  xl:ms-14 my-4 ">No Budgets for now. Please add one</h1>
                }
                {
                    expenses.length > 0 &&
                    <>
                        <h3 className=" sm:ms-7 md:ms-7 lg:ms-10 xl:ms-14 text-lg " >Exinsting expenses</h3> 
                        <ExpensesList />                         
                    </>       
                }

                {
                  popUp &&  
                  
                  <PopUp />
                }


                
            </div>
       
        </div>
    )

}