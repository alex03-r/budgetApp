import { useContext, useRef, useState, useEffect } from "react"
import { BudgetContex } from "../Contex/AppContexProvider"
import { useForm } from "../Hooks/useForm"
import { changeRangeValue } from "../helpers/helper"

import "../styles/bugets.css"

export function AddExpense() {


    const { values, onAddFields, removeFieldsValues } = useForm();

    const selectRef = useRef<HTMLSelectElement>(null!)
    const [selectExpence, setSelectedExpense] = useState<string>("")
    const { budgets, budgetSelected, addExpenses, setBudgets, selectBudget } = useContext(BudgetContex)


    useEffect(() => {
        setSelectedExpense(selectRef.current.value)
    }, [])


    const onBudgetSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setSelectedExpense(e.target.value)
        selectBudget(e.target.value)

    }

    let options = budgets.map(bg => bg.name)

    options.unshift("Select");

    const onAddExpense = () => {

        if (budgets.length < 1) {

            alert("Sorry you can not add a expense without having budgets please add one")
            removeFieldsValues()
            return
        }

        if (selectExpence == 'Select') {
            alert("Please select a diferent expense")
            return

        }

        if(values.amount > budgetSelected.amount){

            alert("Sorry the expense's amount can not be greather than the budget's amount")
            removeFieldsValues()
            return
        }

        let id = Date.now()
        let date = new Date()
        addExpenses({
            id,
            name: values.name,
            amount: parseInt(values.amount + ""),
            date: date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),
            budget: budgetSelected.name,
        })

        setBudgets((budgets) => {

            return budgets.map(bg => {
                if (bg.id === budgetSelected.id) {
                    return {
                        ...bg,
                        rangeValue: changeRangeValue((bg.spent + parseInt(values.amount + "")), bg.amount)
                        , hasExpenses: true,
                        spent: parseInt(values.amount + "") + bg.spent,
                        remaining: bg.amount - (bg.spent + parseInt(values.amount + ""))
                    }
                } else {

                    return bg

                }
            })
        })

        setTimeout(() => {
            removeFieldsValues()
        }, 3000)

    }




    return (

        // box-expense 
        <div className=" sm:w-2/4 md:w-2/5 lg:1/3 xl:1/5 2xl:w-1/5 w-5/6 sm:mt-0 md:mt-1 lg:mt-0 ms-9  rounded border-1  border-solid border-gray shadow-md  p-2 ">
            <div className="flex flex-column ms-4">

                <label className="title font-sans ">Add Expense</label>

                <div className=" flex flex-col sm:flex-row  gap-2 ">

                    <div className=" flex flex-column " >

                        <label>Expense name</label>
                        <input className="border-1 rounded border-solid border-zinc-900" autoComplete="off"  name="name" value={values.name} onChange={(e) => onAddFields(e)} placeholder="item" type="text" />
                    </div>
                    <div className=" flex flex-col flex-wrap ">

                        <label  >Amount</label>
                        <input className="border-1 rounded border-solid border-zinc-900 sm:w-3/4 xl:w-2/4 " autoComplete="off" name="amount" value={values.amount} type="number" onChange={(e) => onAddFields(e)} placeholder="0.00" />
                    </div>

                </div>
                <div className="flex flex-column " >
                    <label>Budget Category</label>
                    <select ref={selectRef} className="border-1 rounded border-solid border-zinc-900 w-8/12 " onChange={onBudgetSelection} >
                        {
                            options.map(bg => (
                                <option key={bg}>{bg} </option>
                            ))
                        }
                    </select>
                </div>
                <button onClick={onAddExpense} className="btn-Add hover:bg-cyan-500 hover:border-cyan-500 "> Add </button>
            </div>
        </div>
    )


}