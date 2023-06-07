
import { formatWithCurrency, formatAmount, capitalizeName } from "../helpers/helper";
import { Link } from "react-router-dom"
import { BudgetContex } from "../Contex/AppContex";
import { PopUp } from "./PopUp";
import { useContext } from "react"

interface BudgetsItem {
  id:number;
  name:string;
  hasExpenses:Boolean; 
  amount:number;
  rangeValue:number;
  spent:number;
  remaining:number;
  onDeleteBudget: (id:number) => void

}

export function BudgetItem(props: BudgetsItem) {


  const {  setPopUp, setPopUpValues  } = useContext(BudgetContex)

  const setAndOpenPopUpValues = () => {

    let popUpValues = {
    
      title:"Delete",
      text: "Are you sure ?", 
      actionName: "delete",  
      action:() =>  {
        props.onDeleteBudget(props.id) 
      },

    }

    setPopUpValues(popUpValues)



    setPopUp(true)


  }
  

  return (
    <div className="budget-box relative " key={props.id}>
    <div className="cursor-pointer  absolute" style={{ top:"0px", right:"10px", color:"red" }} onClick={ setAndOpenPopUpValues } >X</div>

    {/* () => props.onDeleteBudget(props.id)  */}
      <div className="flex justify-between w-full px-2 " >

        <p>{capitalizeName(props.name)}</p>
        <p>{formatWithCurrency(props.amount)} Budgeted</p>
      </div>
      <input value={props.rangeValue} style={{ width: "90%" }} type="range" />
      <div className=" flex justify-between w-full" >
        {props.hasExpenses && <p> {formatAmount(props.spent)} spent</p>}
        {props.hasExpenses && <p> {formatAmount(props.remaining)} remaining </p>}
      </div>
      <button  className="btn-viewDetails" >

        <Link style={{ textDecoration: "none", color: "white" }} to={`budget/${props.id}`}  > View Details</Link>
      </button>


    </div>
  )
}