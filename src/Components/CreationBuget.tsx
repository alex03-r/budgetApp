
import "../styles/bugets.css"
import {  useContext,useEffect } from "react"
import { BudgetContex } from "../Contex/AppContex"
import { useForm } from  "../Hooks/useForm"




export function CreationBuget() {

 
     const { addbuget, budgets  } = useContext(BudgetContex);
     const { onAddFields , values , removeFieldsValues}  = useForm()


    let id =  Date.now()
    // const nameRef = useRef<HTMLInputElement>(null!)
    // const amountRef = useRef<HTMLInputElement>(null!)
    let checkNames = budgets.map(bg => bg.name)

    const onAddBudget = (): void => {

        if(!values.name && !values.amount ){
            alert("Please fill out the inputs to create a budget");
            return
        }

        if( !checkNames.includes(values.name.toLocaleLowerCase()) ){
            addbuget({ id,          
                name:values.name,           
                amount: parseInt(values.amount + ""),
                hasExpenses:false ,
                rangeValue:100,
                spent:0,         
                remaining: parseInt(values.amount + ""),
                // color: "red" ? 
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
        <div className="sm:w-1/5  md:w-2/5 lg:w-10 xl:w-2/6 rounded border-1  border-solid border-gray shadow-md py-2 " >
            <div className="box-inside px-4 ">        
                <p className="title">Create Budget</p>
                <div className="container-input" >
                    <label className=" font-sans "  >Budget name</label>
                    <input className="border-1 rounded border-solid border-zinc-900 focus:border-1 w-auto " name="name" value={values.name} onChange={(e) => onAddFields(e)} placeholder="Personal.." type="text" />
                </div>
                <div className="container-input">
                    <label className="font-sans "  >Amount</label>
                    <input className="border-1 rounded border-solid border-zinc-900" value={values.amount} name="amount" onChange={(e) => onAddFields(e)} placeholder="0.00" type="text" />
                </div>  
                <button onClick={ onAddBudget } className="btn-create">Create</button>
            </div>
        </div>
    )
}