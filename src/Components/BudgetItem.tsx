
import { formatWithCurrency, formatAmount, capitalizeName } from "../helpers/helper";
import { Link } from "react-router-dom"
import { BudgetContex } from "../Contex/AppContex";
import { useContext, useState } from "react"
import  close from  "../assets/close.png"

interface BudgetsItem {
  id: number;
  name: string;
  hasExpenses: Boolean;
  amount: number;
  rangeValue: number;
  spent: number;
  remaining: number;
  color:string;
  onDeleteBudget: (id: number) => void

}

export function BudgetItem(props: BudgetsItem) {


  const { setPopUp, setPopUpValues } = useContext(BudgetContex)
  const [isHover, setIsHover] = useState(false)

  let deletePopUp = props.onDeleteBudget;

  let budgetName = props.name;

  const setPopUpValuesAndOpenIt = (id: number) => {
    let popUpValues = {

      title: "Delete",
      text: `Are you sure you want to delete the budget: ${ capitalizeName(budgetName)} ?`,
      actionName: "delete",
      action: () => {
        deletePopUp(id)
      },
    }
    setPopUpValues(popUpValues)
    setPopUp(true)
  }


  return (
    <div className={isHover ? "budget-box relative bg-slate-100" : `budget-box relative`} style={{ borderColor:`${props.color}` , borderWidth:"2px", borderStyle:"solid", borderRadius:"4px" }} onMouseOut={() => setIsHover(false)} onMouseOver={() => setIsHover(true)} key={props.id}>
      {/* <div className="cursor-pointer  absolute" style={{ top: "0px", right: "10px", color: "red" }} onClick={() => setPopUpValuesAndOpenIt(props.id)} >X</div> */}
      <img className=" cursor-pointer absolute" style={{ top: "4px", width:"12px", height:"12px",  right: "5px"}} onClick={() => setPopUpValuesAndOpenIt(props.id)} src={close}/>
      <div className="flex justify-between w-full px-2 " >
        <p>{capitalizeName(props.name)}</p>
        <p>{formatWithCurrency(props.amount)} Budgeted</p>
      </div>
      <input value={props.rangeValue} style={{ width: "90%" }} type="range" />
      <div className=" flex justify-between w-full px-2 " >
        {props.hasExpenses && <p> {formatAmount(props.spent)} spent</p>}
        {props.hasExpenses && <p> {formatAmount(props.remaining)} remaining </p>}
      </div>
      <button className="btn-viewDetails" >

        <Link style={{ textDecoration: "none", color: "white" }} to={`budget/${props.id}`}  > View Details</Link>
      </button>


    </div>
  )
}