import React, { createContext, useState, useEffect } from "react";

import { AppRoutes } from "../Routes/AppRoutes";

interface ContexProps {
  user: User;
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
  popUp: boolean;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  popUpValues: PopProps;
  setPopUpValues: React.Dispatch<React.SetStateAction<PopProps>>;
}
export const BudgetContex = createContext<ContexProps>({} as ContexProps);

interface User {
  name: string;
  isLogged: boolean;
}

export interface Budgets {
  id: number;
  name: string;
  hasExpenses: boolean;
  amount: number;
  rangeValue: number;
  spent: number;
  remaining: number;
  color: string;
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
  text: string;
  actionName: string;
  action: () => void;
}

export function AppContexProvider() {
  const localStorageUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(localStorageUser!) || {};

  const localStorageBudgets = localStorage.getItem("budgets");
  const parsedBudgets = JSON.parse(localStorageBudgets!) || [];

  const localStorageExpenses = localStorage.getItem("expenses");
  const parsedExpenses = JSON.parse(localStorageExpenses!) || [];

  const [user, setUser] = useState<User>(parsedUser);
  const [budgets, setBudgets] = useState<Budgets[]>(parsedBudgets);
  const [expenses, setExpenses] = useState<Expenses[]>(parsedExpenses);
  const [budgetSelected, setBudgetSelected] = useState<Budgets>(budgets[0]);
  const [rangeValue, setRangeValue] = useState<number>(100);

  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpValues, setPopUpValues] = useState<PopProps>(null!);

  function AddBudget(budgetInfo: Budgets): void {
    setBudgets((budget) => {
      return [...budget, budgetInfo];
    });
  }

  function selectBudget(budgetName: string): void {
    const budgetToAddExpense = budgets.find((bg) => bg.name === budgetName);
    setBudgetSelected(budgetToAddExpense!);
  }

  function addExpenses(expenseInfo: Expenses): void {
    setExpenses((expense) => {
      return [...expense, expenseInfo];
    });
  }

  useEffect(() => {
    console.log("renderizo");
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // useEffect(() => {

  //     localStorage.setItem("user", JSON.stringify(user))

  // }, [user])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        marginTop: "0px",
        margin: "0px",
        padding: "0px",
        height: "100vh",
      }}
    >
      <BudgetContex.Provider
        value={{
          budgets: budgets,
          addbuget: AddBudget,
          selectBudget,
          expenses,
          budgetSelected,
          addExpenses,
          setBudgets,
          setRangeValue,
          rangeValue,
          setExpenses,
          popUp,
          setPopUp,
          popUpValues,
          setPopUpValues,
          user,
          setUser,
        }}
      >
        <AppRoutes />
      </BudgetContex.Provider>
    </div>
  );
}
