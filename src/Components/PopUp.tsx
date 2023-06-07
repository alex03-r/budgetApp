

import { useContext } from  "react"
import { BudgetContex } from "../Contex/AppContex"



export function PopUp(){


    const { popUpValues  } = useContext(BudgetContex) 


    return (
        <div className="border rounded w-1/2 flex flex-col justify-center content-center absolute h-1/6 " style={{ top:"10px" }} >
            <h1>{ popUpValues.title || "titulo" }</h1>
            <div>
                <p>{ popUpValues.text || "que quieres hacer" }</p>
            </div>
            <div>
                <button onClick={ () => popUpValues.action() } >{ popUpValues.actionName || "jj" } </button>
            </div>
        </div>
    )

}