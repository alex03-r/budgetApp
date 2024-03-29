import {  useContext,useEffect } from "react"
import { BudgetContex } from "../Contex/AppContexProvider"
import { useForm } from  "../Hooks/useForm"
import { isPar } from "../helpers/helper"

import "../styles/bugets.css"

export function AddBudget() {

     const { addbuget, budgets  } = useContext(BudgetContex);
     const { onAddFields , values , removeFieldsValues}  = useForm()
     let id =  Date.now()
     let checkNames = budgets.map(bg => bg.name)

    const onAddBudget = (): void => {

        if(!values.name && !values.amount ){
            alert("Please fill out the inputs to create a budget");
            return
        }
        if(values.amount <= 0 ){
            alert("The amount can not be 0");
            return
        }

        if( !checkNames.includes(values.name.toLocaleLowerCase()) ){
            addbuget({ id,          
                name:values.name.trim(),           
                amount: parseInt(values.amount + ""),
                hasExpenses:false ,
                rangeValue:100,
                spent:0,         
                remaining: parseInt(values.amount + ""),
                color: isPar( budgets.length ) ? "#F2BE22" : "#DDE6ED"
            })        
            removeFieldsValues();
            return 
        }
        removeFieldsValues();
        alert('The Budget should not be equal to other existing budget')
   
    }

    useEffect(() => {

        console.log("renderizo")

        localStorage.setItem("budgets", JSON.stringify(budgets))

    },[budgets])


    return (
        <div className=" sm:w-2/5 md:w-2/5 lg:1/3 xl:1/5 2xl:w-1/5 w-5/6 sm:ms-2 ms-9 rounded border-1  border-solid border-gray shadow-md p-2" >
            {/* sm:w-1/5  md:w-2/5  xl:w-2/6 rounded border-1  border-solid border-gray shadow-md py-2 */}
            <div className="box-inside px-4 ">        
                <p className="title">Create Budget</p>
                <div className="container-input" >
                    <label className=" font-sans "  >Budget name</label>
                    <input autoComplete="off" className="border-1 rounded border-solid border-zinc-900 focus:border-1 w-auto " name="name" value={values.name} onChange={(e) => onAddFields(e)} placeholder="Personal.." type="text" />
                </div>
                <div className="container-input">
                    <label className="font-sans "  >Amount</label>
                    <input className="border-1 rounded border-solid border-zinc-900" type='number' value={ values.amount } name="amount" onChange={(e) => onAddFields(e)} placeholder="0.00" />
                </div>  
                <button onClick={ onAddBudget } className="btn-create">Create</button>
            </div>
        </div>
    )
}