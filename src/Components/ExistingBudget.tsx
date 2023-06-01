
import { Budgets } from "../Contex/AppContex"
import { formatWithCurrency, formatAmount,capitalizeName } from "../helpers/helper";
import { Link } from "react-router-dom"

export function ExistingBudget(props:Budgets){


    return (
        <div className="budget-box" key={props.id}>
            <div style={{ display:"flex", width: "90%", justifyContent:"space-between" , marginLeft:"2%"}} >
              <p>{ capitalizeName(props.name)  }</p>
              <p>{ formatWithCurrency(props.amount)  } Budgeted</p>
            </div>
            <input  value={props.rangeValue} style={{ width:"90%" }} type="range" />
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px",width: "90%" }} >
             { props.hasExpenses &&   <p> { formatAmount(props.spent)  } spent</p>    } 
             { props.hasExpenses && <p> {formatAmount(props.remaining)  } remaining </p> }
            </div>
            <button className="btn-viewDetails" >
           
              <Link style={{ textDecoration:"none" , color:"white" }} to={ `budget/${props.id}`}  > View Details</Link>
            </button>

        </div>
    )
}