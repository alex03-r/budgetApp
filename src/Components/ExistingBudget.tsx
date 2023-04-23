
import { Budgets } from "../Contex/AppContex"
import { formatWithCurrency, formatAmount } from "../helpers/helper";

export function ExistingBudget(props:Budgets){


    return (
        <div className="budget-box" key={props.id}>
            <div style={{ display:"flex", width: "90%", justifyContent:"space-between" , marginLeft:"2%"}} >
              <p>{ props.name }</p>
              <p>{ formatWithCurrency(props.amount)  } Budgeted</p>
            </div>
            <input  value={props.rangeValue} style={{ width:"90%" }} type="range" />
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px",width: "90%" }} >
             { props.hasExpenses &&   <p> { formatAmount(props.spent)  } spent</p>    } 
             { props.hasExpenses && <p> {formatAmount(props.remaining)  } remaining </p> }
            </div>
            <button onClick={() => alert(props.name)} >View Details</button>

        </div>
    )
}