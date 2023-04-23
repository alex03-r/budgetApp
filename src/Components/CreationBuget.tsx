
import "../styles/bugets.css"
import { useRef, useContext } from "react"
import { BudgetContex } from "../Contex/AppContex"




export function CreationBuget() {

 
     const { addbuget, budgets  } = useContext(BudgetContex);


    let id =  Date.now()
    const nameRef = useRef<HTMLInputElement>(null!)
    const amountRef = useRef<HTMLInputElement>(null!)
    let checkNames = budgets.map(bg => bg.name)

    const onAddBudget = (): void => {

        if(!nameRef.current.value && !amountRef.current.value){
            alert("Please fill out the inputs to create a budget");
            return
        }

        if( !checkNames.includes(nameRef.current.value.toLocaleLowerCase()) ){

            addbuget({ id, 
                name:nameRef.current.value, 
                amount:parseInt(amountRef.current.value) ,
                hasExpenses:false ,
                rangeValue:100,
                spent:0,
                remaining:parseInt(amountRef.current.value) ,
                // color: "red" ? 
            })  

            nameRef.current.value = ""
            amountRef.current.value = ""

            return 


        }

        nameRef.current.value = ""
        amountRef.current.value = ""
        alert('The Budget should not be equal to other existing budget')

   
    }


    return (
        <div className="box">
            <div className="box-inside">
                <p className="title">Create Buget</p>
                <div className="container-input" >
                    <label  >Bugte name</label>
                    <input ref={nameRef}  placeholder="Personal.." type="text" />
                </div>
                <div className="container-input">
                    <label  >Amount</label>
                    <input  ref={ amountRef } placeholder="0.00" type="text" />
                </div>  
                <button onClick={ onAddBudget } className="btn-create">Create Budget</button>
            </div>
        </div>
    )


}