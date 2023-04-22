
import { Budgets } from "../Contex/AppContex"
import { useState } from "react"

export function ExistingBudget(props:Budgets){


  const [ value, setValue] = useState<number>(100)

  const changePercentage = () => {

    
    
  }

let options ={ style: 'currency', currency: 'DOP' };

 let  formaters = new Intl.NumberFormat( 'en-Es', options) 

    return (
        <div className="budget-box" key={props.id}>
            <div style={{ display:"flex", width: "90%", justifyContent:"space-between" , marginLeft:"2%"}} >
              <p>{ props.name }</p>
              <p>{ formaters.format(props.amount)  } Budgeted</p>
            </div>
            <input onChange={(e) => console.log(e.target.value)} value={value} style={{ width:"90%" }} type="range" />
            <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px" }} >
              <p> 2000 spent</p>
              <p>  10000 remaining</p>
            </div>
            <button>View Details</button>

        </div>
    )
}