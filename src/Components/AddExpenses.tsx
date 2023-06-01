import { useContext, useRef, useState , useEffect} from "react"
import { BudgetContex } from "../Contex/AppContex"
// import { Budgets } from "../Contex/AppContex"
import { useForm } from "../Hooks/useForm"

import "../styles/bugets.css"

export function AddExpenses() {


    const { values, onAddFields , removeFieldsValues } = useForm();

    const selectRef = useRef<HTMLSelectElement>(null!)
    const[ selectExpence, setSelectedExpense] = useState<string>("")
    const { budgets, budgetSelected, addExpenses, setBudgets, selectBudget  } = useContext(BudgetContex)
  
  
    useEffect(() => {
        setSelectedExpense(selectRef.current.value)
    }, [])


    const onBudgetSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
     
       setSelectedExpense( e.target.value )
       selectBudget( e.target.value )

    }

    let options = budgets.map(bg => bg.name )
 
    options.unshift("Select" );

    const onAddExpense = () => { 

        if(budgets.length < 1){

            alert("Sorry you can not add a expense without having budgets please add one")
            return
        }

        if(selectExpence == 'Select'){
            alert("Please select a diferent expense")
            return

        }
        
        let id = Date.now()
        let date = new Date()
        addExpenses({
            id,
            name: values.name,
            amount: parseInt(values.amount + ""),
            date: date.getDay() + date.getMonth() + date.getFullYear(),
            budget: budgetSelected.name,
            color: "#386bff"
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
        },3000)

    }


    function changeRangeValue(amount:number, holdAmount:number){

        let value =  ( amount / holdAmount ) * 100;

       return   100 - value

    }

    return (

        // box-expense 
        <div className="border-solid shadow border-1 rounded sm:w-40 md:w-2/5 lg:w-2/5 ms-4 py-3">
            <div className="flex flex-column ms-4">
            {/* box-expense-parent */}
                <label className="title font-sans ">Add Expense</label>
                {/* box-inside-expense */}
                <div className="flex gap-4 w-11/12">
                    <div className=" flex flex-column " >
                        {/* container-input */}
                        <label>Expense name</label>
                        <input className="border-1 rounded border-solid border-zinc-900  " name="name" value={values.name} onChange={(e) => onAddFields(e) } placeholder="item" type="text" />
                    </div>
                    <div className="container-input">
                        <label  >Amount</label>
                        <input className="border-1 rounded border-solid border-zinc-900 w-9/12 " name="amount" value={values.amount} onChange={(e) => onAddFields(e) }  placeholder="0.00" />
                    </div>

                </div>
                <div className="flex flex-column " >
                    <label>Budget Category</label>
                    <select ref={selectRef} className="border-1 rounded border-solid border-zinc-900 w-8/12 " onChange={onBudgetSelection} >
                        {
                            options.map(bg => (
                                <option key={bg}>{  bg } </option>
                            ))
                        }
                    </select>
                </div>
                <button onClick={onAddExpense} className="btn-Add hover:bg-cyan-500 hover:border-cyan-500 "> Add </button>
            </div>
        </div>
    )


}