import { capitalizeName, formatWithCurrency } from "../helpers/helper"
import { useState, useContext } from "react"
import { BudgetContex } from "../Contex/AppContex";

interface ExpenseProp{


    id:number;
    name:string;
    budget:string;
    amount:number;
    date:string;
    deleteExpense:(id:number) => void


}

export function ExpenseItem(props: ExpenseProp){

    const {  setPopUp, setPopUpValues, budgets  } = useContext(BudgetContex)
    const [isHover, setIsHover] =  useState(false)

    let deletePopUp = props.deleteExpense
    let expenseName = props.name
    let budgetColor = budgets.find(budget => budget.name === props.budget)?.color ;

    function setPopUpValuesAndOpenIT(id:number){
        setPopUpValues({
            title:`Delete`,
            text: `Are you sure you want to delete the expense: ${ capitalizeName(expenseName) } ?`, 
            actionName: "Delete",  
            action:() =>  {
              deletePopUp(id) 
            },
        })
        setPopUp(true)
    }

    return (
        <tr key={props.id} onMouseOut={() =>  setIsHover(false)} onMouseOver={() =>  setIsHover(true) }  className=  { isHover ? "border bg-slate-100" : "border"  }>          
      
        <td className=" border border-slate-300 w-1/6 text-center ">{capitalizeName(props.name)}</td>
        <td className="border border-slate-300 w-1/6 text-center " style={{ backgroundColor:`${budgetColor}`, color:"black", borderRadius:'5px' }} >{capitalizeName(props.budget)}</td>
        <td className="border border-slate-300 w-1/6 text-center">{formatWithCurrency(props.amount)}</td>
        <td className="border border-slate-300 w-1/6 text-center">{props.date}</td>
        <td onClick={() => setPopUpValuesAndOpenIT(props.id)} className="bg-red-600 text-white cursor-pointer text-center border rounded" >Delete</td>
       </tr>
    )
}