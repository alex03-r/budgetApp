
import { formatWithCurrency, formatAmount, capitalizeName } from "../helpers/helper";
import { Link } from "react-router-dom"

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
  

  return (
    <div className="budget-box " key={props.id}>
    <div className=" w-full justify-self-start cursor-pointer" onClick={ () => props.onDeleteBudget(props.id) } >X</div>
      <div className="flex justify-between w-full px-2 " >

        <p>{capitalizeName(props.name)}</p>
        <p>{formatWithCurrency(props.amount)} Budgeted</p>
      </div>
      <input value={props.rangeValue} style={{ width: "90%" }} type="range" />
      <div className=" flex justify-between w-full" >
        {props.hasExpenses && <p> {formatAmount(props.spent)} spent</p>}
        {props.hasExpenses && <p> {formatAmount(props.remaining)} remaining </p>}
      </div>
      <button className="btn-viewDetails" >

        <Link style={{ textDecoration: "none", color: "white" }} to={`budget/${props.id}`}  > View Details</Link>
      </button>

    </div>
  )
}