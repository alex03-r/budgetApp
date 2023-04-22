import { useContext, useRef } from "react"
import { BudgetContex } from "../Contex/AppContex"

import "../styles/bugets.css"
export function AddExpenses() {


    const nameRef = useRef<HTMLInputElement>(null!)
    const amountRef = useRef<HTMLInputElement>(null!)

    const { budgets, selectBudget, budgetSelected, addExpenses, setBudgets } = useContext(BudgetContex)

    const onBudgetSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {

     //   let budgetSelectedOld = budgets.find(bg => bg.name = e.target.value)
        selectBudget( e.target.value )

    }

    const onAddExpense = () => { 

        let id = Date.now()
        let date = new Date()
        addExpenses({
            id,
            name: nameRef.current.value,
            amount: parseInt(amountRef.current.value),
            date: date.getDay() + date.getMonth() + date.getFullYear(),
            budget: budgetSelected.name
        })

        setBudgets(budgets => {
            return budgets.map(bg => {
                if(bg.id === budgetSelected.id){

                    return { ...bg, amount: bg.amount - parseInt(amountRef.current.value) , hasExpenses:true }
                }else {
                    return bg
                }
                })
        })


    }

    return (
        <div className="box-expense">

            <div className="box-expense-parent">
                <label className="title">Add Expense</label>
                <div className="box-inside-expense">

                    <div className="container-input" >
                        <label  >Expense name</label>
                        <input ref={nameRef} placeholder="item" type="text" />
                    </div>
                    <div className="container-input">
                        <label  >Amount</label>
                        <input ref={amountRef} style={{ width: "120px" }} placeholder="0.00" />

                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "0px" }} >
                    <label>Budget Category</label>
                    <select onChange={onBudgetSelection} style={{ width: "120px" }}>

                        {
                            budgets.map(bg => (


                                <option key={bg.id}>{  bg.name } </option>
                            ))
                        }


                    </select>
                </div>
                <button onClick={onAddExpense} className="btn-Add"> Add </button>
            </div>
        </div>
    )


}