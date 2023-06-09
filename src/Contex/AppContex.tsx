
import React, { createContext, useState, useEffect } from "react";
import { Header } from "../Components/Header"
import App from "../App";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { RecentBuget } from "../Pages/RecentBuget";
import { Register } from "../Pages/Register";
import { PrivateRoute } from "./PrivateRoute";

interface ContexProps {

    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>;
    budgets: Budgets[];
    addbuget: (budgetInfo: Budgets) => void;
    selectBudget: (budgetName: string) => void;
    addExpenses: (expenseInfo: Expenses) => void;
    expenses: Expenses[];
    budgetSelected: Budgets;
    setBudgets: React.Dispatch<React.SetStateAction<Budgets[]>>;
    setExpenses: React.Dispatch<React.SetStateAction<Expenses[]>>;
    setRangeValue: React.Dispatch<React.SetStateAction<number>>;
    rangeValue: number;
    popUp: Boolean;
    setPopUp: React.Dispatch<React.SetStateAction<Boolean>>;
    popUpValues: PopProps;
    setPopUpValues: React.Dispatch<React.SetStateAction<PopProps>>;


}
export let BudgetContex = createContext<ContexProps>({} as ContexProps)

interface User {
    name: string
}

export interface Budgets {
    id: number;
    name: string;
    hasExpenses: Boolean;
    amount: number;
    rangeValue: number;
    spent: number;
    remaining: number
    color: string
}

export interface Expenses {
    id: number;
    name: string;
    amount: number;
    date: string;
    budget: string;

}

interface PopProps {

    title: string;
    text: string
    actionName: string
    action: () => void;

}

export function AppContexProvider() {


    let localStorageUser = localStorage.getItem("user");
    let parsedUser = JSON.parse(localStorageUser!) || {}

    let localStorageBudgets = localStorage.getItem("budgets");
    let parsedBudgets = JSON.parse(localStorageBudgets!) || []

    let localStorageExpenses = localStorage.getItem("expenses");
    let parsedExpenses = JSON.parse(localStorageExpenses!) || []

    const [user, setUser] = useState<User>(parsedUser)
    const [budgets, setBudgets] = useState<Budgets[]>(parsedBudgets)
    const [expenses, setExpenses] = useState<Expenses[]>(parsedExpenses)
    const [budgetSelected, setBudgetSelected] = useState<Budgets>(budgets[0])
    const [rangeValue, setRangeValue] = useState<number>(100)

    const [popUp, setPopUp] = useState<Boolean>(false)
    const [popUpValues, setPopUpValues] = useState<PopProps>(null!)


    function AddBudget(budgetInfo: Budgets): void {


        setBudgets(budget => {

            return [...budget, budgetInfo]
        })



    }

    function selectBudget(budgetName: string): void {
        let budgetToAddExpense = budgets.find(bg => bg.name === budgetName)
        setBudgetSelected(budgetToAddExpense!)
    }

    function addExpenses(expenseInfo: Expenses): void {

        setExpenses(expense => {

            return [...expense, expenseInfo]
        })
    }

    useEffect(() => {

        console.log("renderizo")

        localStorage.setItem("budgets", JSON.stringify(budgets))

    }, [budgets])

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))

    }, [expenses])

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))

    }, [user])


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", marginTop: "0px", margin: "0px", padding: '0px', height: "100vh" }} >

            <BudgetContex.Provider value={{ budgets: budgets, addbuget: AddBudget, selectBudget, expenses, budgetSelected, addExpenses, setBudgets, setRangeValue, rangeValue, setExpenses, popUp, setPopUp, popUpValues, setPopUpValues, user, setUser }}>

                <Router>
                    <Header />
                    <Routes>

                        <Route path="/" element={<Register />} ></Route>

                        <Route path="/*" element={
                            <PrivateRoute>
                                <Routes>
                                    <Route path="/home" element={<App />} ></Route>
                                    <Route path="/budget/:id" element={<RecentBuget />} ></Route>
                                </Routes>
                            </PrivateRoute>
                        } >
                        </Route>

                    </Routes>

                </Router>
            </BudgetContex.Provider>
        </div>
    )

}


