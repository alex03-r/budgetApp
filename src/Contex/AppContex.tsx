
import  { createContext, useState, useEffect } from "react";
import App from "../App";

interface ContexProps {

    budgets: Budgets[];
    addbuget:(budgetInfo:Budgets) => void;
    selectBudget:(budgetName:string) => void;
    addExpenses:(expenseInfo:Expenses) => void;
    expenses:Expenses[];
    budgetSelected:Budgets;
    setBudgets:React.Dispatch<React.SetStateAction<Budgets[]>>
 
}
export let BudgetContex = createContext<ContexProps>({} as ContexProps)

export interface Budgets {
    id:number;
    name:string;
    hasExpenses:false; 
    amount:number;
}

export interface Expenses {
    id:number;
    name:string;
    amount:number;
    date:number;
    budget:string;
}


export function AppContexProvider() {

 //[{ id:1, name:"Personal", hasExpenses:false ,amount:0}]
    const[budgets, setBudgets ] = useState<Budgets[]>([])
    const [expenses, setExpenses ] = useState<Expenses[]>([])
    const[budgetSelected , setBudgetSelected ] = useState<Budgets>(budgets[0])
    function AddBudget(budgetInfo:Budgets):void{


        setBudgets(budget => {

            return [...budget, budgetInfo]
        })



    }

    function selectBudget(budgetName:string):void{
        let budgetToAddExpense = budgets.find(bg => bg.name === budgetName)
        setBudgetSelected(budgetToAddExpense!)
    }

    function addExpenses(expenseInfo:Expenses):void{

       

        setExpenses(expense => {

            return [...expense, expenseInfo ]
        })


        // setBudgets( (bg  ) => {

        //  let mappedBudgets =  bg.map(b => {

        //       if(b.id === id){

        //         return { ...b, amount: b.amount - expenseInfo.amount }

        //       }else{

        //         return bg

        //       }      

        //     })

        //     return mappedBudgets;

        // })


    }


    useEffect(() => {

        console.log("renderizo")

        localStorage.setItem("budgets", JSON.stringify(budgets))

    },[budgets])

    return (
        <div>
            <BudgetContex.Provider value={{ budgets: budgets , addbuget:AddBudget, selectBudget, expenses, budgetSelected, addExpenses,setBudgets }}>
                 <App/>
            </BudgetContex.Provider>
        </div>
    )

}


