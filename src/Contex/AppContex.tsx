
import  React, { createContext, useState, useEffect } from "react";
import  { Header } from "../Components/Header"
import App from "../App";

interface ContexProps {

    budgets: Budgets[];
    addbuget:(budgetInfo:Budgets) => void;
    selectBudget:(budgetName:string) => void;
    addExpenses:(expenseInfo:Expenses) => void;
    expenses:Expenses[];
    budgetSelected:Budgets;
    setBudgets:React.Dispatch<React.SetStateAction<Budgets[]>>;
    setRangeValue:React.Dispatch<React.SetStateAction<number>>;
    rangeValue:number;
 
}
export let BudgetContex = createContext<ContexProps>({} as ContexProps)

export interface Budgets {
    id:number;
    name:string;
    hasExpenses:false; 
    amount:number;
    rangeValue:number;
    spent:number;
    remaining:number
}

export interface Expenses {
    id:number;
    name:string;
    amount:number;
    date:number;
    budget:string;
    color:string
}


export function AppContexProvider() {


    const[budgets, setBudgets ] = useState<Budgets[]>([])
    const [expenses, setExpenses ] = useState<Expenses[]>([])
    const[budgetSelected , setBudgetSelected ] = useState<Budgets>(budgets[0])
    const [ rangeValue, setRangeValue] = useState<number>(100)
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
    }


    useEffect(() => {

        console.log("renderizo")

        localStorage.setItem("budgets", JSON.stringify(budgets))

    },[budgets])

    return (
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"start", marginTop:"0px" , margin:"0px",padding:'0px'}} >
            <Header/>
            <BudgetContex.Provider value={{ budgets: budgets , addbuget:AddBudget, selectBudget, expenses, budgetSelected, addExpenses,setBudgets ,setRangeValue, rangeValue}}>
                 <App/>
            </BudgetContex.Provider>
        </div>
    )

}


